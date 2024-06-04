import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./redux/reducer/counter";
import { useGetPokemonByNameQuery } from "./redux/service/pokemon";
import "./App.css";

function App() {
  const { demo, value } = useSelector((state) => state.counter);

  const { data, isLoading, isError } = useGetPokemonByNameQuery("pikachu");

  const dispatch = useDispatch();

  const handleUsers = () => {
    dispatch(getUsersFromApi());
  };

  const { users, loading, error } = useSelector((state) => state.user);

  console.log(users, loading, error);

  return (
    <>
      <h1>count is here {value}</h1>
      <h2>{demo ? "yes" : "no"}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>

      <button
        onClick={() => dispatch(incrementByAmount({ count: 10, demo: false }))}
      >
      <button
        onClick={() => dispatch(incrementByAmount({ count: 10, demo: false }))}
      >
        increase by 10
      </button>

      {!isLoading ? JSON.stringify(data) : "Loading..."}

      {isError && "error occured"}
    </>
  );
}

export default App;
