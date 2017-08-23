/* eslint-disable */

var express = require('express')
var path = require('path')

var api = require('./back-end/api')

var app = express()

const PATH_DIST = path.resolve(__dirname, 'front-end/dist');

app.use('/static', express.static(PATH_DIST))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'front-end/index.html'));
})

app.use('/api', api)

app.listen(3000)
