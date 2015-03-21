(ns om-dev-tools.state-tree
  (:require [om.core :as om]
            [sablono.core :refer-macros [html]])
  (:import [goog.date UtcDateTime DateTime Date]))

(defn- toggle [ks v]
  (if (get-in v ks)
    (assoc-in v ks nil)
    (assoc-in v ks {})))

(defn- key->string [k]
  (cond
    (keyword? k)
    (let [s (namespace k)
          n (name k)]
      (if s
        (str s "/" n)
        n))

    :default k))

(defn- tree [state v ks]
  (cond
    (coll? v)
    [:ul
     (for [[k v] (if (map? v)
                   v
                   (zipmap (range) v))
           :let [ks (conj ks k)]]
       [:li
        {:key (key->string k)
         :class [(if (coll? v) "coll" "single") (if (get-in state ks) "open" "closed")]}
        [:strong
         {:on-click #(om/transact! state (partial toggle ks))}
         (if (keyword? k)
           (key->string k)
           k)] ": "
        (if (or (not (coll? v)) (get-in state ks))
          (tree state v ks))])]

    (string? v) [:pre "\"" v "\""]
    (nil? v)    [:i "nil"]
    (instance? UtcDateTime v) [:span (str v) [:span.type "UtcDateTime"]]
    (instance? DateTime v) [:span (str v) [:span.type "DateTime"]]
    (instance? Date v) [:span (str v) [:span.type "Date"]]
    :default [:span (str v)]))

(defn state-view [{:keys [state app-state]} owner opts]
  (om/component
    (html
      [:div.om-dev-tools-state-tree (tree state app-state [])])))

(defn state-panel [state owner opts]
  (om/component
    (let [app-state (om/observe owner (om/ref-cursor (om/root-cursor (:app-state opts))))]
      (om/build state-view {:app-state app-state
                            :state state}))))
