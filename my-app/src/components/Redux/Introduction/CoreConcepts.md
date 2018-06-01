# Core Concepts

Imagine your app's state is described as a plain object. For example, the state of a todo app might look like this:
```json
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```
This object is like a "model" except that there are no setters. This is so that different part of the code can't change the state arbitraily, casuing hard-to-reproduce bugs.

To change something in the state, you need to dispatch an action. An action is a plian JavaScript object (notice how we don't introduce any magic?) that describes what happened. Here are a few example actions:
```json
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TOD', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Enforcing that every change is described as an action lets us have a clear understanding of what's going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function that takes state and action as arguments, and returns the next astate of the app. It would be hard to write such a function for a big app, so we write smaller functions meaning parts of the state:
```js
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
```

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:
```js
function todoAPP(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```
This is basically the whole idea of Redux. Note that we haven't used any Redux APIs. It comes withe a few utilities to facilitate this pattern, but the main idea is that you describle how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs or any magic.