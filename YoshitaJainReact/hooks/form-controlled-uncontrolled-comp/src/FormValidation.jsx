import React, { useRef, useState } from "react";

function FormValidation() {
  const [firstName, setFirstName] = useState("Prakash");
  const [lastName, setLastName] = useState("");
  // form in react:-  In our input field we passed the value "Hello" in th efirst name
  // so it will treate as a props and we'll not able to change it becasue props we can't change read only

  // for change or edit the value in the text field
  // we need to use defaultValue in the place of value and now we can edit it or type any value

  // Controlled components
  // to manage our component means the value we enter in the input field like check or store or display some where
  // for that we need to use our useState so we have created two state and
  // the way of crontrolling the component in react is called Controlled component

  // now we changed it with value again and passed the firstName state
  // but again it will not allow to change the value because again props readonly value
  // for that we can handle it with useState function
  // And to use it we need to use eventhandler to use our setName function
  // as we have seen in our warning message in console will use onchaneg
  // and to use inside a fn (e) => setFirstName(e.target.value) to capture we use event e and target.value for value that entered
  // even we can pass as a separate function as well

  function handleChange(e) {
    if (e.target.name === "firstName") {
      const capValue = e.target.name.toUpperCase();
      setFirstName(capValue);
    } else {
      setLastName(e.target.value);
    }
  }

  // suppose we have another function as well and using in another input field
  // and now we are able to edit it
  // want one condition want to convert the values to upper case so

  // now suppose we have several input field and we need to do it editable to all the input fields
  // for that we need to create fn for each and every input field for that whay we can do create a a fn for each
  // we use name attribute we pass the state value i.e so firstName
  // changed in e.target.name and removed the second function and add the condition for it
  // in one function for two inputs
  // function handleLastName(e) {}
  // we have seen in controlled component we have used useState hooks

  // Uncontrolled
  // now we dont need to use event handler to controll the componet and in uncontrolled component
  // the alternative is uncontrolled components where data is handled by the DOM itself
  // so we dont use eventhandler but we can use useRef hook to manipulate the DOM

  // we use lastNmae input to see the uncontrolled the input
  // created a ref object

  // In the form we will use onSubmit and capture it when we submit tyhe form

  // and add the function now we will see in Uncontrolled-Component Component

  return (
    <>
      <h2>Forms and Controlled Components</h2>
      <form className="newForm" action="">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name={firstName}
          value={firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="LastName">Last Name: </label>
        <input
          type="text"
          name={lastName}
          value={lastName}
          onChange={handleChange}
        />
        <br />
      </form>
    </>
  );
}

export default FormValidation;
