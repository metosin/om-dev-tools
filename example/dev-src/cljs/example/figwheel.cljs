(ns example.figwheel
  (:require [figwheel.client :as fw]
            [example.main :as example]))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3451/figwheel-ws")
