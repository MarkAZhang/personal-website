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
      I am a conscientious transhumanist and a techno-optimist. I believe that
      technological progress, coupled with equitable dissemination, is our greatest lever
      for improving human welfare over the long-term.
    </div>
    <div className={cs.description}>
      I geek out on synthetic biology, machine learning, quantum
      computing, nanofabrication, and biogerontology.
    </div>
    <div className={cs.description}>
      I like to paint and <Link to='/bookshelf'>read</Link>.
    </div>
    <div className={cs.description}>
      I was most recently at the Chan Zuckerberg Initiative, working on classifying
      disease vectors with computer vision, building 10x cheaper wet lab robots,
      and helping researchers in developing countries
      to <ExternalLink className={cs.link} href={IDSEQ_LINK}>battle infectious disease</ExternalLink>.
    </div>
    <div className={cs.description}>
      I&apos;ve previously held engineering, product design, and engineering management
      roles at Google, Palantir, Kensho, and the Emerson Collective.
      Learn more <ExternalLink className={cs.link} href={LINKEDIN_LINK}>here</ExternalLink>
    </div>
    <div className={cs.description}>
      I live in San Francisco, where I am working on something new.
    </div>
  </div>
)

export default About
