# Reducers

**Reducers** specify how the application's state change in respone to actions sent to the store. Remember that actions only describle wthat happened, but don't describle how the application's state changes.

## Designing the State Shape

In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code. What's the minimal representation of your app's state as an object?

For our todo app, we want to store two different things:
> * The currently selected visibility filter.
> * The actual list of todos.
You'll often that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data sepatate from the UI state.
```json
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Condider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```
> Note on Relationships
In a more complex app, you're going to want different entities to reference each other. We suggest that you keep your state as normalized as possible, without any nesting. Keep every entity in an object stored with an ID as a key, and sue IDs to reference it from other enties, or lists. Think of the app's state as database. This approach is described in normalizr's documentation in detail.

## Handling Actions

Now that we've decided what our state object looks like, we're reday to write a reducer for it. The reducer is a pure function that takes the previous state and an action, and returns the next state.
```js
(previousState, action) => newState
```
It's called a reducer because it's the type of function you would pass to
```js
Array.prototype.reduce(reducer, ?initialValue)
``` 
. It's very important that the reducer stays pure. Things you should **never** do inside a reducer.
> * Mutate its arguments;
> * Perform side effects like API calls and routing transitions;
> * Call non-pure functions, e.g. Data.now() or Math.random().
We'll explore how to perform side effect in the advanced walkthrough. For now, just remember that the reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. NO API calls. NO mytations. Just a calculation.**

We'll start by specifying the initial state. Redux will call our reducer with an undefined state for the first time. This is our change to return the initial state of our app:
```js
import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us
  return state
}
```