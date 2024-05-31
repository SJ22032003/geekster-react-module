import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./redux/reducer/counter";
import "./App.css";

function App() {
  const { demo, value } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <h1>count is here {value}</h1>
      <h2>{demo ? "yes" : "no"}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>

      <button onClick={() => dispatch(incrementByAmount({ count: 10, demo: false }))}>
        increase by 10
      </button>
    </>
  );
}

export default App;
