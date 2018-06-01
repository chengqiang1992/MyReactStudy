import React from 'react';
import ReactDOM from 'react-dom'

// These two containers are siblings in the DOM
const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after the Modal's children are mounted, 
    // meaing that children will be mounted on a detached DOM node. If a child component 
    // requires to be attached to the DOM tree immediately when mounted, for example to muasure 
    // a DOM node, or uses 'autoFocus' in a descendant, add state to Modal and only redner the 
    // children when Modal is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {click: 0};
    this.handClick = this.handClick.bind(this);
  }
  handClick() {
    // This will fire when the button in Child is clicked, updating Parent's state, even though
    // button is not direct descendant in the DOM.
    this.setState(prevState => ({
      clicks: prevState.click + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observer that the button is not a child of the div with
          the onClick handle
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{text: action.text, completed: false}])
    case 'TOGGLE_TOD':
      return state.map(
        (todo, index) => 
          action.index === index ? { text: todo.text, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

function todoAPP(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

// store.dispatch({
//   type: 'COMPLETE_TODO',
//   index: 1
// })

// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   index: 1
// })

export default Parent
