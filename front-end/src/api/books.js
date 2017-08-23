import {request} from './request'

const getBooks = () =>
  request.get('/api/books')

export default {getBooks}
