import Loader from "../common/Loader";
import PropTypes from "prop-types";

function Home({ upperFunc }) {
  const myStylesForLoader = {
    width: "10%",
  };

  console.log(upperFunc("ss"))

  return (
    <div>
      <Loader customStyle={myStylesForLoader} />
    </div>
  );
}

// helps to validate props
Home.propTypes = {
  upperFunc: PropTypes.func,
};


export default Home;
