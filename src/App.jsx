
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  function encrypt() {
    const encrypted = text
      .split("")
      .map((char) => {
        if (/[a-z]/i.test(char)) {
          const base = char === char.toUpperCase() ? 65 : 97;
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26) + base
          );
        }
        return char;
      })
      .join("");

    setResult(encrypted);
  }

  return (
    <div className="app">
      <h1> Szyfr Cezara</h1>
      <p>Encrypt your message with Caesar cipher</p>

      <div className="container">
        <label>Your message:</label>

        <textarea
          placeholder="Write your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>Shift: {shift}</label>

        <input
          type="range"
          min="1"
          max="25"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
        />

        <button onClick={encrypt}>Encrypt</button>

        <h2>Encrypted message:</h2>

        <div className="result">
          {result.split("").map((char, index) => (
            <span className="letter" key={index}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
