import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(8); // in useState(default value it use to take)
  // you can give boolean value , number, string, etc
  // and setCounter is a function/method; and use to conrol the counter variable
  // no need to write the name setCounter you can keep anything

  //

  const addValue = () => {
    // setCount(count + 1);
    // if you do the same thing like
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);

    // it will add only 1

    // to handle it like want to add 3 time we need precounter any name we take

    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);

    // now if you will click it will add 4 times at same time
    if (count === 20) {
      setCount(count);
    }
  };

  const removeValue = () => {
    // setCount(count - 1);
    setCount((prevCounter) => prevCounter - 1);
    setCount((prevCounter) => prevCounter - 1);
    setCount((prevCounter) => prevCounter - 1);
    setCount((prevCounter) => prevCounter - 1);
    if (count === 0) {
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
