(ns kami.cad.project)
(def current-version 4)
(defn- normalize-snap-units [p]
  (update-in p [:project/precision :snap]
             #(if (#{0.1 0.5 1} %) (/ % 1000.0) %)))
(defn document [{:keys [id name sections tessellation selection camera precision interaction feature-model solid view-mode]}]
  {:kami/document :cad-project :kami/version current-version :project/id (or id "untitled-cad")
   :project/name (or name "Untitled CAD") :project/sections sections :project/tessellation tessellation
   :project/selection selection :project/camera camera :project/precision precision :project/interaction interaction
   :project/feature-model feature-model :project/solid solid :project/view-mode (or view-mode :loft)})
(defn migrate [v]
  (cond
    (= :cad-project (:kami/document v))
    (case (:kami/version v) 4 (normalize-snap-units v)
      3 (assoc (normalize-snap-units v) :kami/version 4 :project/solid nil :project/view-mode :loft)
      2 (assoc (normalize-snap-units v) :kami/version 4 :project/feature-model nil :project/solid nil :project/view-mode :loft)
      1 (-> v (assoc :kami/version 4 :project/precision {:snap 0.001 :sketch-width 4.0}
                     :project/interaction {:profile :rhino}) (dissoc :project/version))
      (throw (ex-info "Unsupported CAD project version" {:version (:kami/version v)})))
    (and (vector? v) (seq v) (:cad/control-points (first v)))
    (document {:sections v :tessellation 16 :selection {:section 0 :point 1}
               :camera {:azimuth 0.7 :elevation 0.45} :precision {:snap 0.001 :sketch-width 4.0}
               :interaction {:profile :rhino}})
    :else (throw (ex-info "Not a CAD project" {:value v}))))
(defn valid? [p]
  (and (= :cad-project (:kami/document p)) (= current-version (:kami/version p))
       (string? (:project/id p)) (string? (:project/name p))
       (every? #(and (seq (:cad/control-points %)) (= (count (:cad/control-points %)) (count (:cad/weights %)))) (:project/sections p))
       (pos-int? (:project/tessellation p)) (map? (:project/selection p)) (map? (:project/camera p))
       (map? (:project/precision p)) (map? (:project/interaction p))))
(defn open [v] (let [p (migrate v)] (when-not (valid? p) (throw (ex-info "Invalid CAD project" {:project p}))) p))
