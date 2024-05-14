import { useState } from 'react'
import './App.css'

function App() {

  const [searchImg, setSearchImg] = useState("");
  const [generatedImg, setGeneratedImg] = useState("");

  const API_TOKEN = "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";

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }


  const generateImg = async () => {
    await query({"inputs": searchImg }).then((response) => {
      const imgSrc = URL.createObjectURL(response)
      setGeneratedImg(imgSrc);
    }).catch(err => console.log(err))
  }

  return (
    <>
     <input type="text" value={searchImg} onChange={(e) => setSearchImg(e.target.value)} />
     <button
      onClick={generateImg}
     >Convert</button>

    <img src={generatedImg} alt="image using test to img" style={{ width: "200px", height: "200px"}} />
    </>
  )
}

export default App
