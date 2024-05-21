function TextNote({ state, dispatch }) {
  const handleTextChange = (e) => {
    dispatch({
      type: "UPDATE_TEXT",
      payload: e.target.value,
    });
  };
  return (
    <div>
      <h1>Text Area</h1>
      <textarea
        name="note-pad"
        rows="10"
        cols="40"
        placeholder="enter your text"
        value={state.text}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextNote;
