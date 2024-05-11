import { memo } from "react";

function Child({ count, handleCount, profile }) {
  console.log("Child render");

  return (
    <div>
      <h4>Count in child {count}</h4>
      Child
    </div>
  );
}

export default memo(Child);
