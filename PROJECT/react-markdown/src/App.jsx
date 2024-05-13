import "./App.css";
import Markdown from "react-markdown";

function App() {
  const markdown = `
  
  # this is heading
  
  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return (
    <>
      <Markdown>{markdown}</Markdown>
    </>
  );
}

export default App;
