import { useContext } from "react";
import { UserContext } from "../STATE";

function InnerChild() {

  const { state } = useContext(UserContext);

  return <div>InnerChild youngest child name is {state.name}</div>;
}

export default InnerChild;
