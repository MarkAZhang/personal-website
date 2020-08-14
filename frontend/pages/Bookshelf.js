import { sortBy } from 'lodash/fp';
import cx from 'classnames';

import BOOKS from './books';
import cs from './styles.css';

import ExternalLink from '~/components/ExternalLink'

const renderItem = book => {
  const name = book.notes
    ? <ExternalLink href={book.notes}>{book.name}</ExternalLink>
    : book.name

  return (
    <li className={cx(book.favorite && cs.favorite)} key={book.name}>
      {name}<span className={cs.author}>{book.author}</span>
    </li>
  )
}

const Bookshelf = () => (
  <div className={cs.bookshelf}>
    <div className={cs.heading}>
      Bookshelf
    </div>
    <div className={cs.description}>
      I prefer books with an interesting perspective and a high truth-to-word ratio. I love authors
      with a gift for making the complex simple. Here are some books I've read over the years, with
      my all-time favorites in bold:
    </div>
    <ul className={cs.books}>
      {sortBy('name', BOOKS).map(renderItem)}
    </ul>
  </div>
)

export default Bookshelf
