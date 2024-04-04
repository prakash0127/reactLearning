import { useState } from "react";

import "./App.css";
import Child from "./Child";

function App() {
  let [firstName, setFirstName] = useState("");

  function getData(data) {
    console.log(data);
    setFirstName((firstName = data));
  }

  return (
    <>
      {firstName} <br />
      <h1>Shifting state up </h1>
      <Child getData={getData} />
    </>
  );
}

export default App;
