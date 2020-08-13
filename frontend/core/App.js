import {BrowserRouter} from 'react-router-dom'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import cx from 'classnames';

import routes from './routes'

import DesktopNav from './DesktopNav'
import cs from './styles.css'

const App = ({location}) => {
  const isHome = location.pathname === '/'
  return (
    <div className={cs.app}>
      {!isHome && <DesktopNav />}
      <div className={cx(!isHome && cs.content)}>
        {routes}
      </div>
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

// withRouter needs to be inside of <BrowserRouter />
const WrappedApp = withRouter(App)

const OuterApp = () => (
  <BrowserRouter>
    <WrappedApp />
  </BrowserRouter>
)

export default OuterApp
