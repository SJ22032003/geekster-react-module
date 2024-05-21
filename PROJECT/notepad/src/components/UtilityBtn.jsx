function UtilityBtn({ dispatch }) {
  const convertToUppercase = () => {
    dispatch({
      type: "CONVERT_UPPCASE",
    });
  };
  const convertToLowercase = () => {
    dispatch({
      type: "CONVERT_LOWERCASE",
    });
  };
  const clearText = () => {
    dispatch({
      type: "CLEAR_TEXT",
    });
  };

  return (
    <div>
      <button onClick={convertToUppercase}>Convert Uppercase</button>
      <button onClick={convertToLowercase}>Convert Lowercase</button>
      <button onClick={clearText}>Clear Text</button>
    </div>
  );
}

export default UtilityBtn;
