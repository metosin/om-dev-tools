(ns om-dev-tools.instrumentation
  (:require [om.core :as om]
            [sablono.core :refer-macros [html]]))

;; Source: https://github.com/circleci/frontend/blob/2f58976e57000c448a22440e69573c4f0b7c581b/frontend/instrumentation.cljs

(defn react-id [x]
  ; FIXME: This is not accesible in React 0.13
  (let [id (aget x "_rootNodeID")]
    (assert id)
    id))

(defn- now []
  (.getTime (js/Date.)))

(defn- display-time [ts]
  (let [d (js/Date. ts)]
    (str (.getHours d) ":" (.getMinutes d) ":" (.getSeconds d) "." (.getMilliseconds d))))

(defn wrap-will-update
  "Tracks last call time of componentWillUpdate for each component, then calls
   the original componentWillUpdate."
  [state f]
  (fn [next-props next-state]
    (this-as this
      (swap! state update-in [:component-stats (react-id this)]
             (fn [x]
               (merge x {:display-name ((aget this "getDisplayName"))
                         :last-will-update (now)})))
      (.call f this next-props next-state))))

(defn wrap-did-update
  "Tracks last call time of componentDidUpdate for each component and updates
   the render times (using start time provided by wrap-will-update), then
   calls the original componentDidUpdate."
  [state f]
  (fn [prev-props prev-state]
    (this-as this
      (swap! state update-in [:component-stats (react-id this)]
             (fn [stats]
               (let [t (now)]
                 (-> stats
                     (assoc :last-did-update t)
                     (update-in [:render-ms] (fnil conj [])
                                (if (> t (:last-will-update stats))
                                  (- t (:last-will-update stats))
                                  0))))))
      (.call f this prev-props prev-state))))

(defn instrumentation-methods [state]
  (om/specify-state-methods!
    (-> om/pure-methods
        (update-in [:componentWillUpdate] (partial wrap-will-update state))
        (update-in [:componentDidUpdate] (partial wrap-did-update state))
        (clj->js))))

(defn avg [coll]
  (/ (reduce + coll)
     (count coll)))

(defn std-dev [coll]
  (let [a (avg coll)]
    (Math/sqrt (avg (map #(Math/pow (- % a) 2) coll)))))

(defn stats-view [data owner]
  (om/component
    (html
      [:div
       (when-not (om/get-state owner :shown?)
         (let [stats (map (fn [[display-name renders]]
                            (let [times (mapcat :render-ms renders)]
                              {:display-name (or display-name "Unknown")
                               :render-count (count times)
                               :last-will-update (last (sort (map :last-will-update renders)))
                               :last-render-ms (last (:render-ms (last (sort-by :last-did-update renders))))
                               :average-render-ms (when (seq times) (int (avg times)))
                               :max-render-ms (when (seq times) (apply max times))
                               :min-render-ms (when (seq times) (apply min times))
                               :std-dev (when (seq times) (int (std-dev times)))}))
                          (reduce (fn [acc [react-id data]]
                                    (update-in acc [(:display-name data)] (fnil conj []) data))
                                  {} data))]
           [:div {:className "admin-stats"}
            [:table
             [:thead
              [:tr
               [:th
                "component"
                [:button.btn.btn-primary.btn-xs
                 {:onClick #(om/transact! data (constantly {}))}
                 "Clear"]]
               [:th {:className "number"} "count"]
               [:th {:className "number"} "last-update"]
               [:th {:className "number"} "last-ms"]
               [:th {:className "number"} "average-ms"]
               [:th {:className "number"} "max-ms"]
               [:th {:className "number"} "min-ms"]
               [:th {:className "number"} "std-ms"]]]
             [:tbody
              (for [{:keys [display-name last-will-update average-render-ms
                            max-render-ms min-render-ms std-dev render-count
                            last-render-ms]
                     :as stat}
                    (reverse (sort-by :last-will-update stats))]
                [:tr
                 [:td display-name]
                 [:td {:className "number" } render-count]
                 [:td {:className "number" } (if last-will-update (display-time last-will-update))]
                 [:td {:className "number" } last-render-ms]
                 [:td {:className "number" } average-render-ms]
                 [:td {:className "number" } max-render-ms]
                 [:td {:className "number" } min-render-ms]
                 [:td {:className "number" } std-dev]])]]]))])))
