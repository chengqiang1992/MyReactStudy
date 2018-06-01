# Async Actions

In the basic guide, we built a simple todo application. It was fully synchronous. Every time an action was dispatched, the state was updated immediately.

In this guide, we will build a different, asynchronous application. It will use the Reddit API to show the current headlines for a selected subreddit. How does asynchronicity fit into Redux flow?

## Actions

When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

Each of these two moments usually require a change in the application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronouly. Usually, for any API request you'll want to disptach at least three different kinds of actions:
> * **An action informing the reducers that the request began.**
> * **An action informing the reducers that the request finished successfully.**
> * **An action informing the reducers that the request failed**

You may use a dedicated **status** field in your actions:
```json
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }
```

Or you can define separate types for them:
```json
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```

Choosing whether to use a single action type with flags, or multiple action types, is up to you. It's a convention you need to decide with your team. Multiple types leave less room for a mistake, but this is not an issue if you generate action creators and reducers with a helper library like redux-actions.

Whatever convention you choose, stick with it throughout the application. We'll separate types in this tutorial.

## Synchronous Action Creators

Let's start by defining the several synchronous action types and action creators we need in our example app. Here, the user can select a subreddit to display:

**actions.js (Synchronous)**
```js
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}
```
They can also press a "refresh" button to update it:
```js
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
```
These were the actions governed by the user interaction. We will also have another kind of action, governed by the newwork requests. We will see hwo to dispatch them later, but for now, we just want to define them.

When it's time to fetch the posts for some subreddit, we will dispatch a REQUEST_POSTS action:
```js
export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
```
It is important for it to be separate from **SELECT_SUBREDDIT** or **INVALIDATE_SUBREDDIT**. While they may occur one after another, as the app grows more complex, you might want to fetch some data independently of the user action (for example, to prefetch the most popular subreddits, or to refresh stale data once in a while). You may also want to fetch in response to a route change, so it's not wise to couple fetching to some paricular UI event early on.

Finally, when the network request comes through, we will dispatch :
```js
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
​
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
```

## Designing the State Shape

Just like in the basic tutorial, you'll need to design the shape of your application's state before rushing into the implementation. With asynchronous code, there is more state to take care of, so we need to think it through.

This part is often confusing to beginners, because it is not immediately clear what information describes the state of an asynchronous application, and how to organize it in a single tree.

We'll start with the most common use case: lists. Web applications often show lists of things. For example, a list of posts, or a list of friends. You'll need to figure out what sorts of lists your app can show. You wan to store them separately in the state, because this way you can cache them and only fetch again if necessary.

Here's what the state shape for our "Reddit headlines" app might look like:

There are a few important bits here:
> * We store each subreddit's information separately so we can cache every subreddit. When the user switches between them the second time, the update will be instant, and we won't need to refetch unless we want to. Don't worry about all these items beging in memory: unless you're deadling with tens of thousands of items, and your user rarely closes the tab, you won't need any sort of cleanup.
> * For every list of items, you'll want to store isFetching to show a spinner, didInvalidate so you can later toggle it when the data is stale, lastUpdated so you know when it was fetched the last time, and the items themselves. In a real app, you'll also want to store pagination state like fetchedPageCount and nextPageUrl.