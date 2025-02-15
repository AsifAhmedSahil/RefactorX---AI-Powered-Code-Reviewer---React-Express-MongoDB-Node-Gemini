
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import { useEffect, useState } from 'react'
import  Editor from "react-simple-code-editor"
import axios from "axios"

function App() {

  const [code,setCode] = useState("")
  const [ review, setReview ] = useState(``)

  useEffect(()=>{
    prism.highlightAll()
  })

  async function reviewCode() {
    const response = await axios.post('http://localhost:5000/ai/get-review', { code })
    setReview(response.data)
  }
  

  return (
    <>
       <main>
        <div className="left">
          <div className="code">
          <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
            
          </div>
          <div
            
            className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          {review}
        </div>
      </main>
    </>
  )
}

export default App
