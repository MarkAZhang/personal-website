import { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '~/components/Icon'
import NavLinks from '../NavLinks'

import cs from './styles.css'

class MobileNav extends Component {
  state = {
    isOpen: false,
  }

  setOpen = isOpen => this.setState({isOpen})

  render() {
    return (
      <div className={cx(cs.navigation, this.props.className,
        {
          [cs.open]: this.state.isOpen,
        })}
      >
        <div className={cs.controls}>
          <Icon
            glyph={this.state.isOpen ? 'x' : 'menu'}
            className={cs.openIcon}
            onClick={() => this.setOpen(!this.state.isOpen)}
          />
        </div>
        <div className={cs.links} onClick={() => this.setOpen(false)}>
          <NavLinks />
        </div>
      </div>
    )
  }
}

MobileNav.propTypes = {
  className: PropTypes.string,
}

export default MobileNav
