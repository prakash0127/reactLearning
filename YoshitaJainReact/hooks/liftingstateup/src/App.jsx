import { useState } from "react";

import "./App.css";
import Child from "./Child";

function App() {
  let [firstName, setFirstName] = useState("");
  // In our app we have created a function that is getData
  // and we are passing in the function as props to the Child as we can see <Child getData={getData} />
  // and in the get data we are passing a param that is accepting a data

  //
  function getData(data) {
    console.log(data);
    setFirstName((firstName = data));
  }

  return (
    <>
      {firstName} <br />
      <h1>Lifting-state up </h1>
      <Child getData={getData} />
    </>
  );
}

export default App;
