import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import AdvancedGuides from './components/AdvancedGuides/index'
import JSXInDepth from './components/AdvancedGuides/JSXInDepth'
import TypecheckingWithPropTypes from './components/AdvancedGuides/TypecheckingWithPropTypes'
import StaticTypeChecking from './components/AdvancedGuides/StaticTypeChecking'
import RefsandtheDOM from './components/AdvancedGuides/RefsandtheDOM'
import UncontrolledComponents from './components/AdvancedGuides/UncontrolledComponents'
import Context from './components/AdvancedGuides/Context'
import Fragments from './components/AdvancedGuides/Fragments'
import Portals from './components/AdvancedGuides/Portals'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <ul>
        <li>INSTALLATION</li>
        <li>QUCIK START</li>
        <li><Link to="/advancedguides">ADVANCED GUIDES</Link></li>
        <li>REFERENCE</li>
      </ul>

      {/* Typechecking With PropTypes code 001 */}
      {/* <TypecheckingWithPropTypes name="chengqiang" /> */}

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/advancedguides" component={AdvancedGuides}/>
      <Route path="/advancedguides/jsxindepth" component={JSXInDepth}/>
      <Route path="/advancedguides/typecheckingwithpropTypes" component={TypecheckingWithPropTypes}/>
      <Route path="/advancedguides/statictypechecking" component={StaticTypeChecking}/>
      <Route path="/advancedguides/refsandthedom" component={RefsandtheDOM}/>
      <Route path="/advancedguides/uncontrolledcomponents" component={UncontrolledComponents}/>
      <Route path="/advancedguides/context" component={Context}/>
      <Route path="/advancedguides/fragments" component={Fragments}/>
      <Route path="/advancedguides/portals" component={Portals}/>
    </div>
  </Router>
)
export default BasicExample
