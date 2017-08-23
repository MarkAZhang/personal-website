var express = require('express')
var booksRouter = express.Router()

booksRouter.get('/', function (req, res) {
  res.json(['Monkeys', 'Monkey2'])
})

module.exports = booksRouter
