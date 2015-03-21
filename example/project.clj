(defproject metosin/om-dev-tools-example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [metosin/om-dev-tools "0.1.8-SNAPSHOT"]

                 [org.webjars/bootstrap "3.3.2"]

                 [figwheel "0.2.4-SNAPSHOT"]]
  :resource-paths ["resources" "target/generated/css"]

  :cljsbuild
  {:builds {:dev {:source-paths ["src/cljs" "checkouts/om-dev-tools/src/cljs" "dev-src/cljs"]
                  :compiler {:main "example.figwheel"
                             :asset-path "js/out"
                             :output-to "target/cljsbuild-dev/public/js/app.js"
                             :output-dir "target/cljsbuild-dev/public/js/out"
                             :source-map true
                             :optimizations :none
                             :cache-analysis true
                             :pretty-print true}}
            :adv {:source-paths ["src/cljs" "checkouts/om-dev-tools/src/cljs"]
                  :compiler {:main "example.main"
                             :output-to "target/cljsbuild-adv/public/js/app.js"
                             :output-dir "target/cljsbuild-adv/public/js/out"
                             :source-map "target/cljsbuild-adv/public/js/app.js.map"
                             :optimizations :advanced
                             :pretty-print false}}}}

  :less {:source-paths ["src/less" "checkouts/om-dev-tools/resources" "checkouts/om-dev-tools/src/less"]
         :target-path "target/generated/css/public"
         :source-map true}

  :figwheel {:http-server-root "public"
             :server-port 3451
             :css-dirs ["target/generated/css/public"]
             :repl false}

  :profiles
  {:dev
   {:source-paths ["dev-src/clj"]
    :plugins [[lein-cljsbuild "1.0.4"]
              [lein-figwheel "0.2.4-SNAPSHOT"]
              [deraen/lein-less4j "0.2.1"]
              [lein-pdo "0.1.1"]]

    :resource-paths ["target/cljsbuild-dev"]}

   :uberjar
   {:resource-paths ["target/cljsbuild-adv"]}}

  :aliases {"develop" ["pdo" ["less4j" "auto"] ["figwheel"]]})
