import cx from 'classnames'
import {PropTypes} from 'react'
import 'linearicons/dist/web-font/style.css'

const Icon = props => {
  const set = props.glyph.split('-')[0]
  return <i className={cx(set, props.glyph, props.className)} onClick={props.onClick} />
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string,
  onClick: PropTypes.func,
}

export default Icon
