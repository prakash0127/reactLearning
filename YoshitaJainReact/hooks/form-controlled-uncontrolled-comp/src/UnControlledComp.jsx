import React, { useState, useRef } from "react";

function UnControlledComp() {
  const [name, setNmae] = useState("");

  // Uncontrolled
  // now we dont need to use event handler to controll the componet and in uncontrolled component
  // the alternative is uncontrolled components where data is handled by the DOM itself
  // so we dont use eventhandler but we can use useRef hook to manipulate the DOM

  // we use lastNmae input to see the uncontrolled the input
  // created a ref object

  // In the form we will use onSubmit and capture it when we submit tyhe form

  // and add the function now we will see in Uncontrolled-Component Component
  // now on submit we can capture our data in the console or print in the console
  // to make it uppercase we can do add the toUpperCase fn so
  //
  const refObj = useRef();
  // console.log(refObj);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(refObj.current.value.toUpperCase());
  }
  return (
    <>
      <h2>Uncontrolled Component example</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" ref={refObj} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlledComp;
