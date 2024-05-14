import "./App.css";
import Markdown from "react-markdown";
import  { useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';


function App() {

  const [markdown, setMarkdown] = useState(``);

  return (
    <>
      {/* <textarea name="mark-dwon" id="" cols="30" rows="5" onChange={(e) => setMarkdown(e.target.value)} value={markdown}></textarea> */}
     
      <MarkdownEditor
      value={markdown}
      onChange={(value, _) => {
        setMarkdown(value)
      }}
    />

      <Markdown>{markdown}</Markdown>

    </>
  );
}

export default App;
