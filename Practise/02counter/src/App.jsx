import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(5); // in useState(default value it use to take)
  // you can give boolean value , number, string, etc
  // and setCounter is a function/method; and use to conrol the counter variable
  // no need to write the name setCounter you can keep anything
  // let counterValue = 5;

  const removeValue = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(count);
    }
  };

  const addValue = () => {
    setCount(count + 1);
    if (count === 20) {
      setCount(count);
    }
  };

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter Value: {count} </h2>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
