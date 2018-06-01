import React from 'react';
import {
  Link
} from 'react-router-dom';

const AdvancedGuides = () => (
  <div>
    <ul>
      <li><Link to="/advancedguides/jsxindepth">JSX In Depth</Link></li>
      <li><Link to="/advancedguides/typecheckingwithpropTypes">Typechecking With PropTypes</Link></li>
      <li><Link to="/advancedguides/statictypechecking">Static Tepe Checking</Link></li>
      <li><Link to="/advancedguides/refsandthedom">Refs and the DOM</Link></li>
      <li><Link to="/advancedguides/uncontrolledcomponents">Uncontrolled Components</Link></li>
      <li><Link to="/advancedguides/context">Context</Link></li>
      <li><Link to="/advancedguides/fragments">Fragments</Link></li>
      <li><Link to="/advancedguides/portals">Portals</Link></li>
    </ul>
    <hr/>
  </div>
)

export default AdvancedGuides
