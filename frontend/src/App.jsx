import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from "axios"
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Editor from "react-simple-code-editor"
import { useState } from 'react'
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-go"
import "prismjs/components/prism-rust"
import Loader from './components/Loader'

const languages = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  c: "C",
  cpp: "C++",
  go: "Go",
  rust: "Rust",
  html: "HTML",
  css: "CSS"
};

function App() {
  const [code, setCode] = useState(`console.log("Hello, World!");`);
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState(``)
  const [text, setText] = useState(`Click Review to get started`)

  const reviewCode = async () => {
    try {
      console.log("Starting review process...");
      setText(
        <Loader />
      );
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}/ai/getReview`, 
        { code, language },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      setReview(response.data);
    } catch (error) {
      console.error("Error details:", error.response || error);
      setText("An error occurred while reviewing the code.");
    } finally {
      setText(``)
    }
  };

  return (
    <>
      <main>
        <div className="left">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            {Object.entries(languages).map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>

          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)}
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "90%",
                width: "100%",
                overflow: "visible",
                overflowY: "visible"
              }}
            />
          </div>
          <button className="review-btn" onClick={reviewCode}>Review</button>
        </div>
        <div className="right">
          {!review ? (
            <p className="loader">{text}</p>
          ) : (
          <Markdown
            rehypePlugins={[rehypeHighlight]}
            style={{ fontSize: 16 }}
          >{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
