import { useContext } from "react";
import { UserContext } from "../App";

function InnerChild() {

  const { name, age } = useContext(UserContext);

  return <div>InnerChild youngest child name is {name}</div>;
}

export default InnerChild;
