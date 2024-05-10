import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // Memoization:--
  // additional info- In js we have a concept called memoization used for memoize the value
  // and to performance inhance
  // suppose a fn accepting two params and we are calling our fn with same params like second time as well
  // so fn should not executed the fn again it checks the params and give the calculated value
  // that fn already calculated with the same params

  // useMemo it based on the same concept

  // created a addition fn
  function addition() {
    setAdd(add + 1);
  }
  // created a substraction fn
  function substraction() {
    setMinus(minus - 1);
  }
  // created a multiply fn
  // before that usememo it was running as we are clicking on addition
  // and with button associated with fn will work accorgingly but the multiply function
  // also getting called and it is also displaying on the UI because we called the multiply fn

  // that we have memoized so when even we called only addition it should call or execute only
  // the particular function

  // useMemo also like useEffect it accept a funtion and a dependency so whatever we pass
  // in the dependency it our memoized function will work at that time only
  // or we can pass anything
  const multiplication = useMemo(
    function multiply() {
      console.log("***************");
      return add * 10;
    },
    [add]
  );
  // and if we will not pass anything it will run only once while loading the app
  return (
    <>
      <h1>Learning use memo</h1>

      {multiplication}
      <br />
      <button onClick={addition}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={substraction}>Substraction</button>
      <span>{minus}</span>
    </>
  );
}

export default App;
