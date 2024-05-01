import Loader from "./common/Loader";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  const upperCaseString = (str) => {
    return str.toUpperCase();
  };

  const arr = ["alex", ["sam", ["clear", "amazon"]]]; // ["alex", "sam", "clear", "amazon"]

  console.log(arr.flat(2));

  const obj = {
    name: "sj",
    address: {
      locality: {
        street: 2,
        house: {
          house_number: "c7a",
        },
      },
      city: "city 1",
    },
  };

  // console.log(name1, name2, name3, name4);

  const {
    name,
    address: {
      locality: { street },
    },
    address: { locality },
  } = obj;

  // console.log(name, locality, street);

  return (
    <>
      <Header />
      <MyButton label="Search" customStyles={{ width: "250px"}} />
      <MyButton
        label="Know More"
        customStyles={{ backgroundColor: "#fff", color: "pink" }}
      />
      {/* <Loader /> */}
      {/* <Home upperFunc={upperCaseString} /> */}
    </>
  );
}

export default App;

const MyButton = ({ label, customStyles = {} }) => {
  return (
    <>
      <button
      // className={styles.}
        style={{
      
          ...customStyles,
        }}
      >
        {label}
      </button>
    </>
  );
};
