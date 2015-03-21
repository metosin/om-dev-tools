(ns example.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [cljs.core.async :refer [put!]]
            [sablono.core :refer-macros [html]]
            [om-dev-tools.core :as dev])
  (:import [goog.date UtcDateTime DateTime Date]))

(defonce state (atom {:current-page {:id :index}
                      :user nil
                      :index {:test/items 5
                              :items [1 2 3]
                              :foobar "    abc   "}
                      :dates {:utc-datetime (UtcDateTime.)
                              :datetime (DateTime.)
                              :date (Date.)}
                      :example {:text "hello world"}}))

(defonce dev-state (atom (-> (dev/empty-state)
                             (assoc :open? true)
                             (assoc-in [:state-tree-state :example] {}))))

(defn example [state owner]
  (om/component
    (html
      [:input.form-control
       {:value (:text state)
        :on-change #(om/update! state :text (.. % -target -value))}])))

(defn app-view [app-state owner]
  (om/component
    (html
      [:div
       [:h1 "Example "
        [:a {:href "https://github.com/metosin/om-dev-tools/blob/master/example/src/cljs/example/main.cljs"} "(Code)"]
        (om/build example (:example app-state))]])))

(defn restart! []
  (dev/root app-view state {:target (.getElementById js/document "app")
                            :dev-target (.getElementById js/document "dev")
                            :dev-state dev-state}))

(restart!)
