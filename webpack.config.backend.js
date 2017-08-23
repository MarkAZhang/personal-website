/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, 'back-end/dist');
var APP_DIR = path.resolve(__dirname, 'back-end/src');

// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  entry: [
    'babel-polyfill',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'server.js'
  },
  externals: nodeModules,
  module : {
    loaders : [
      {
        test : /\.js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1'],
        }
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
  }
}

module.exports = config
