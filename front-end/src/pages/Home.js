import {Component} from 'react'

import api from '../api'

import cs from './styles.css'

// TODO(mark): Replace placeholder header with real navigation
class Home extends Component {
  state = {
    books: [],
  }

  componentWillMount() {
    api.books.getBooks().then(books => this.setState({books}))
  }

  render() {
    return (
      <div className={cs.helloWorld}>
        <div>Hello World</div>
        {this.state.books.map(book =>
          <div>{book}</div>
        )}
      </div>
    )
  }
}

export default Home
