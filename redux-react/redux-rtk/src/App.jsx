import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./redux/reducer/counter";
import { getAllName, getUsersFromApi } from "./redux/reducer/user";
import "./App.css";

function App() {
  const { demo, value } = useSelector((state) => state.counter);
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
        increase by 10
      </button>

      <section>
        <button onClick={handleUsers}>Get users from api</button>

        <button
          onClick={() => dispatch(getAllName())}
        >Get only names</button>

        <div>{loading ? <h1>Loading</h1> : <>{JSON.stringify(users)}</>}</div>
      </section>
    </>
  );
}

export default App;
