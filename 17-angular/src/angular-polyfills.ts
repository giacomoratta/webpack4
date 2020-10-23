// Error1 in browser console: Uncaught (in promise) Error: In this configuration Angular requires Zone.js

import 'core-js/es' // not 'core-js/es6' because unable to import
import 'reflect-metadata'
import 'zone.js' // error about "subsequent variable declarations" -> fixed with previous node types `npm install @types/node@14.0.4 --saveDev`