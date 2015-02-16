(defproject metosin/om-dev-tools "0.1.5-SNAPSHOT"
  :description "Development tool panel for Om"
  :url "https://github.com/metosin/om-dev-tools"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [org.clojure/clojurescript "0.0-2850" :scope "provided"]

                 [org.omcljs/om "0.8.8"]
                 [prismatic/om-tools "0.3.10" :exclusions [org.clojure/clojure]]
                 [sablono "0.3.3"]
                 [com.andrewmcveigh/cljs-time "0.3.2"]]

  :less {:source-paths ["src/less" "resources"]
         :target-path "target/classes"}

  :plugins [[lein-pprint "1.1.2"]]

  :profiles
  {:dev
   {:source-paths ["dev-src/clj"]
    :dependencies [[org.webjars/bootstrap "3.3.2"]]
    :plugins [[lein-less4j "0.1.3-SNAPSHOT"]]}}

  :auto-clean false
  :aliases {"build" ["do" ["clean"] ["less4j" "once"] ["jar"]]})
