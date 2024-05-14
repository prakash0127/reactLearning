import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
function Form() {
  // Project summary: A registration form having three field and each field is mandatory
  // or else it will give an alert "all field are mandatory "
  // and all the field are filled and clicked on register
  // it will display "Hello withTheNameWeHaveEntered, You've Registerated successfully"

  // added css as per accordingly

  // three input field with type text, email, and password and added a button as submit

  // Input value we want to save it some where for that we have created a Object

  const data = {
    name: "",
    email: "",
    password: "",
  };

  // to handle all the input we need state but it will create only one and handle all the input values

  // to passing or capturing the data to our object or assigning the value to our Object
  // we pass the value props and assign to the data keys  like value={inputVlaue.name} and for
  // others inputValue.email and inputValue.password

  const [inputValue, setInputValue] = useState(data);

  const [flag, setFlag] = useState(false);
  // flag state we created for pre tag text should display or adding the condition in it

  //added a function handleData to capture the data and only one handleData function
  function handleData(e) {
    // here using setInputValue func first we store all the data and later one we're assigning
    // assigning our form input value (e.target.value) to our Object keys [e.target.name]
    // now it is capturing the input text or email or password
    // **** note: here name is the props of input field not data Object key can see in
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    setFlag(false);
  }

  // Now we will handle the alerts so if not  any field is empty it will display
  // the error on onSubmit of the form so will add obSubmit
  //
  useEffect(() => {}, [flag]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.name || !inputValue.email || !inputValue.password) {
      alert("All field are mandatory ");
    }
    // the else condition will be if all the field is good we will submit the form
    // for that we create a state called flag and setFlage and initial value is false
    // will useEffect so after the true why we are using it because it will render the register
    // button when we our all the condition is true and flag will be true and then it
    // show a message to the display
    else {
      setFlag(true);
      setInputValue({ ...inputValue, email: "", password: "" });
      // console.log(inputValue);
    }
  }

  // will write a pre tag to dipslay when all the requirement will be done
  // inside a will put a condition as well
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputValue.name}, you're register succeffuly{" "}
          </h2>
        ) : (
          <h2></h2>
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputValue.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email "
            name="email"
            value={inputValue.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password "
            name="password"
            value={inputValue.password}
            onChange={handleData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
