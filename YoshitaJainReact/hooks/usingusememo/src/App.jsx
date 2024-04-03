import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  function addition() {
    setAdd(add + 1);
  }
  function substraction() {
    setMinus(minus - 1);
  }
  const multiplication = useMemo(
    function multiply() {
      console.log("***************");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      <h1>Learning use memo</h1>
      {multiplication} <br />
      <button onClick={addition}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={substraction}>Substraction</button>
      <span>{minus}</span>
    </>
  );
}

export default App;
