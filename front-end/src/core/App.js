import {BrowserRouter} from 'react-router-dom'

import pages from '../pages'

import DesktopNav from './DesktopNav'
import cs from './styles.css'

const App = () => (
  <BrowserRouter>
    <div className={cs.app}>
      <DesktopNav />
      <div className={cs.content}>
        {pages}
      </div>
    </div>
  </BrowserRouter>
)

export default App
