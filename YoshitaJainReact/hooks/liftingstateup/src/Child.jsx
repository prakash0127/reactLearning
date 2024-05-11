import React from "react";
import { useState } from "react";

function Child(props) {
  // scenario: we want to pass the data from the Chil component to paraent
  // means this Child component to App component
  // here we are taking the input from the form input text and passing it to App component
  const [name, setName] = useState("");
  // created a state using the useState

  // created a form and from input text we are taking input
  function handleSubmit(e) {
    // preventing from the default
    e.preventDefault();
    // here with props we are calling our getDate functionand passing the our Child State
    // that we have assign the value of our input
    props.getData(name);
  }
  // handle function to get the value and update it to the name state
  function handleChange(e) {
    setName(e.target.value);
  }
  // added a button and in the form we handle while the submit
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Child;
