# Store
In the previous sections, we defined the **actions** that represent the facts about "what happened" and the **reducers** that update the state according to those actions.

The Store is the object that brings them together. The store has the following responsibilities:
> * Holds application atate;
> * Allows access to state via getState();
> * Allows state to be updated via dispatch(action);
> * Registers listeners via subscribe(listener);
> * Handle unregistering of listeners via the function returned by subscribe(listener).

It's important to note that you'll only have a single store in a Redux application. When you want to splite your data handling logic, you'll use **reducer compostion** instead of many stores.

It's easy to create a store if you have a reducer. In the previous section, we used combineReducers() to combine several reducers into one. We will now import it, and pass it to createStore().