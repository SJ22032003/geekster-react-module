import "./App.css";
import Profile from "./components/Profile";
import Quote from "./components/Quote";

function App() {

  const myDetails = {
    name: "SJ",
    age: 20,
    isAdult: true
  }

  return (
    <>
      {/* <Quote /> */}
      <Profile {...myDetails}  />
    </>
  );
}

export default App;
