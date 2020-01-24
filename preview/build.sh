#!/bin/sh
echo 'concatenating files'
cat ./dist/custom-form/runtime-es2015.js \
./dist/custom-form/polyfills-es2015.js \
./dist/custom-form/scripts.js \
./dist/custom-form/main-es2015.js > ./preview/customform.js && \
cp ./dist/custom-form/styles.css ./preview/styles.css
