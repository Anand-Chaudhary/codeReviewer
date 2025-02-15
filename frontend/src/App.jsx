import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from "axios"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Editor from "react-simple-code-editor"
import { useState } from 'react'

function App() {
  const [code, setCode] = useState(`function sum(a, b) {
    return a + b;
  }`)

  const [review, setReview] = useState(``);

  const reviweCode = async ()=>{
    const response = await axios.post('http://localhost:3000/ai/getReview', {code})
    setReview(response.data)
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
        <div className="right">
          <Markdown
          rehypePlugins={[rehypeHighlight]}
            style={{
              fontSize: 16
            }}
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
