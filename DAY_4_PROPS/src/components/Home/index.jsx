import Profile from "../Profile";

function Home() {

  const name = "Alex"
  const userAge = 10

  

  return (
    <div id="home-container">
      <h1>Home</h1>
      <Profile name={name} age={userAge} isAdult={userAge >= 20} />
    </div>
  );
}

export default Home;
