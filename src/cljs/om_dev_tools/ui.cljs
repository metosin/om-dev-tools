(ns om-dev-tools.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [om.core :as om]
            [sablono.core :refer-macros [html]]
            [om-dev-tools.instrumentation :as instrumentation]
            [om-dev-tools.state-tree :as state-tree]
            [goog.string :as gs]))

(def default-panels
  {:state-tree {:label "State"
                :component state-tree/state-panel}
   :instrumentation {:label "Om instrumentation"
                     :component instrumentation/stats-panel}})

(defn dev-tools [{:keys [open? current] :as state} owner {:keys [panels] :as opts}]
  (om/component
    ; FIXME:
    ; NOTE: Will break other stuff which might set body class
    ; Doesn't use classList because IE9 doesn't support that
    (set! js/window.document.body.className (if open? "dev" ""))
    (html
      (if open?
        (let [all-panels (merge default-panels panels)]
          [:div.om-dev-tools
           [:ul.nav.nav-tabs
            (for [[k {:keys [label]}] all-panels]
              [:li
               {:class (if (= (:current state) k) "active")}
               [:a {:on-click #(om/update! state :current k)} label]])
            [:li.pull-right
             [:button.close
              {:onClick #(om/transact! state :open? not)}
              [:span "×"]]]]
           (om/build (:component (get all-panels current)) state {:opts opts})])
        [:button.pull-right.om-dev-tools-btn
         {:onClick #(om/transact! state :open? not)}
         "dev"]))))
