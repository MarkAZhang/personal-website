import ReactDOM from 'react-dom'

import App from './core/App'

import './styles/index.css'

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

ReactDOM.render(<App />, rootElement)
