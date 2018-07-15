import {NavLink} from 'react-router-dom'

import cs from './styles.css'

const Home = () => (
  <div className={cs.home}>
    <div className={cs.heroTitle}>
      Mark A. Zhang
    </div>
    <div className={cs.heroSubtitle}>
      I'm an engineer and designer interested in accelerating research for <span className={cs.highlight}>increasing human lifespan</span>.
    </div>
    <div className={cs.section}>
      <div className={cs.heading}>Essays</div>
      <a className={cs.link} href='https://medium.com/@markazhang/the-5-minute-guide-to-clinical-trials-and-fda-approval-43fe1efb30e2' target='_blank'>
        The 5-minute Guide to Clinical Trials and FDA Approval
      </a>
    </div>
    <div className={cs.section}>
      <div className={cs.heading}>For Fun</div>
      <a className={cs.link} href='https://markazhang.github.io/impulse/' target='_blank'>
        An intense little shooter game
      </a>
    </div>
  </div>
)

export default Home
