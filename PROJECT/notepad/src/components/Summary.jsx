function Summary({ state }) {
  return (
    <div>
      <p>Number of words : {state.numWords}</p>
      <p>Number of characters : {state.numChars}</p>
      <p>Reading Time : {state.readTime}</p>
    </div>
  );
}

export default Summary;
