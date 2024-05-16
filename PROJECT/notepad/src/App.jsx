import "./App.css";
import TextNote from "./components/TextNote";
import UtilityBtn from "./components/UtilityBtn";
import Summary from "./components/Summary";
import { useReducer } from "react";

const initialState = {
  text: "",
  numWords: 0,
  numChars: 0,
  readTime: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return {
        ...state,
        text: action.payload,
      }
    default:
      return state;
  }
}

function App() {

  const [] = useReducer(, initialState)

  return (
    <>
      <TextNote />
      <UtilityBtn />
      <Summary />
    </>
  );
}

export default App;
