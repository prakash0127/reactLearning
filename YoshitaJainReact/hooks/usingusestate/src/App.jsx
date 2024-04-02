import { useState } from "react";
import "./App.css";

function App() {
  // here we are using useState to update the counter while click on button
  const [count, setCount] = useState(10);
  function updateCount() {
    if (count === 25) {
      return count;
    }
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <h1> useState hooks lerning </h1>
      <p>Our count is {count}</p>
      <button onClick={updateCount}>Click to update the count</button>
    </>
  );
}

export default App;
