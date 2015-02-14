(ns om-dev-tools.state-tree
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]))

(defn- toggle [ks v]
  (if (get-in v ks)
    (assoc-in v ks nil)
    (assoc-in v ks {})))

(defn- tree [state v ks]
  (cond
    (coll? v)
    [:ul
     (for [[k v] (if (map? v)
                   v
                   (zipmap (range) v))
           :let [ks (conj ks k)]]
       [:li
        {:key k
         :class [(if (coll? v) "coll" "single") (if (get-in state ks) "open" "closed")]}
        [:strong
         {:on-click #(om/transact! state (partial toggle ks))}
         (if (keyword? k)
           (name k)
           k)] ": "
        (if (or (not (coll? v)) (get-in state ks))
          (tree state v ks))])]

    (string? v) [:pre "\"" v "\""]
    (nil? v)    [:i "nil"]
    (instance? goog.date.UtcDateTime v) [:span (str v) [:span.type "datetime"]]
    (instance? goog.date.Date v) [:span (str v) [:span.type "localdate"]]
    :default [:span (str v)]))

(defcomponent state-view
  [{:keys [state-tree-state app-state]} owner opts]
  (render [_]
    (html
      [:div.om-dev-tools-state-tree
       (tree state-tree-state app-state [])])))

(defcomponent state-panel
  [{:keys [state-tree-state]} owner opts]
  (render [_]
    (let [app-state (om/observe owner (om/ref-cursor (om/root-cursor (:app-state opts))))]
      (om/build state-view {:app-state app-state
                            :state-tree-state state-tree-state}))))
