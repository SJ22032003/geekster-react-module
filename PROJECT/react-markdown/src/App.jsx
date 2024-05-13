import "./App.css";
import Markdown from "react-markdown";
import  { useState} from "react";

function App() {

  const [markdown, setMarkdown] = useState(``);



//   const markdown = `
  
//   # this is heading
  
//   A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |
// `;

  return (
    <>
      <textarea name="mark-dwon" id="" cols="30" rows="5" onChange={(e) => setMarkdown(e.target.value)} value={markdown}></textarea>
      <Markdown>{markdown}</Markdown>
    </>
  );
}

export default App;
