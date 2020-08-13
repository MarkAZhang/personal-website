import cs from './styles.css';

import NavLinks from '~/core/NavLinks'

const Home = () => (
  <div className={cs.home}>
    <div className={cs.hero}>
      <NavLinks />
    </div>
  </div>
)

export default Home
