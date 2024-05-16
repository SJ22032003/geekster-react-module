import { UserContext } from "../STATE";
import InnerChild from "./InnerChild";
import { useContext } from "react";

function Child() {

  const { state, dispatch} = useContext(UserContext);

  const handleEmailChange = () => {
    dispatch({
      type: "SET_EMAIL",
      payload: "new-email@gmail.com"
    })
  }

  return (
    <div>
      Child

      user email is { state.email }

      <button onClick={handleEmailChange}>Change email</button>

      <InnerChild  />
    </div>
  );
}

export default Child;
