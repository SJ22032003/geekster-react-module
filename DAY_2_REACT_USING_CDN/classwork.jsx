const Title = () => {
  return <h1>Learn Web Development</h1>;
};

const MyPara = () => {
  return (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quis,
      esse eligendi accusamus dignissimos quaerat fugit nostrum nihil tempora
      ad. Illum ab tempora ipsum. Error porro vel iure, sunt, doloribus
      consectetur, praesentium blanditiis voluptatem ullam voluptatibus debitis
      assumenda totam quo minus voluptates vero. Exercitationem repellat,
      dolores corporis quas hic quasi?
    </p>
  );
};

const MainContainer = () => {
  const arr = ["alex", "sam", "clark", "sahil", "sj"];
  return (
    <div
      id="main-container"
      style={{ backgroundColor: "red", fontSize: "25px", color: "white" }}
    >
      <Title />

      {arr.map((name) => {
        return <p>{name}</p>;
      })}
    </div>
  );
};

ReactDOM.render(<MainContainer />, document.querySelector("#root"));
