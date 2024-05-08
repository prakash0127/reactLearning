import { useState, useRef } from "react";
// importing hook
import "./App.css";
import WebDevSimplifyRef from "./WebDevSimplifyRef";

function App() {
  const [name, setName] = useState("Prakash");

  const refElement = useRef("");
  // useRef is a hook, using this hook we can manupulate the Dom directly
  // we are just assigning the variable to useRef hook
  // useRef return a "current" value and the value of "current" is undefined
  // console.log(refElement);
  function reset() {
    setName("");
    refElement.current.focus();
    refElement.current.style.color = "";
    // here we again set the value is empty so
    // our color will again change back to white/original
  }

  function changeTextColor() {
    // function to change the color of text
    refElement.current.style.color = "blue";
  }
  return (
    <>
      <h1>Using useRef hook</h1>
      <input
        ref={refElement}
        // we have added the ref element inside so we can use our useRef hook
        type="text"
        value={name}
        // here we just pass the state of name
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      {/* created two button and apply a function to each using onClick  */}
      <button onClick={changeTextColor}>Input-Color-Blue</button>
      <div className="WebDevSimplifyRef">
        <WebDevSimplifyRef />
      </div>
    </>
  );
}

export default App;
