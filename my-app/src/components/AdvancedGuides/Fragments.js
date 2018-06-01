import React from 'react';

const Fragments = () => (
  <div>
    <h1>Fragments</h1>
    <p style={{color: "#999"}}>A common pattern in React is for a component to return multipe elements.
    Fragements let you group a list of children without adding extra nodes to the DOM</p>
    <pre>
      <code>
        {/* render() {
          return (
            <React.Fragment>
              <ChildA />
              <ChildB />
              <ChildC />
            </React.Fragment>
          );
        } */}
      </code>
    </pre>

    <h2>Motivation</h2>
    <h2>Usage</h2>
    <h2>Short Syntax</h2>
    <h2>Keyed Fragments</h2>
    <pre>
      <code>
        {/* function Glossary(props) {
          return (
            <dl>
              {props.items.map(item => (
                <React.Fragment>
                  <dt>{item.term}</dt>
                  <dt>{item.description}</dt>
                </React.Fragment>
              ))}
            </dl>
          ); 
        } */}
      </code>
    </pre>
  </div>
)

export default Fragments
