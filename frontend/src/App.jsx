import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from "axios"
import Editor from "react-simple-code-editor"
import { useState } from 'react'

function App() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`)


  const reviweCode = async ()=>{
    const response = await axios.post('http://localhost:3000/ai/getReview', {code})
    console.log(response.data);
    
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid black",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
           className="review"
           onClick={reviweCode}
          >Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  )
}

export default App
