import { useState, useCallback, useMemo } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  console.log("Parent render");

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const profile = useMemo(() => {
    return {
      name: "Shobhit",
      age: 21,
    };
  }, []);

  return (
    <div>
      <h1>Parent</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <Child count={count2} handleCount={handleCount} profile={profile} />
    </div>
  );
}

export default Parent;
