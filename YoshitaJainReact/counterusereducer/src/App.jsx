import { useReducer } from "react";

import "./App.css";

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>count ={count}</div>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decreament</button>
      </div>
    </>
  );
}

export default App;
