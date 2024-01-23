import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  // let counter = 15;
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}> add value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
