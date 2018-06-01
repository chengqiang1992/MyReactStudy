// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// 001 Introducing JSX
//     Embedding Expressions inJSX

// example 01
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// const name = 'cheng qiang';
// const App = <h1>Hello, {name}</h1>

// ReactDOM.render(App, document.getElementById('root'));
// registerServiceWorker();

// example 02
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'cheng',
//   lastName: 'qiang'
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

// ReactDOM.render(element, document.getElementById('root'));
// registerServiceWorker();

// JSX is an Expression Too
// After compilation, JSX expression become regular JavaScript function calls 
// and evaluate to JavaScript objects.
// This means that you can use JSX inside of if statements and for loops, 
// assign it to variable, accept it as arguments, and return is from function:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'cheng',
//   lastName: 'qiang'
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element = (
//   <h1>
//     Hello, {getGreeting(user)}
//   </h1>
// );

// ReactDOM.render(element, document.getElementById('root'));
// registerServiceWorker();


// 003 Rendering Elements
// Elements are the smallest building blocks of React apps

// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. 
// React DOM takes care of updating the DOM to match the React elements

// Rendering an Element into the DOM 

// Updating the Rendered Element
//   React elements are immutable. Once create an element, you can't change its children on 
//   attributes. An element is like a single frame in a movie: it represents the UI at a certain 
//   point in time

//   With our knowledge so far, the only way to update the UI is to create a new element, and 
//   pass it to ReactDOM.render(). 

// React Only Updates What's Necessary
//   React DOM compare the element and its children to the previous one, and only applies the 
//   DOM updates necessary to bring the DOM to the desired state. 

//   You can verify by inspecting the last example with the browser tools:

//   Even though we create an element describing the whole UI tress on every tick, only the text 
//   node whose contents has changed gets updated by React DOM. 

//   In our experience, thinking about how the UI should loot at any given moment rather than how 
//   to change it over time eliminates a whole chlass of bugs. 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 10000);

// 004 Components and Props
// components let you split the UI into independent, reusable pieces, and think about each 
// piece in isolation.

// Conceptually, components are like JavaScript functions. They acceps arbitrary inputs(called 
// "props") and return React elements describing what should appera on the screen. 

// Functional and Class Components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App'

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1> Hello, { this.props.name } </h1>
//     }
// }

// ReactDOM.render( <Welcome name = "chengqiang" /> , document.getElementById('root'));
// registerServiceWorker();

// Rendering a Component
// when React sees an element representing a user-defined component, it passes JSX attributes 
// to this component as a single object. We call this object "props".

// Let's recap what happens in this example:
//   1. We call ReactDOM.render() with the <Welcome name="Sara" /> element. 
//   2. React calls the Welcome component with {name: 'Sara'} as the props. 
//   3. Our Welcome component returns a <h1>Hello, Sara</h1> Element as the result. 
//   4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>

// Note: Always start component names with a capital letter. 
// React treats component starting with lowercase letters as DOM triggerAsyncId. For example 
// , <div /> represents an HTML div tag, but <Welcome /> represents a component and requires 
// Welcome to be in scope. 

// You can read more about the reasoning behind this convention here.

/*
    * Froms
        TML form elements work a little bit differently from other DOM elemnts in React, because form 
        elements naturally keep some internal state. For example, this form in plain HTML accepts a single 
        name:

        * Controlled Components
            In HTML, from elements such as <input>, <textarea>, and <select> typically maintain their own state
            and update it based on user input. In React, mutable state is typically kept in the state property 
            of components, and only updated with setState().

            we can combine the two by makeing the React state be the "single source of truth". Then the React 
            component that renders a form also controls what happens in that form on subsquent user input. An input
            form element whose value is controlled by React in this way is called a "controlled component".

            class NameForm extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {value: ''};

                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }

                handleChange(event) {
                    this.setState({value: event.target.value});
                }

                handleSubmit(ebvent) {
                    alert("A name was submitted: " + this.state.value);
                }

                render() {
                    return (
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                    );
                }
            }
        
        * The textArea Tag
            class EssayForm extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {value: 'Please write an essay about your favorite DOM element.'};

                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }

                handleChange(event) {
                    this.setState({value: event.target.value});
                }

                handleSubmit(event) {
                    alert("A essay was submitted: " + this.state.value);
                    event.preventDefault();
                }

                render() {
                    return (
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Essay:
                                <textarea value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                    );
                }
            }

        * The select Tag
            class FlavorForm extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {value: 'coconut'};

                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }

                handleChange(event) {
                    this.setState({value: event.target.value});
                }

                handleSubmit(event) {
                    alert("You favorite flavor is: " + this.state.value);
                    event.preventDefault();
                }

                render() {
                    return (
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Pick your favorite La Croix flavor:

                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mange">Mango</option>
                                </select>
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                    );
                }
            }

*/

/*
	Lifting State Up
		Often, several components need to reflect the same changeing data. We recommend lifting the stared 
		state state up to their closest common ancestor. Let's see how this works in action.

		In this section, we will create a temperature calculator that calculates whether the water would boil
		at a given temperature.

		We will start with a component called BoilingVerdict. It accepts the celsius temperature as a prop, and 
		prints whether it is enough to boil the water:
		    function BoilingVerdict(props) {
					if (props.celsius >= 100) {
						return <p>The water would boil.</p>
					}
					return <p>The water would not boil.</p>
				}
		
		Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature,
		and keeps its value in this.state.temperature.

		Aditionally, it renders the BoillingVerdict for the current input value.
		    class Calculator extends React.Component {
					constructor(props) {
						super(props);
						this.handleChange = this.handleChange.bind(this);
						this.state = {temperature: ''}
					}

					handleChange(e) {
						this.setState({temperature: e.target.value});
					}

					render() {
						const temperature = this.state.temperature;
						return (
							<fieldset>
								<legend>Enter temperature in Celsius:</legend>
								<input value={temperature} onChange={this.handleChange} />

								<BoilingVerdict celsius={parseFloat(temperature)} />
							</fieldset>
						);
					}
				}
		
		* Adding a Second Input
			Our new requirement is that, in addition to a celsius input, we provide a Fahrenheit input, and they 
			are kept in sync.

			We can start by extracting a TemperatureInput component from Calculator. We will add a new scale prop 
			to it that can either be "c" or "f":

				function BoilingVerdict(props) {
					if (props.celsius >= 100) {
						return <p>The water would boil.</p>
					}
					return <p>The water would not boil.</p>
				}

				const scaleNames = {
					c: 'Celsius',
					f: 'Fahrenheit'
				};

				function toCelsius(fahrenheit) {
					return (fahrenheit - 32) * 5 / 9;
				}

				function toFahrenheit(celsius) {
					return (celsius * 9 / 5) + 32;
				}

				function tryConvert(temperature, convert) {
					const input = parseFloat(temperature);

					if (Number.isNaN(input)) {
						return '';
					}
					const output = convert(input);
					const rounded = Math.round(output * 1000) / 1000;
					return rounded.toString();
				}

				class TemperatureInput extends React.Component {
					constructor(props) {
						super(props);
						this.handleChange = this.handleChange.bind(this);
					}

					handleChange(e) {
						// Before: this.setState({temperature: e.target.value});
						this.props.onTemperatureChange(e.target.value);
					}

					render() {
						// Before: const temperature = this.state.temperature;
						const temperature = this.props.temperature;
						const scale = this.props.scale;
						return (
							<fieldset>
								<legend>Enter temperature in {scaleNames[scale]}</legend>
								<input value={temperature} onChange={this.handleChange} />
							</fieldset>
						);
					}
				}

				class Calculator extends React.Component {
					constructor(props) {
						super(props);
						this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
						this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
						this.state = {temperature: '', scale: 'c'};
					}

					handleCelsiusChange(temperature) {
						this.setState({scale: 'c', temperature});
					}

					handleFahrenheitChange(temperature) {
						this.setState({scale: 'f', temperature});
					}

					render() {
						const scale = this.state.scale;
						const temperature = this.state.temperature;

						const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
						const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
						return (
							<div>
								<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
								<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />

								<BoilingVerdict celsius={parseFloat(celsius) }/>
							</div>
						)
					}
				}
*/

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();
