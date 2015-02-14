# Om-dev-tools

Some stuff I have found useful with developing Om applications.
Om instrumentation stuff is originally from Circle CI: [Instrumenting
Om Component](https://dwwoelfel.github.io/instrumenting-om-components.html).

## Usage

### ClojureScript

Check [example](./example/src/cljs/example.main.cljs).
`core`-ns offers a quick and easy way to use om-dev-tools but you could
also manually use provided stuff and e.g. use your own UI.

### Styles

Jar should contain files `om-dev-tools/om-dev-tools.css` and `om-dev-tools/om-dev-tools.less`.
You can either serve the css files and refer than from your `index.html`.
If you are using LESS you can `@import "om-dev-tools/om-dev-tools.less";` if using Less tool which reads
imports from classpath such as: [boot-less](https://github.com/Deraen/boot-less)
or [lein-less4j](https://github.com/Deraen/lein-less4j).


## TODO

- Use as few deps as possible
  - [ ] Remove cljs-time
  - [ ] Remove om-tools and sablono, or maybe just sablono?
  - [ ] Remove bootstrap dependancy from styles
- Styling could use work

## License

Copyright © 2015 [Metosin Oy](http://www.metosin.fi)

Distributed under the Eclipse Public License, the same as Clojure.
