import { useState, useCallback, memo } from "react";

function UsingCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
  	setAge(age + 1)
  }

  const incrementSalary = () => {
  	setSalary(salary + 1000)
  }

  // const incrementAge = useCallback(() => {
  //   setAge(age + 1);
  // }, [age]);

  // const incrementSalary = useCallback(() => {
  //   setSalary(salary + 1000);
  // }, [salary]);

  return (
    <div>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default UsingCallback;

const Count = memo(({ count, text }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
});

const Button = memo(({ handleClick, children }) => {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
});
