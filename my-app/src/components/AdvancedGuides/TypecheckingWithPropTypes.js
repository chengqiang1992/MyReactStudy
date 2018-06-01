import React from 'react';
import PropTypes from 'prop-types';

const TypecheckingWithPropTypes = (props) => (
  <div>
    <h1>Typechecking With PropTypes</h1>
    <section>React has some built-in typechecking abilities
    </section>
    <pre>
      <code>
        {/* class Greeting extends React.Component {
          constructor(props) {
            super(props)
          }

          render() {
            return (
              <h1>Hello, {this.props.name}</h1>
            );
          }
        }

        Greeting.protoTypes = {
          name: PropTypes.string
        }; */}
      </code>
    </pre>
    <section>
      PropTypes extends a range of validators that can be used to make sure the date you
      receive is valid. In this example, we're using PropTypes.string. When an invalid value
      is privided for a prop, a warning will be shown in the JavaScript console. For performance
      reasons, protoTypes is only checked in development mode.
    </section>

    <hr />
    <h3>PropTypes</h3>
    <p>Here is an example documenting the different validators provided</p>

    {/* MyComponent.propTypes = {
      // You can declare that a prop is a specific JS type. By default, these
      // are all optional
      optionalArray: PropTypes.array,
      optionalBool: PropTypes.bool,
      optionalFunc: PropTypes.func,
      optionalNumber: PropTypes.number,
      optionalObject: PropTypes.object,
      optionalString: PropTypes.string,
      optionalSymbol: PropTypes.symbol,

      // Anything that can be rendered: numbers, strings, elements or an array
      // (or fragment) containing these types
      optionalNode: PropTypes.node,

      // A React element.
      optionalElement: PropTypes.element,

      // You can also declare that a prop is an instance of a class. this uses JS's instanceof operator
      optionalMessage: PropTypes.instanceOf(Message),
    } */}
  </div>
)

export default TypecheckingWithPropTypes
