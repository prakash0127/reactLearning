import { useState, useEffect } from "react";
import WebDev from "./WebDev";

import "./App.css";
import WebDev2 from "./WebDev2";

function App() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState("Ram-Ram");

  // useEffect hooks we use while using for side effect tasks need to perform
  // like timmer function(setTimeout) or fetch the data from Api
  // or dom to update directly then we use useEffect

  // and before we were using class component with lifecycle methods that we can use using this hook
  // componentDidMount, componentDidUpdate, and componentWillUnmount

  // syntax below
  useEffect(() => {
    // console.log("Component did count");
  }, [data]);
  // whenever our application will reload the above will run
  function updateCount() {
    if (count === 25) {
      return count;
    }
    setCount((prevCount) => prevCount + 1);
  }
  function updateData() {
    setData((prevData) => (prevData === "Ram-Ram" ? "Sita-Ram" : "Ram-Ram"));
  }

  return (
    <>
      <h1> useState hooks learning </h1>
      <p>Our count is {count}</p>
      <button onClick={updateCount}>Click to update the count</button>
      <h2>{data}</h2>
      <button onClick={updateData}>Update Data</button>
      <div style={{ marginTop: "30px", border: "2px solid #ffffff" }}>
        <WebDev2 />
      </div>
    </>
  );
}

export default App;
