import React from "react";

// A simple component that displays a message
// eslint-disable-next-line react/prop-types, react/display-name
const Message = React.memo(({ message }) => {
  console.log("Rendering Message component");
  return <div>{message}</div>;
});

// Parent component
const App = () => {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState("Hello, World!");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMessage("New message!")}>Update Message</button>
      <Message message={message} />
      <div>Count: {count}</div>
    </div>
  );
};

export default App;
