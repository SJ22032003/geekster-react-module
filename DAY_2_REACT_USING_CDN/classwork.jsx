const Title = () => {
  return <h1>Learn Web Development</h1>;
};

const MyPara = (props) => {
  return (
    <p>
      {props.le}
    </p>
  );
};

const MainContainer = () => {
  // const arr = ["alex", "sam", "clark", "sahil", "sj"];

  const paras = ["pa1", "para2"]

  return (
    <div
      id="main-container"
      style={{ backgroundColor: "red", fontSize: "25px", color: "white" }}
    >
      <Title />

      {
        paras.map(para => <MyPara le={para} />)
      }


      {/* {arr.map((name, index) => {
        if(index === 0) {
          return <a href={"/" + index}>{name}</a>
        }else {
          return <p>{name}</p>
        }
      })} */}
    </div>
  );
};

ReactDOM.render(<MainContainer />, document.querySelector("#root"));
