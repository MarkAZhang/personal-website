import {PropTypes} from 'react'
import cx from 'classnames'

import NavLinks from '../NavLinks'

import cs from './styles.css'

const DesktopNav = props => (
  <div className={cx(cs.navigation, props.className)}>
    <div className={cs.inner}>
      <NavLinks />
    </div>
  </div>
)

DesktopNav.propTypes = {
  className: PropTypes.string,
}

export default DesktopNav
