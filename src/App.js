import React, { useState } from "react";
import data1 from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(count < 0) {
      const newText = data1.slice(0, 1);
      setText(newText)
    }
    else if(count > data1.length) {
      console.log(count)
      console.log(data1.length)
      const newText = data1.slice(0, data1.length);
      setText(newText)
    }
    else {
      const newText = data1.slice(0, count);
      setText(newText)
    }
    
    
  } 

  return <main className="section-center">
    <h3>Tired of Boring Lorem İpsum ?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
        paragraphs :
        </label>
        <input type="number" name="amount" id="amount" value = {count} onChange = {(e) => setCount(e.target.value)}/>
         <button type="submit" className="btn">generate</button>
    </form>

    <article className="lorem-text">
      {text.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        )
      })}
    </article>
 
  </main>
}

export default App;
