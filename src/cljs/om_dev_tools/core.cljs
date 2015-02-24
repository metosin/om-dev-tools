(ns om-dev-tools.core
  (:require [om.core :as om]
            [om-dev-tools.ui :as ui]
            [om-dev-tools.instrumentation :as instrumentation]))

(defn empty-state
  "Returns an empty dev tools state."
  []
  {:component-stats {}
   :state-tree-state {}
   :current :state-tree
   :open? false})

(defn root
  "Calls om/root but also initiates om-dev-tools.
   If dev-target is nil, the dev tools is not used,
   this way you can easily disable dev tools for production
   by leaving the target element out of html.

   Options map takes two additional options:
   :dev-target    - (required) a DOM element.
   :dev-state     - (required) a atom containing dev tools state.
   :panels        - (optional  a map defining additional dev UI panels."
  [f value {:keys [dev-target dev-state panels] :as options}]
  {:pre [dev-state]}
  (if dev-target
    (let [inst-methods (instrumentation/instrumentation-methods dev-state)]
      (om/root f value (-> options
                           (dissoc :dev-target :dev-state :panels)
                           (assoc :instrument (fn [f cursor m]
                                                (om/build* f cursor (assoc m :descriptor inst-methods))))))
      (om/root ui/dev-tools dev-state {:target dev-target
                                       :opts {:app-state value
                                              :panels panels}}))
    (om/root f value (dissoc options :dev-target :dev-state :panels))))
