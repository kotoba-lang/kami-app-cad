(ns kami.cad.app (:require [cljs.reader :as reader] [clojure.string :as string]
                           [kami.cad :as cad] [kami.cad.project :as project] [kami.webgpu.mesh :as gpu]))
(defn sections [] [(cad/curve [[-2 0 0] [0 2 0] [2 0 0]] [1 1 1]) (cad/curve [[-2 0 2] [0 3 2] [2 0 2]] [1 1 1])])
(defn- feature-model [sections segments]
  (let [sources (mapv (fn [index section] (cad/feature (keyword (str "section-" index)) :source [] {:value section})) (range) sections)]
    (cad/feature-model (conj sources (cad/feature :loft :loft (mapv :feature/id sources) {:segments segments})))))
(defonce state (atom {:sections (sections) :segments 16 :selected-section 0 :selected-point 1
                      :history [] :future [] :azimuth 0.7 :elevation 0.45
                      :profile :rhino :last-command nil :command-status "Ready" :snap 0.001 :sketch-width 4.0
                      :measurement-tolerance 0.000001 :feature-model (feature-model (sections) 16)
                      :project-id "untitled-cad" :project-name "Untitled CAD" :revision 0 :save-status :clean}))
(defonce viewport (atom nil))
(defn- mesh [] (cad/loft-mesh (cad/loft (:sections @state) (:segments @state))))
(defn- measurements []
  (let [selected (nth (:sections @state) (:selected-section @state))
        box (cad/bounds (mapcat #(cad/tessellate % 128) (:sections @state)))]
    {:length (cad/curve-length selected (:measurement-tolerance @state)) :bounds box}))
(defn- upload! []
  (when-let [v @viewport]
    (let [m (mesh) measurement (measurements)]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) m))
      (set! (.-textContent (.getElementById js/document "stats")) (str (count (:sections @state)) " sections · " (count (:positions m)) " vertices · " (/ (count (:indices m)) 3) " triangles"))
      (set! (.-textContent (.getElementById js/document "measurement-result"))
            (str "Length " (.toFixed (:length measurement) 6) " m · Size " (string/join " × " (map #(.toFixed % 4) (get-in measurement [:bounds :size]))) " m"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:segments (:segments @state) :snap (:snap @state) :sectionCount (count (:sections @state))
                                         :selectedSection (:selected-section @state) :profile (name (:profile @state))
                                         :lastCommand (:last-command @state) :commandStatus (:command-status @state)
                                         :projectVersion project/current-version :revision (:revision @state) :saveStatus (name (:save-status @state))
                                         :measuredLength (:length measurement) :boundsSize (get-in measurement [:bounds :size])
                                         :sectionWidth (- (first (last (:cad/control-points (first (:sections @state)))))
                                                          (first (first (:cad/control-points (first (:sections @state))))))
                                         :controlPoints (mapv :cad/control-points (:sections @state))}))))))
(defn- commit! [sections] (swap! state (fn [s] (-> s (update :history conj (:sections s)) (assoc :sections sections :feature-model (feature-model sections (:segments s)) :future [] :save-status :dirty) (update :revision inc)))) (upload!))
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (let [{:keys [azimuth elevation]} @state d 8 eye [(* d (js/Math.cos elevation) (js/Math.cos azimuth)) (* d (js/Math.sin elevation)) (* d (js/Math.cos elevation) (js/Math.sin azimuth))]] (gpu/render-frame! v buffers eye [0 1 1] [0.45 0.7 1.0])))) (js/requestAnimationFrame draw!))
(defn- num [id] (js/parseFloat (.-value (.getElementById js/document id))))
(defn- sync-point-fields! []
  (let [{:keys [sections selected-section selected-point]} @state
        point (get-in sections [selected-section :cad/control-points selected-point])
        weight (get-in sections [selected-section :cad/weights selected-point])]
    (doseq [[id value] (map vector ["cp-x" "cp-y" "cp-z"] point)]
      (set! (.-value (.getElementById js/document id)) value))
    (set! (.-value (.getElementById js/document "weight")) weight)))
(defn- sync-section-options! []
  (let [select (.getElementById js/document "section-index") selected (:selected-section @state)]
    (set! (.-innerHTML select) "")
    (doseq [index (range (count (:sections @state)))]
      (let [option (.createElement js/document "option")]
        (set! (.-value option) index) (set! (.-textContent option) (str "Section " (inc index)))
        (.appendChild select option)))
    (set! (.-value select) selected)))
