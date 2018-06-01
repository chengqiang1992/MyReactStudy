# Portals
Protals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, container)
```
The first argument(child) is any renderable React child, such as an element, string, or fragment. The second argument(container) is a DOM element.

## Usage
Normally, when you return an element from a component's render method, it's mounted into the DOM as child of the nearest parent node:
```js
render() {
  return (
    <div>{this.props.children}</div>
  );
}
```

However, sometimes it's useful to insert a child into a different location in the DOM:
```js
render() {
  // React does *not* create a new div. It renders the children into `domNode`
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```
A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually "break out" of its container. For example, dialogs, hovercards, and tooltips.

## Event Bubbling Through Portals
Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way. Features like context works exactly the same regardless of whater the child is a portal, as the portal still in the React tree regardless of position in the DOM tree.