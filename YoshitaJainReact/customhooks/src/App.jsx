import { useState } from "react";
import CounterOne from "./CounterOne";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <h1>Custom Hooks-Info</h1>
        <p>
          A custom hook is a js funtion whose name start with "use", we can use
          other hooks in custom hooks as well
          <pre>
            {" "}
            <em>why we use:- </em>
            To remove the duplicated logic in components and we can extract that
            logic to custom hooks
          </pre>
        </p>
      </div>
      <h2>Counter functionality</h2>
      <div> Count : {count} and with initial value is "0"</div>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
      <div>
        <CounterOne />
      </div>
    </>
  );
}

export default App;
