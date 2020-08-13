import PropTypes from 'prop-types'
import cx from 'classnames'

import NavLinks from '../NavLinks'

import cs from './styles.css'

const DesktopNav = ({ className }) => (
  <div className={cx(cs.navigation, className)}>
    <div className={cs.inner}>
      <NavLinks />
    </div>
  </div>
)

DesktopNav.propTypes = {
  className: PropTypes.string,
}

export default DesktopNav
