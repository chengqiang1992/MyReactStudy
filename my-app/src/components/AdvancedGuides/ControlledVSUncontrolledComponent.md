# Controlled and uncontrolled form inputs in React don't have to be complicated

You may have seen many articles saying "**you shouldn't use setState**", and the docs are claiming "**refs are bad**"...That is so contradictory. It's hard to understand how to "get it right" and even what are the criteria for choosing.

How the hell are you supposed to make forms?

After all, forms are central to many web apps out there. And yet, form handling in RTeact seems to be a bit of a... corner stone?

Fear no more. Let me show you the different between the approaches, as wee as when you should use each.

## The Uncontrolled
**Uncontrolled inputs** are like traditional HTML form inputs:

```js
class From extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
```
They remember what you typed. You can then get their value using **a ref**. For example, in **onClick** handler of a button:
```js
class From extends React.Component {
  handleSubmitClick = () => {
    const name = this._name.value;
    alert(name);
    // do something with `name`
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => this._name = input} />
        <button onClick={this.handleSubmitClick}>Sign ip</button>
      </div>
    );
  }
}
```
In other words, **you have to 'pull' the value from the field when you need it.** This can happen when the form is submit.

That is the simplest way implement the form inputs. There certainly are valid cases for using it: in simple forms in the real world; and when learning React.

It's not as powerful, though, so let's see those controlled input next.

## The controlled
A **controlled input** accepts its current value as a prop, as well as a callback to change that value. You could say it's a more "React way" of approaching this (which doesn't mean yuo should always use it).
```js
<input value={someValue} onChange={handleChange} />
```
Which is fine and all, but the value of this input has to live in the state somewhere. Typically, the component that renders the input (aks the form component) saves that in its state:
```js
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  // 这里可以看 ReactJs--Quick Start--Handling Events
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ name: event.target.value });
  };

  // Uncaught TypeError: Cannot read property 'setState' of undefined
  // handleNameChange (event) {
  //   console.log(event.target.value)
  //   this.setState({ name: event.target.value });
  // }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
      </div>
    );
  }
}
```
**This flow kind of 'pushes' the value changes to the form component**, so the **Form** component always has the current value of the input, without needing to ask for it explicitly.

This means your data (state) and UI(inputs) are always in sync. The state gives the value to the input, and the input asks the Form to change the current value.

This also means that the form component can respond to input changes immediately; for example, by:

> * in-place feedback, like validations
> * disabling the button unless all friends have valid data
> * enforing a specific input format, like credit card numbers

## What makes an element "controlled"
There are other form elements, of course. You have checkboxs and radios and selects and textareas.

A form element becomes "controlled" if you set its value via a prop. That's all.

```html
|Element                     |Value property        |Change callback   |New valye in the callback |
| ------------------------   | ------------------:  | :-------------:  | :----------------------: |
|<input type="text" />       |value = "string"      |  onChange        |  event.target.value      |
|<input type="checkbox" />   |checked = {boolean}   |  onChange        |  event.target.checked    |
|<input type="radio" />      |checked = {boolean}   |  onChange        |  event.target.checked    |
|<textarea />                |value = "string"      |  onChange        |  event.target.value      |
|<select />                  |value = "option value"|  onChange        |  event.target.value      |
```

## Conclusion
Both the controlled and uncontrolled form fields have their merit. Evaluate your specific situation and pick the approach — what works for you is good enough.

If your form is incredibly simple in terms of UI feedback, uncontrolled with refs is entirely fine. You don’t have to listen to what the various articles are saying is “bad.”
