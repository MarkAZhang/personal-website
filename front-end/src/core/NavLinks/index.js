import {NavLink, Link} from 'react-router-dom'

import config from '../config'

import cs from './styles.css'

const NavLinks = () => (
  <div>
    <div className={cs.titleContainer}>
      <Link className={cs.title} to='/'>
        Mark A. Zhang
      </Link>
    </div>
    <div className={cs.links}>
      {config.links.map(link => (
        <NavLink
          className={cs.link}
          activeClassName={cs.activeLink}
          key={link.label}
          to={link.to}
        >
          <div className={cs.linkLabel}>
            {link.label}
          </div>
        </NavLink>
      ))}
    </div>
  </div>
)

export default NavLinks
