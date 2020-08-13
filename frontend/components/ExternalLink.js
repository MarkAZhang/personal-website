import React from 'react'
import PropTypes from 'prop-types'

export default class ExternalLink extends React.Component {
  render() {
    const { children, ...otherProps } = this.props
    return (
      <a
        target='_blank'
        rel='noopener noreferrer'
        {...otherProps}
      >
        {children}
      </a>
    )
  }
}

ExternalLink.propTypes = {
  children: PropTypes.node,
}
