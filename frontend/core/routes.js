import {Redirect, Route, Switch} from 'react-router'

import Artists from '~/pages/Artists'
import Home from '~/pages/Home'
import About from '~/pages/About'
import Bookshelf from '~/pages/Bookshelf'

export default (
  <Switch>
    <Route exact path='/artists' component={Artists} />
    <Route exact path='/bookshelf' component={Bookshelf} />
    <Route exact path='/about' component={About} />
    <Route exact path='/' component={Home} />
    <Route>
      <Redirect to='/' />
    </Route>
  </Switch>
)
