import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [name, setNmae] = useState("Prakash");

  const refElement = useRef("");

  function reset() {
    setNmae("");
    refElement.current.focus();
    refElement.current.style.color = ""; // here we again set the value is empty so our color will again change back to white/original
  }

  function changeTextColor() {
    refElement.current.style.color = "blue";
  }
  return (
    <>
      <h1>Using useRef hook</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setNmae(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={changeTextColor}>Handle input</button>
    </>
  );
}

export default App;
