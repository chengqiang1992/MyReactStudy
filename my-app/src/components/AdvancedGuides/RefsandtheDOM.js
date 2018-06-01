import React from 'react';
import PropTypes from 'prop-types';
import CustomTextInput from './CustomTextInput';

const StaticTypeChecking = () => (
  <div>
    <h1>Refs and the DOM</h1>
    <section>Refs provide a way to access DOM nodes or React elements created in the render method.
    </section>
    <section>In the typical React dataflow, props are the only wat that parent components interact 
      with their children. To modify a child, you re-render it with new props. However, there are a 
      few cases where you need to imperatively modify a child outside of the typical dataflow.
      The child to be modified could be an instance of a React component, or it could be a DOM 
      element. For both of these cases, React provides an escape hatch.</section>
    
    <hr />
    <h3>When to Use Refs</h3>
    <p>There are a few good use cases for refs:</p>
    <ul>
      <li>Managing focus, text selection, or media playback.</li>
      <li>Triggering imperative animations.</li>
      <li>Integrating with third-party DOM libraries.</li>
    </ul>

    <hr />
    <h3>Don't Overuse Refs</h3>
    <section>Your first inclination may be to use refs to "make things happen" in your app. If this is 
      the case, take a moment and think more critically about where state should be owned in the component
      hierachy. Often, it become clear that the proper place to "won" thta state is at a higher level in 
      the hierarchy. see the Lifting State Up guide for example of this.
    </section>

    <h3>Creating Refs</h3>
    <pre>
      <code>

      </code>
    </pre>

    <h3>Accessing Refs</h3>
    <pre>
      <code>

      </code>
    </pre>

    <h3>Adding a Ref to a DOM Element</h3>
    <CustomTextInput />
  </div>
)

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   render() {
//     return <div ref={this.myRef} />
//   }
// }

// const node = this.myRef.current;

export default StaticTypeChecking
