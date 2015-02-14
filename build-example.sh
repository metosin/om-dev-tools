#!/bin/bash

rev=$(git rev-parse HEAD)

if [[ ! -d gh-pages ]]; then
    git clone --branch gh-pages $(git config --get remote.origin.url) gh-pages
fi

(
cd gh-pages
git pull origin gh-pages
)

(
cd example
lein do less4j once, cljsbuild once adv
)

cp -r example/resources/public/* gh-pages
cp -r example/target/cljsbuild-adv/public/* gh-pages
cp -r example/target/generated/css/public/* gh-pages

cd gh-pages
git add --all
git commit -m "Build example from ${rev}."
git push origin gh-pages
