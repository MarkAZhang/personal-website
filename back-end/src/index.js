import path from 'path'
import process from 'process'

import express from 'express'

import api from './api'

const app = express()
const dirname = process.cwd()
const PATH_DIST = path.join(dirname, '/front-end/dist')

app.use('/static', express.static(PATH_DIST))

app.get('/', (req, res) =>
  res.sendFile(path.join(dirname, '/front-end/index.html'))
)

app.use('/api', api)

app.listen(3000)
