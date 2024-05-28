import { useSelector, useDispatch } from "react-redux";
import { INCREMENT } from "./redux/action";
import './App.css'

function App() {

  const { count } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
      payload: 10
    })
  }

  return (
    <>
      <h1>count is {count}</h1>
      <button
      onClick={handleIncrement}
      
      >increment count</button>
    </>
  )
}

export default App
