import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // here we first hard code the value like
  // First name is Prakash and Last name is Gupta

  //Requirement is have a button to update the first name and last name
  // and we are using react so we use useSate hook for it

  // for setting up firstname and lastname we can create two states but
  // suppose we have 100 of states and if we are creating 100 useStates that will take more memory
  // and that is not good atall

  // to avoid it we can use object in our state i.e useState and update all the values so created a state

  // for now firstName is Prakash and lastName will be Gupta
  const [allValues, setAllValues] = useState({
    firstName: "Prakash",
    lastName: "Gupta",
  });

  // Requirement is set only firstName not lastname, lastNmae will remain same

  // if we pass setAllValues({firstName: "Rahul"}), what it'll do here is it will update only
  // firstName and it will remove the lastName property from the object

  // even we pass only lastName so firstName will be vanish/blank/removed or it will remove the firstName property

  // so we can pass inside setAllValues({firstName: "Rahul", lastName:"Gupta"})
  // but our requirement is different menas only firstName need to change

  // for that we will use spread operator i.e manily three dots
  // we need add before firstName or lastName ...allValues
  // we need to pass our first parameters as spread operator our state variable has all the value
  // in allValues and we are telling react to update only firstName here and it will work properly
  function update() {
    setAllValues({ ...allValues, firstName: "Rahul" });
    console.log("Update the states");
  }

  return (
    <>
      <div>
        <h1>
          First name is {allValues.firstName} and last name is{" "}
          {allValues.lastName}
        </h1>
        <button onClick={update}>Update</button>
      </div>
    </>
  );
}

export default App;
