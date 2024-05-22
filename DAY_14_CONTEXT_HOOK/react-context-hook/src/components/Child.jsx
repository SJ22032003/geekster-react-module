import InnerChild from "./InnerChild";
import { useContext } from "react";
import { UserContext } from "../App";

function Child() {

  const { setName } = useContext(UserContext);

  return (
    <div>
      Child

    <button
      onClick={() => setName("Geekster")}
    >Change name</button>

      <InnerChild  />
    </div>
  );
}

export default Child;
