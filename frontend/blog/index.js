import { Component } from 'react'
import PropTypes from 'prop-types'

import POSTS from './posts'
import cs from './styles.css'

class Blog extends Component {
  render() {
    const { match } = this.props
    const BlogComponent = POSTS[match.params.slug]

    return (
      BlogComponent
      ? <BlogComponent />
      : <div className={cs.text}>Page not found</div>
    )
  }
}

Blog.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default Blog
