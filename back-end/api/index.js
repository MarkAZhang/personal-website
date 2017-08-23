var express = require('express')
var router = express.Router()

var books = require('./books')

router.use('/books', books)

module.exports = router
