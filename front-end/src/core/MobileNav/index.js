import {PropTypes, Component} from 'react'
import cx from 'classnames'

import {Icon} from '../../components'
import NavLinks from '../NavLinks'

import cs from './styles.css'

class MobileNav extends Component {
  propTypes = {
    className: PropTypes.string,
  }

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
            glyph={this.state.isOpen ? 'lnr-cross' : 'lnr-menu'}
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

export default MobileNav
