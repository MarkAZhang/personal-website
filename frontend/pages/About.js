import {Link} from 'react-router-dom'

import cs from './styles.css'

import ExternalLink from '~/components/ExternalLink'

const IDSEQ_LINK = 'https://public.idseq.net/'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/mark-zhang-1726361b/'

const About = () => (
  <div className={cs.about}>
    <div className={cs.heading}>
      About
    </div>
    <div className={cs.description}>
      I am a techie-turned-biologist and a transhumanist on sunny days.
    </div>
    <div className={cs.description}>
      I geek out on synthetic biology, machine learning, biogerontology, and protocol development.
      I believe advances in biology are about to transform the world.
    </div>
    <div className={cs.description}>
      I like to paint and <Link to='/bookshelf'>read</Link>.
    </div>
    <div className={cs.description}>
      I was most recently at the Chan Zuckerberg Initiative, working on classifying
      disease vectors with computer vision, building 10x cheaper wet lab robots,
      and helping researchers in developing
      countries <ExternalLink className={cs.link} href={IDSEQ_LINK}>battle infectious disease</ExternalLink>.
    </div>
    <div className={cs.description}>
      I&apos;ve previously held engineering, product design, and engineering management
      roles at Google, Palantir, Kensho, and the Emerson Collective.
      Check out my <ExternalLink className={cs.link} href={LINKEDIN_LINK}>LinkedIn</ExternalLink> for more info.
    </div>
    <div className={cs.description}>
      I live in San Francisco, where I am working on something new.
    </div>
  </div>
)

export default About
