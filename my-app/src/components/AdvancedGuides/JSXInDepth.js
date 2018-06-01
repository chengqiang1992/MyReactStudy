import React from 'react';

const JSXInDepth = () => (
  <div>
    <h1>JSX In Depth</h1>
    <section>Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children)
       function. The JSX code:
    </section>
    <pre>
      <code>
        {/* <MyButton color="blue" shadowSize={2}>
          click me
        </MyButton> */}
      </code>
    </pre>
    <p>compiles into:</p>
    <pre>
      <code>
        {/* React.createElement(
          MyButton,
          {color: 'blue', shadowSize: 2},
          'Click Me'
        ) */}
      </code>
    </pre>
    <hr />

    <h3>Specifying The React Element Type</h3>
    <section>
      <p>The first part of a JSX tag determines the type of the React element.</p>
      <p>Capitalized types indicate that the JSX tag is referring to a React component. These tags get 
        compiled into a direct reference to the named variable, so if you use the JSX 
        {/* <FOO /> */} expression, Foo must be in scope.
      </p>
    </section>

    <h3>React Must be in scope</h3>
    <section>
      <p>Since JSX compiles into calls to React.createElement, the React library must also 
        always be in scope from your JSX code.
      </p>
    </section>

    <h3>Using Dot Notation for JSX Type</h3>
    <section>
      <p>You can also refer to a React component using dot-notation from within JSX. This is 
        convenient if you have a single module that exports many React components. For example
        , if MyComponents.DatePicker is a component, you can use it diretly from JSX with:
      </p>
    </section>

    <h3>User-Defined Components Must Be Capitalized</h3>
    <section>
      <p>When an element type starts with a lowercase letter, it refers to a built-in compoent 
        like  {/* <div>  */} or  {/* <span>  */} and results in string 'div' or 'span' passed
        to React.createElement. Types that start with a capital letter like {/* <Foo /> */} compile 
        to React.createElement(Foo) and corresponed to a component defined or imported in you JavaScript file.
      </p>
    </section>

    <h3>Choosing the Type at Runtime</h3>
    <section>
      <pre>
        <code>
          {/* import React from 'React'
          import { PhotoStory, VideoStory } from './stories'

          const components = {
            photo: PhotoStory,
            video: VideoStory
          };

          function Story(props) {
            // Wrong! JSX type can't be an expression
            retrun <components[props.syoryType] story={props.story} />;
          } */}
        </code>
      </pre>

      <pre>
        <code>
          {/* import React from 'React'
          import { PhotoStory, VideoStory } from './stories'

          const components = {
            photo: PhotoStory,
            video: VideoStory
          };

          function Story(props) {
            // correct! JSX type can be a capitalized varibale.
            const SpecificStory = components[props.storyType];
            retrun <SpecificStory story={pros.story} />
          } */}
        </code>
      </pre>
    </section>


    <h3>props in JSX</h3>


  </div>
)

export default JSXInDepth
