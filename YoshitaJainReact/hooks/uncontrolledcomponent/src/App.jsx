import { useState } from "react";

import "./App.css";
import { useRef } from "react";

function App() {
  const refObject = useRef();

  // we handle uncontrolled component using useRef hooks
  // directly controll from DOM

  function hanldeSubmit(e) {
    e.preventDefault();
    console.log(refObject.current.value.toUpperCase());
  }
  return (
    <>
      <form className="app" onSubmit={hanldeSubmit}>
        <label>First name </label> <br />
        <input type="text" ref={refObject} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
