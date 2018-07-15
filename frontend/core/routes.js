import {Route, Switch} from 'react-router'

import Blog from '~/blog'
import Home from '~/pages/Home'

export default (
  <Switch>
    <Route path='/blog/:slug' component={Blog} />
    <Route path='/' component={Home} />
  </Switch>
)
