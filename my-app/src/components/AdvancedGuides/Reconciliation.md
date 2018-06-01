# Reconciliation

React provided a declarative API so that you don't have to worry about exactly what changes on every update. This makes writing applications a lot easier, but is might not be obvious how this implemented within React. This article explains the choices we made in React's "diffing" algorithm so that component updates are predictable while being fast enough for high-performance apps.

## Motivation
When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() funtcion will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

There are some generic solutions to this algorthmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art alogorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If you used this in React, displaying 1000 elements would reqiure in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

1. Two elements of different types will produce different tree.
2. The developer can hint at which child elements may be stable across different renders with a key prop.

## The Diffing Algorithm

### Elements Of Different Types
Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.

When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive componentWillMount() and then componentDidMount().

### DOM Elements Of The Same Type
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.

### Component Elements Of The Same Type

### Recursing On Children

### Keys

### Tradeoffs