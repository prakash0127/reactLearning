import { useState } from "react";

import FormValidation from "./FormValidation";
import UnControlledComp from "./UnControlledComp";
import "./App.css";

function App() {
  // here we just created two states that will use for name and password
  const [name, setName] = useState("");
  const [pswd, setPassword] = useState("");

  //

  // form in react:-  In our input feild we passed the value "Hello" in th efirst name
  // so it will treate as a props and we'll not able to change it becasue props we can't change read only

  // for change or edit the value in the text feild
  // we need to use defaultValue in the place of value and now we can edit it or type any value

  // Controlled components
  // to manage our component means the value we enter in the input feild like check or store or display some where
  // for that we need to use our useState so we have created two state and
  // the way of crontrolling the component in react is called Controlled component

  // now we changed it with value again and passed the firstName state
  // but again it will not allow to change the value because again props readonly value
  // for that we can handle it with useState function
  // And to use it we need to use eventhandler to use our setName function
  // as we have seen in our warning message in console will use onchaneg
  // and to use inside a fn (e) => setFirstName(e.target.value) to capture we use event e and target.value for value that entered
  // even we can pass as a separate functio nas well

  //   // want one condition want to convert the values to upper case so
  function handleChange(e) {
    if (e.target.name === "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPassword(e.target.value);
    }
  }

  // Uncontrolled
  // now we dont need to use event handler to controll the componet and in uncontrolled component
  // the alternative is uncontrolled components where data is handled by the DOM itself
  return (
    <>
      <form className="form-one" action="">
        <label>First name </label> <br />
        <input
          type="text"
          value={name}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label>Password: </label> <br />
        <input
          type="text"
          value={pswd}
          name="password"
          onChange={handleChange}
        />
      </form>
      <h1>our inputs </h1>
      <p>
        {name} {pswd}
      </p>
      <div>
        <FormValidation />
      </div>
      <div>
        <UnControlledComp />
      </div>
    </>
  );
}

export default App;
