import "./App.css";
import useCount from "./hook/useCount";
import useFetch from "./hook/useFetch";

// create a custom hook for Debounce called useDebounce

function App() {
  const { count, increment } = useCount(10);

  const  [data, loading] = useFetch({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    body: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
  });

  const [data2, loading2] = useFetch({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos"
  })

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {
        loading ? <h1>Loading</h1> : (
          <>{JSON.stringify(data)}</>
        )
      }

    </>
  );
}

export default App;
