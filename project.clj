(defproject metosin/om-dev-tools "0.1.8-SNAPSHOT"
  :description "Development tool panel for Om"
  :url "https://github.com/metosin/om-dev-tools"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [org.clojure/clojurescript "0.0-3126" :scope "provided"]
                 [org.omcljs/om "0.8.8"]
                 [sablono "0.3.4"]]

  :less {:source-paths ["src/less" "resources"]
         :target-path "target/classes"}

  :plugins [[lein-pprint "1.1.2"]]

  :profiles
  {:dev
   {:source-paths ["dev-src/clj"]
    :dependencies [[org.webjars/bootstrap "3.3.2"]]
    :plugins [[deraen/lein-less4j "0.2.1"]]}}

  :auto-clean false
  :aliases {"build" ["do" ["clean"] ["less4j" "once"] ["jar"]]})
