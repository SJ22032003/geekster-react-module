import loadingSvg from "../assets/loading.svg";

function Loader({ customStyle = {} }) {
  return (
    <div>
      <img
        src={loadingSvg}
        alt="loading"
        style={{
          width: "100%",
          ...customStyle,
        }}
      />
    </div>
  );
}

export default Loader;
