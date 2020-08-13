import { sortBy } from 'lodash/fp';
import cx from 'classnames';

import BOOKS from './books';

import cs from './styles.css';

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
      {sortBy('name', BOOKS).map(book => (
        <li className={cx(book.favorite && cs.favorite)}>
          <span>{book.name}</span><span className={cs.author}>{book.author}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Bookshelf
