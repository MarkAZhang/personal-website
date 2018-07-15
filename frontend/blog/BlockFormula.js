import MathJax from 'react-mathjax2'
import PropTypes from 'prop-types'

import cs from './styles.css'

const InlineFormula = props => {
  const { children } = props

  return (
    <div className={cs.blockFormula}>
      <MathJax.Node>
        {children}
      </MathJax.Node>
    </div>
  )
}

InlineFormula.propTypes = {
  children: PropTypes.node,
}

export default InlineFormula
