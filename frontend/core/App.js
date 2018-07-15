import {BrowserRouter} from 'react-router-dom'

import routes from './routes'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import cs from './styles.css'

const App = () => (
  <BrowserRouter>
    <div className={cs.app}>
      <DesktopNav className={cs.desktopNav} />
      <MobileNav className={cs.mobileNav} />
      <div className={cs.content}>
        {routes}
      </div>
    </div>
  </BrowserRouter>
)

export default App
