import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroceryCart from "./components/GroceryCart";

function App() {
  return (
    <>
      <ToastContainer />
      <GroceryCart />
    </>
  );
}

export default App;
