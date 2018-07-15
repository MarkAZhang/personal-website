import MathJax from 'react-mathjax2'
import PropTypes from 'prop-types'

const InlineFormula = props => {
  const { children } = props

  return (
    <MathJax.Node inline>
      {children}
    </MathJax.Node>
  )
}

InlineFormula.propTypes = {
  children: PropTypes.node,
}

export default InlineFormula
