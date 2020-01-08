#!/bin/sh
ng build custom-form --prod --output-hashing=none && cat ../dist/custom-form/runtime-es2015.js ../dist/custom-form/polyfills-es2015.js ../dist/custom-form/scripts.js ../dist/custom-form/main-es2015.js > customform.js && cp ../dist/custom-form/styles.css styles.css
