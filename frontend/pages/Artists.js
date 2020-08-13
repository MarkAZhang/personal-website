import { sortBy } from 'lodash/fp';
import cx from 'classnames';

import ARTISTS from './artist_list';

import cs from './styles.css';

const Artists = () => (
  <div className={cs.bookshelf}>
    <div className={cs.heading}>
      Artists
    </div>
    <div className={cs.description}>
      Here are some of my favorite artists.
    </div>
    <ul className={cs.books}>
      {sortBy('name', ARTISTS).map(book => (
        <li className={cx(book.favorite && cs.favorite)}>
          <a href={book.link}>{book.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Artists
