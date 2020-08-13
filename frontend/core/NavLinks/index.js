import {NavLink, Link} from 'react-router-dom'
import React from 'react'

import config from '../config'

import cs from './styles.css'

import ExternalLink from '~/components/ExternalLink'

const renderLink = link => (
  link.external
    ? (
      <ExternalLink
        href={link.external}
        key={link.label}
        className={cs.link}
      >
        <span className={cs.linkLabel}>
          {link.label}
        </span>
      </ExternalLink>
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
  <React.Fragment>
    <Link className={cs.title} to='/'>
      Mark Zhang
    </Link>
    <div className={cs.links}>
      {config.links.map(renderLink)}
    </div>
  </React.Fragment>
)

export default NavLinks
