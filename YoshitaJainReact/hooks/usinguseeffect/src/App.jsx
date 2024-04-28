import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState("Ram-Ram");

  // useEffect hooks we use while using for side effect tasks need to perform
  // like timmer function(setTimeout) or fetch the data from Api or dom to update directly then we use useEffect

  // and before we were using class component with lifecycle methods that we can use using this hook
  // componentDidMount, componentDidUpdate, and componentWillUnmount

  // syntax below
  useEffect(() => {
    console.log("Component did count");
  }, [data]);
  // whenever our application will reload the above will run
  function updateCount() {
    if (count === 25) {
      return count;
    }
    setCount((prevCount) => prevCount + 1);
    f;
  }
  function updateData() {
    setData((prevData) => (prevData === "Ram-Ram" ? "Sita-Ram" : "Ram-Ram"));
  }
  return (
    <>
      <h1> useState hooks lerning </h1>
      <p>Our count is {count}</p>
      <button onClick={updateCount}>Click to update the count</button>
      <h2>{data}</h2>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default App;
