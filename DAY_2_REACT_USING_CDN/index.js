/**
 * BELOW IS MyList COMPONENT
 * IT IS A FUNCTIONAL COMPONENT
 */
const MyList = ({ name }) => {
  return (
    <ul>
      <li>Hello {name}</li>
      <li>Hello</li>
    </ul>
  );
};

// 1 ---------------------

// WE HAVE CREATE A TESTING REACT COMPONENT
// THIS WILL BE USED IN index.js
const MyReactAppFromCDN = () => {
  // BELOW IS THE JSX CODE THE BABEL WILL CONVERT TO JAVASCRIPT
  // WE CAN ADD DYNAMIC DATA TO THE JSX USING {} BRACKETS
  /**
   * WE CAN ALSO USE arrays to render list
   * WE CAN USE map function to loop through the array and return JSX
   * OBJECTS CAN ALSO BE USED TO RENDER LIST
   */
  return (
    <div>
      <h1>Hello React </h1>
    </div>
  );
};

// THE ReactDOM.render COMES FROM CDN
/**
 * WE CAN USE IT TO RENDER OUR COMPONENT TO THE DOM, IN THIS CASE THE COMPONENT IS MyReactAppFromCDN
 * AND WE ARE RENDERING IT TO THE DOM ELEMENT WITH ID root
 */
ReactDOM.render(<MyReactAppFromCDN />, document.querySelector("#root"));

// 2 ---------------------
/**
 * WE CAN ALSO CREATE ELEMENTS USING React.createElement
 */

/**
 * createElement takes 3 arguments
 * 1. The element type
 * 2. The element props
 * 3. The element children.
 * */
const myCustomElement = React.createElement(
  "h1",
  null,
  "Hello React"
);
ReactDOM.render(myCustomElement, document.querySelector("#root"));
