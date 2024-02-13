import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
    // want to add more like above line suppose 4 times then what will be the output the out will be same increment of one time i.e 16
    // why so because fibre use to send the ionstruction in a bunch
    // if we want to do it line the same for that we need to use prevCounter i.e it will store the previous value and then increment
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
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
