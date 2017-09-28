import {NavLink} from 'react-router-dom'

import cs from './styles.css'

const Home = () => (
  <div className={cs.home}>
    <div className={cs.heroTitle}>
      Hi, I&apos;m <span className={cs.highlight}>Mark</span>
    </div>
    <div className={cs.heroText}>
      <p>
        I am a full-stack web developer and UX designer.
      </p>
      <p>
        I can take your idea from user need to polished product.
      </p>
    </div>
    <div className={cs.links}>
      <NavLink className={cs.link} to='/about'>More About Me</NavLink>
      <div className={cs.separator} />
      <NavLink className={cs.link} to='/projects'>My Projects</NavLink>
      <div className={cs.separator} />
      <NavLink className={cs.link} to='/reading-list'>My Favorite Books</NavLink>
    </div>
  </div>
)

export default Home
