import { useCallback, useState } from "react";
import "./App.css";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const learning = useCallback(() => {
    console.log("learning ");
  }, []);

  return (
    <>
      <h1>learning useCallback hook </h1>
      <ChildA learning={learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}> Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}> Count</button>
    </>
  );
}

export default App;
