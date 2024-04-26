import Loader from "../common/Loader";

function Home({ upperFunc }) {
  
  const myStylesForLoader = {
    width: "10%"
  }

  return (
    <div>
      <Loader customStyle={myStylesForLoader} />
    </div>
  );
}

export default Home;
