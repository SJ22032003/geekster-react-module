import { useMemo, useState } from "react";

function UsingMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = () => {
    let i = 0;
    while (i < 1000000000) i++;
    return count % 2 === 0;
  };

  // Memoized
  // will return value
  const isEvenMemoized = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <section>
        <h1>Count: {count}</h1>
        <h3>{isEvenMemoized ? "Even": "Odd"}</h3>
        <h3>{isEven() ? "Even" : "Odd"}</h3>
        <button onClick={handleCount}>Increment</button>
      </section>
      <section>
        <h1>Count 2: {count2}</h1>
        <button onClick={handleCount2}>Increment count 2</button>
      </section>
    </div>
  );
}

export default UsingMemo;
