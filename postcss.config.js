/* eslint-disable */
var path = require('path')
var CUR_DIR = path.resolve(__dirname, 'front-end/src/styles')

module.exports = {
  plugins: [
    require('postcss-import')({
      path: CUR_DIR,
    }),
    require('postcss-mixins')({
      mixins: require(CUR_DIR + '/mixins'),
    }),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')({
      browsers: ['last 2 Chrome versions'],
    }),
  ]
}
