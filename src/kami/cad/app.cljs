(ns kami.cad.app (:require [kami.cad :as cad] [kami.webgpu.mesh :as gpu]))
(defn sections [] [(cad/curve [[-2 0 0] [0 2 0] [2 0 0]] [1 1 1]) (cad/curve [[-2 0 2] [0 3 2] [2 0 2]] [1 1 1])])
(defonce state (atom {:sections (sections) :segments 16 :selected-section 0 :selected-point 1
                      :history [] :future [] :azimuth 0.7 :elevation 0.45}))
(defonce viewport (atom nil))
(defn- mesh [] (cad/loft-mesh (cad/loft (:sections @state) (:segments @state))))
(defn- upload! []
  (when-let [v @viewport]
    (let [m (mesh)]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) m))
      (set! (.-textContent (.getElementById js/document "stats")) (str "2 sections · " (count (:positions m)) " vertices · " (/ (count (:indices m)) 3) " triangles"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:segments (:segments @state)
                                         :sectionWidth (- (first (last (:cad/control-points (first (:sections @state)))))
                                                          (first (first (:cad/control-points (first (:sections @state))))))
                                         :controlPoints (mapv :cad/control-points (:sections @state))}))))))
(defn- commit! [sections] (swap! state (fn [s] (-> s (update :history conj (:sections s)) (assoc :sections sections :future [])))) (upload!))
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (let [{:keys [azimuth elevation]} @state d 8 eye [(* d (js/Math.cos elevation) (js/Math.cos azimuth)) (* d (js/Math.sin elevation)) (* d (js/Math.cos elevation) (js/Math.sin azimuth))]] (gpu/render-frame! v buffers eye [0 1 1] [0.45 0.7 1.0])))) (js/requestAnimationFrame draw!))
(defn- num [id] (js/parseFloat (.-value (.getElementById js/document id))))
(defn- sync-point-fields! []
  (let [{:keys [sections selected-section selected-point]} @state
        point (get-in sections [selected-section :cad/control-points selected-point])
        weight (get-in sections [selected-section :cad/weights selected-point])]
    (doseq [[id value] (map vector ["cp-x" "cp-y" "cp-z"] point)]
      (set! (.-value (.getElementById js/document id)) value))
    (set! (.-value (.getElementById js/document "weight")) weight)))
(defn ^:export init! []
 (let [canvas (.getElementById js/document "gpu-canvas") drag (atom nil)]
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
  (.addEventListener (.getElementById js/document "reset") "click" #(do (commit! (sections)) (sync-point-fields!)))
  (.addEventListener (.getElementById js/document "fit") "click" #(swap! state assoc :azimuth 0.7 :elevation 0.45))
  (.addEventListener (.getElementById js/document "segments") "input" #(do (swap! state assoc :segments (js/parseInt (.. % -target -value))) (upload!)))
  (.addEventListener (.getElementById js/document "undo") "click" #(when-let [prev (peek (:history @state))] (swap! state (fn [s] (assoc s :sections prev :history (pop (:history s)) :future (conj (:future s) (:sections s))))) (upload!)))
  (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [next (peek (:future @state))] (swap! state (fn [s] (assoc s :sections next :future (pop (:future s)) :history (conj (:history s) (:sections s))))) (upload!))))
  (.addEventListener canvas "pointerdown" #(reset! drag [(.-clientX %) (.-clientY %)])) (.addEventListener js/window "pointerup" #(reset! drag nil))
  (.addEventListener js/window "pointermove" (fn [e] (when-let [[x y] @drag] (swap! state update :azimuth + (* 0.008 (- (.-clientX e) x))) (swap! state update :elevation #(max -1.2 (min 1.2 (+ % (* 0.008 (- (.-clientY e) y)))))) (reset! drag [(.-clientX e) (.-clientY e)]))))
  (.addEventListener (.getElementById js/document "export") "click" #(let [a (.createElement js/document "a")] (set! (.-href a) (.createObjectURL js/URL (js/Blob. #js [(pr-str (:sections @state))] #js {:type "application/edn"}))) (set! (.-download a) "cad-project.edn") (.click a)))))
