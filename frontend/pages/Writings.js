import { sortBy } from 'lodash/fp'

import cs from './styles.css'
import WRITINGS from './writing_links'

import ExternalLink from '~/components/ExternalLink'

const POSTS = [
  {
    name: 'Genentech: The Beginnings of Biotech - Book Notes',
    date: '2018-12-19',
    link: WRITINGS.book_notes_genentech,
  },
  {
    name: 'Clinical Trials and FDA Approval (a 5-minute guide)',
    date: '2018-06-21',
    link: WRITINGS.clinical_trials_guide,
  },
  {
    name: 'Top Reads of the Week: Gene-edited squids, telemedicine mergers, bitter lessons from AI',
    date: '2020-08-14',
    link: WRITINGS.links_roundup_2020_08_14,
  },
  {
    name: 'Top Reads of the Week: Penguin math, zombie pig brains, and a spyware emperor speaks out',
    date: '2020-08-23',
    link: WRITINGS.links_roundup_2020_08_23,
  },
  {
    name: 'Top Reads of the Week: An overlooked multi-billion toy company, a nuanced look at AI progress, and why tennis is so weird',
    date: '2020-09-01',
    link: WRITINGS.links_roundup_2020_09_01,
  },
]

const renderPost = post => (
  <li key={post.name}>
    <ExternalLink href={post.link}>{post.name}</ExternalLink>
    <span className={cs.date}>{post.date}</span>
  </li>
)

const Bookshelf = () => (
  <div className={cs.writings}>
    <div className={cs.heading}>
      Writings
    </div>
    <ul className={cs.posts}>
      {sortBy('date', POSTS).reverse().map(renderPost)}
    </ul>
  </div>
)

export default Bookshelf
