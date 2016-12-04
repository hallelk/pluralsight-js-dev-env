// transpile using babel before running tests
require('babel-register')();

// disable webpacks that Mocha doesn't understand
require.extensions['.css'] = function(){};
