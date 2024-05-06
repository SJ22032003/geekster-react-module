import "./App.css";
import { useState, useEffect } from "react";
import { supportedLanguages } from "./components/data";
import DropDown from "./components/DropDown";
import axios from "axios";

function App() {
  const [sourceLang, setSourceLang] = useState("");
  const [tragetLang, setTragetLang] = useState("");
  const [langInput, setLangInput] = useState("");

  const handleTranslate = async () => {
    if(!sourceLang || !tragetLang) {
      alert("select both drop");
      return;
    }


    const requiredData = {
      source_language: sourceLang,
      target_language: tragetLang,
      text: langInput
    }

    const resp = await axios.post("https://text-translator2.p.rapidapi.com/translate", requiredData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '3ece78b734msh531e38d83c279a0p1cf3ffjsn19b08abdbf1a',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
    })

    console.log(resp)

  }

  useEffect(() => {
    console.log(sourceLang, tragetLang);
  }, [sourceLang, tragetLang]);

  return (
    <>
      <div>
        <h1>My Translation App</h1>
        {/* Dropdown */}
        <section>
          <DropDown
            label="Source Language"
            supportedLanguages={supportedLanguages}
            onChange={(e) => setSourceLang(e.target.value)}
          />
          <DropDown
            label="Target Language"
            supportedLanguages={supportedLanguages}
            onChange={(e) => setTragetLang(e.target.value)}
          />
        </section>
        {/* Input for language */}
        <section>
          <h3>Write down your text</h3>
          <input
            value={langInput}
            onChange={(e) => setLangInput(e.target.value)}
          />
          <button onClick={handleTranslate}>Translate</button>
        </section>
        {/* Result */}
        <section></section>
      </div>
    </>
  );
}

export default App;
