import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  console.log("Parent render");

  return (
    <div>
      <h1>Parent</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <Child count={count2} />
    </div>
  );
}

export default Parent;
