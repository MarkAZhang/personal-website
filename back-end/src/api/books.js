import express from 'express'

const booksRouter = express.Router()

booksRouter.get('/', (req, res) =>
  res.json(['Monkeys', 'Monkey2'])
)

module.exports = booksRouter
