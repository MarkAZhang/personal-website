import {Route, Switch} from 'react-router'

import About from './About'
import Blog from './Blog'
import Home from './Home'
import Projects from './Projects'
import ReadingList from './ReadingList'
import SketchBook from './SketchBook'

export default (
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/blog' component={Blog} />
    <Route path='/reading-list' component={ReadingList} />
    <Route path='/projects' component={Projects} />
    <Route path='/sketch-book' component={SketchBook} />
    <Route path='/' component={Home} />
  </Switch>
)
