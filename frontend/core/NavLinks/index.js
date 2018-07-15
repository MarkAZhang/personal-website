import {NavLink, Link} from 'react-router-dom'

import config from '../config'

import cs from './styles.css'

const renderLink = link => (
  link.external
    ? (
      <a
        href={link.external}
        target='_blank'
        rel='noopener noreferrer'
        key={link.label}
        className={cs.link}
      >
        <span className={cs.linkLabel}>
          {link.label}
        </span>
      </a>
    )
    : (
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
    )
)

const NavLinks = () => (
  <div>
    <div className={cs.titleContainer}>
      <Link className={cs.title} to='/'>
        Mark A. Zhang
      </Link>
    </div>
    <div className={cs.links}>
      {config.links.map(renderLink)}
    </div>
  </div>
)

export default NavLinks
