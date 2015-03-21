# Om-dev-tools

[![Clojars Project](http://clojars.org/metosin/om-dev-tools/latest-version.svg)](http://clojars.org/metosin/om-dev-tools)

Some stuff I have found useful with developing Om applications.
Om instrumentation stuff is originally from Circle CI: [Instrumenting
Om Component](https://dwwoelfel.github.io/instrumenting-om-components.html).

## Usage

### ClojureScript

Check [example](./example/src/cljs/example/main.cljs).
`core`-ns offers a quick and easy way to use om-dev-tools but you could
also manually use provided stuff and e.g. use your own UI.

### Styles

Jar should contain files `om-dev-tools/om-dev-tools.css` and `om-dev-tools/om-dev-tools.less`.
You can serve the css files and refer than from your `index.html`.
If you are using LESS tool which reads imports from classpath,
like [boot-less](https://github.com/Deraen/boot-less)
or [lein-less4j](https://github.com/Deraen/lein-less4j),
you can `@import "om-dev-tools/om-dev-tools.less";`.

## Ideas

- History navigation ([om-dev-component](https://github.com/ioRekz/om-dev-component))
- Copy & paste state
- Would it be possible to run (some parts of) this on Chrome dev tools?

## TODO

- State tree should probably use a protocol to determine how to display different types
- Use as few deps as possible
  - [x] Remove cljs-time
  - [x] Remove om-tools
  - [ ] Remove sablono?
  - [ ] Remove bootstrap dependancy from styles
- Styling could use work

## License

Copyright © 2015 [Metosin Oy](http://www.metosin.fi)

Distributed under the Eclipse Public License, the same as Clojure.