(defn- offset-section [section dz]
  (update section :cad/control-points #(mapv (fn [[x y z]] [x y (+ z dz)]) %)))
(defn- duplicate-section! []
  (let [{:keys [sections selected-section]} @state source (nth sections selected-section)
        zs (mapcat #(map (fn [p] (nth p 2)) (:cad/control-points %)) sections)
        dz (max 0.1 (/ (- (reduce max zs) (reduce min zs)) (max 1 (dec (count sections)))))
        insert-at (inc selected-section) result (vec (concat (subvec sections 0 insert-at)
                                                             [(offset-section source dz)] (subvec sections insert-at)))]
    (swap! state assoc :selected-section insert-at) (commit! result) (sync-section-options!) (sync-point-fields!)))
(defn- delete-section! []
  (when (> (count (:sections @state)) 2)
    (let [index (:selected-section @state) result (vec (concat (subvec (:sections @state) 0 index)
                                                               (subvec (:sections @state) (inc index))))]
      (swap! state assoc :selected-section (min index (dec (count result))))
      (commit! result) (sync-section-options!) (sync-point-fields!))))
(defn- move-section! [delta]
  (let [index (:selected-section @state) target (+ index delta) sections (:sections @state)]
    (when (< -1 target (count sections))
      (let [a (nth sections index) b (nth sections target) result (assoc sections index b target a)]
        (swap! state assoc :selected-section target) (commit! result) (sync-section-options!) (sync-point-fields!)))))
(def command-aliases
  {:rhino {"trim" :trim "fit" :fit "zoom extents" :fit "reset" :reset "solvewidth" :solve-width "undo" :undo "redo" :redo}
   :autocad {"tr" :trim "trim" :trim "z" :fit "ze" :fit "regen" :reset "dim" :solve-width "u" :undo "redo" :redo}
   :fusion {"trim" :trim "fit" :fit "home" :fit "reset" :reset "dimension" :solve-width "undo" :undo "redo" :redo}
   :plasticity {"t" :trim "trim" :trim "f" :fit "fit" :fit "reset" :reset "d" :solve-width "undo" :undo "redo" :redo}})
(defn- run-command! [text]
  (let [normalized (-> text .trim .toLowerCase) command (get-in command-aliases [(:profile @state) normalized])
        button-id ({:trim "trim" :fit "fit" :reset "reset" :solve-width "solve-width" :undo "undo" :redo "redo"} command)]
    (if button-id
      (do (swap! state assoc :last-command normalized :command-status (str "Executed " normalized))
          (.click (.getElementById js/document button-id)))
      (swap! state assoc :command-status (str "Unknown command: " normalized)))
    (set! (.-textContent (.getElementById js/document "command-status")) (:command-status @state))
    (set! (.-value (.getElementById js/document "command")) "")
    (upload!)))
(defn- editable-target? [event]
  (let [target (.-target event) tag (some-> target .-tagName .toLowerCase)]
    (or (#{"input" "select" "textarea"} tag) (.-isContentEditable target))))
(def ^:private storage-key "kami.cad.project.v2")
(def ^:private backup-key "kami.cad.project.backup")
(defn- project-document []
  (let [{:keys [project-id project-name sections segments selected-section selected-point azimuth elevation snap sketch-width measurement-tolerance profile feature-model]} @state]
    (project/document {:id project-id :name project-name :sections sections :tessellation segments
                       :selection {:section selected-section :point selected-point} :camera {:azimuth azimuth :elevation elevation}
                       :precision {:snap snap :sketch-width sketch-width :measurement-tolerance measurement-tolerance} :interaction {:profile profile}
                       :feature-model feature-model})))
(defn- save-project! []
  (let [data (pr-str (project-document)) old (.getItem js/localStorage storage-key)]
    (when old (.setItem js/localStorage backup-key old)) (.setItem js/localStorage storage-key data)
    (swap! state assoc :save-status :saved) (upload!)))
(defn- apply-project! [value]
  (let [p (project/open value) selection (:project/selection p) camera (:project/camera p)
        precision (:project/precision p) interaction (:project/interaction p)]
    (swap! state assoc :project-id (:project/id p) :project-name (:project/name p) :sections (:project/sections p)
           :segments (:project/tessellation p) :selected-section (:section selection) :selected-point (:point selection)
           :azimuth (:azimuth camera) :elevation (:elevation camera) :snap (:snap precision) :sketch-width (:sketch-width precision)
           :measurement-tolerance (:measurement-tolerance precision 0.000001)
           :feature-model (or (:project/feature-model p) (feature-model (:project/sections p) (:project/tessellation p)))
           :profile (:profile interaction) :history [] :future [] :save-status :saved)
    (doseq [[id value] [["segments" (:project/tessellation p)] ["section-index" (:section selection)] ["point-index" (:point selection)]
                        ["snap" (:snap precision)] ["sketch-width" (:sketch-width precision)]
                        ["measurement-tolerance" (:measurement-tolerance precision 0.000001)] ["profile" (name (:profile interaction))]]]
      (set! (.-value (.getElementById js/document id)) value))
    (sync-section-options!) (sync-point-fields!) (upload!)))
(defn- load-project! []
  (when-let [data (.getItem js/localStorage storage-key)]
    (try (apply-project! (reader/read-string data))
         (catch :default _ (when-let [backup (.getItem js/localStorage backup-key)] (apply-project! (reader/read-string backup)))))))
(defn- download-project! []
  (let [a (.createElement js/document "a") url (.createObjectURL js/URL (js/Blob. #js [(pr-str (project-document))] #js {:type "application/edn"}))]
    (set! (.-href a) url) (set! (.-download a) "design.kami-cad.edn") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- import-project! [event]
  (when-let [file (aget (.. event -target -files) 0)] (-> (.text file) (.then #(apply-project! (reader/read-string %))))))
(defn- download-measurements! []
  (let [{:keys [length bounds]} (measurements) a (.createElement js/document "a")
        data (str "property,x,y,z\nmin," (string/join "," (:min bounds)) "\nmax," (string/join "," (:max bounds))
                  "\nsize," (string/join "," (:size bounds)) "\ncurve_length," length ",,")
        url (.createObjectURL js/URL (js/Blob. #js [data] #js {:type "text/csv;charset=utf-8"}))]
    (set! (.-href a) url) (set! (.-download a) "cad-measurements.csv") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn ^:export init! []
 (let [canvas (.getElementById js/document "gpu-canvas") drag (atom nil)]
  (.setAttribute (.getElementById js/document "snap") "aria-label" "Precision snap increment")
  (-> (gpu/init-canvas! canvas) (.then (fn [v] (reset! viewport v) (upload!) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!))))
  (.addEventListener (.getElementById js/document "apply") "click"
                     #(let [inc (num "snap") p (cad/snap-point [(num "cp-x") (num "cp-y") (num "cp-z")] inc)
                            w (num "weight") {:keys [sections selected-section selected-point]} @state]
                        (commit! (update sections selected-section
                                         (fn [section] (-> section (cad/move-control-point selected-point p) (cad/set-weight selected-point w)))))))
  (doseq [id ["section-index" "point-index"]]
    (.addEventListener (.getElementById js/document id) "change"
                       #(do (swap! state assoc
                                   :selected-section (js/parseInt (.-value (.getElementById js/document "section-index")))
                                   :selected-point (js/parseInt (.-value (.getElementById js/document "point-index"))))
                            (sync-point-fields!))))
  (.addEventListener (.getElementById js/document "duplicate-section") "click" duplicate-section!)
  (.addEventListener (.getElementById js/document "delete-section") "click" delete-section!)
  (.addEventListener (.getElementById js/document "section-up") "click" #(move-section! -1))
  (.addEventListener (.getElementById js/document "section-down") "click" #(move-section! 1))
  (.addEventListener (.getElementById js/document "trim") "click"
                     #(let [t0 (num "trim-start") t1 (num "trim-end")]
                        (commit! (mapv (fn [section] (cad/trim-curve section t0 t1)) (:sections @state)))
                        (sync-point-fields!)))
  (.addEventListener (.getElementById js/document "solve-width") "click"
                     #(let [width (max 0.1 (num "sketch-width")) half (/ width 2)
                            sketch (cad/sketch [(cad/sketch-point :left (- half) 0 true)
                                                (cad/sketch-point :right (+ half 0.35) 0.2)]
                                               [(cad/sketch-line :baseline :left :right)]
                                               [(cad/horizontal :horizontal :baseline)
                                                (cad/distance-constraint :width :left :right width)])
                            solved (cad/solve-sketch sketch)
                            [left _] (get-in solved [:sketch/points :left :sketch.point/position])
                            [right _] (get-in solved [:sketch/points :right :sketch.point/position])
                            sections (mapv (fn [section]
                                             (-> section
                                                 (cad/move-control-point 0 (assoc (get-in section [:cad/control-points 0]) 0 left))
                                                 (cad/move-control-point 2 (assoc (get-in section [:cad/control-points 2]) 0 right))))
                                           (:sections @state))]
                        (set! (.-textContent (.getElementById js/document "solver-status"))
                              (if (get-in solved [:sketch/solver :converged?]) "Fully constrained" "Constraint conflict"))
                        (commit! sections)
                        (sync-point-fields!)))
  (.addEventListener (.getElementById js/document "reset") "click" #(do (swap! state assoc :selected-section 0) (commit! (sections)) (sync-section-options!) (sync-point-fields!)))
  (.addEventListener (.getElementById js/document "fit") "click" #(swap! state assoc :azimuth 0.7 :elevation 0.45))
  (.addEventListener (.getElementById js/document "segments") "input" #(do (swap! state assoc :segments (js/parseInt (.. % -target -value)) :save-status :dirty) (upload!)))
  (.addEventListener (.getElementById js/document "snap") "change" #(swap! state assoc :snap (num "snap") :save-status :dirty))
  (.addEventListener (.getElementById js/document "sketch-width") "change" #(swap! state assoc :sketch-width (num "sketch-width") :save-status :dirty))
  (.addEventListener (.getElementById js/document "measurement-tolerance") "change"
                     #(do (swap! state assoc :measurement-tolerance (max 1.0e-10 (num "measurement-tolerance"))) (upload!)))
  (.addEventListener (.getElementById js/document "export-measurements") "click" download-measurements!)
  (.addEventListener (.getElementById js/document "profile") "change"
                     #(do (swap! state assoc :profile (keyword (.. % -target -value)))
                          (set! (.-textContent (.getElementById js/document "profile-hint"))
                                (case (:profile @state) :autocad "TR Trim · Z/ZE Fit · DIM Solve"
                                      :fusion "Trim · Fit · Dimension"
                                      :plasticity "T Trim · F Fit · D Dimension"
                                      "Trim · Zoom Extents · SolveWidth")) (upload!)))
  (.addEventListener (.getElementById js/document "command") "keydown"
                     #(when (= "Enter" (.-key %)) (.preventDefault %) (run-command! (.. % -target -value))))
  (.addEventListener js/window "keydown"
                     #(when (and (not (editable-target? %)) (= "/" (.-key %)))
                        (.preventDefault %) (.focus (.getElementById js/document "command"))))
  (.addEventListener (.getElementById js/document "undo") "click" #(when-let [prev (peek (:history @state))] (swap! state (fn [s] (assoc s :sections prev :selected-section (min (:selected-section s) (dec (count prev))) :history (pop (:history s)) :future (conj (:future s) (:sections s))))) (sync-section-options!) (sync-point-fields!) (upload!)))
  (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [next (peek (:future @state))] (swap! state (fn [s] (assoc s :sections next :selected-section (min (:selected-section s) (dec (count next))) :future (pop (:future s)) :history (conj (:history s) (:sections s))))) (sync-section-options!) (sync-point-fields!) (upload!))))
  (.addEventListener canvas "pointerdown" #(reset! drag [(.-clientX %) (.-clientY %)])) (.addEventListener js/window "pointerup" #(reset! drag nil))
  (.addEventListener js/window "pointermove" (fn [e] (when-let [[x y] @drag] (swap! state update :azimuth + (* 0.008 (- (.-clientX e) x))) (swap! state update :elevation #(max -1.2 (min 1.2 (+ % (* 0.008 (- (.-clientY e) y)))))) (reset! drag [(.-clientX e) (.-clientY e)]))))
  (.addEventListener (.getElementById js/document "save-project") "click" save-project!)
  (.addEventListener (.getElementById js/document "load-project") "click" load-project!)
  (.addEventListener (.getElementById js/document "import") "click" #(.click (.getElementById js/document "import-file")))
  (.addEventListener (.getElementById js/document "import-file") "change" import-project!)
  (.addEventListener (.getElementById js/document "export") "click" download-project!)))
