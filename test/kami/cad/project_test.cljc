(ns kami.cad.project-test (:require [clojure.test :refer [deftest is]] [kami.cad :as cad] [kami.cad.project :as project]))
(def sections [(cad/curve [[-2 0 0] [0 2 0] [2 0 0]] [1 1 1]) (cad/curve [[-2 0 2] [0 3 2] [2 0 2]] [1 1 1])])
(deftest round-trip
  (let [p (project/document {:id "loft" :name "Loft" :sections sections :tessellation 32 :selection {:section 1 :point 2}
                             :camera {:azimuth 1 :elevation 0.2} :precision {:snap 0.1 :sketch-width 5} :interaction {:profile :rhino}})]
    (is (project/valid? p)) (is (= p (project/open p))) (is (= 32 (:project/tessellation p)))))
(deftest legacy-migration (let [p (project/open sections)] (is (= sections (:project/sections p))) (is (= 16 (:project/tessellation p)))))
(deftest rejects-invalid
  (is (thrown? #?(:clj Exception :cljs js/Error) (project/open {:no :geometry})))
  (is (thrown? #?(:clj Exception :cljs js/Error) (project/open {:kami/document :cad-project :kami/version 99}))))
