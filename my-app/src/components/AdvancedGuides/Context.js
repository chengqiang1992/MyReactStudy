import React from 'react';

// const Context = () => (
//   <div>
//     <h1>Context</h1>
//     <p style={{color: "#999"}}>Context provides a way to pass data through the component three withour
//     having to pass props down manually at every level.</p>
//     <p>In a typical React application, data is passed top-down (parent to child) via props, but 
//       this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are
//       required by many components within an application. Context provides a way to share value like these
//       between components without having to explicitly pass a props through every level of the tree.
//     </p>

//     <h2>When to Use Context</h2>
//     <p>Context is designed to share data that can be considered "global" for a tree of React components, 
//       such as the current authenticated user, theme, or preferred language. For example, in the code 
//       below we manually thread through a "them" prop in order to style the Button component.</p>
//   </div>
// )

// class App extends React.Component {
//   render() {
//     return <Toolbar theme="dark" />;
//   }
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton  theme={props.theme} />
//     </div>
//   );
// }

// function ThemedButton(props) {
//   return <div>{props.theme}</div>;
// }


const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => <div {...props}>{theme}</div>}
    </ThemeContext.Consumer>
  );
}

export default App
