import { useCallback, useState } from "react";
import "./App.css";
import ChildA from "./ChildA";

function App() {
  // created two state
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  // useMemo and useCallback are kind of similar but there is bit difference
  // useMemo returns a memoiesed value
  // useCallback returns a memoized function

  // firstly we are just clicking on the button and increament the value by 1
  // and we have created a fn componet ChildA
  // and calling the ChildA componet inside the App Component

  // In ChildA just added a console.log
  // while loading the app it will pring the clg in the browser
  // but while click on addition button it is calling again the ChildA component
  // it shouldn't because it is not related to addition button

  // to memoize the Component just using usememo using like memo(ChildA) in ChildA component

  // after that child component is not redering
  // now then what is the use of useCallback

  // now created a fn learning for some functionality
  // and now if you try to click on addition button it start rendering again
  // so for that we have to agian memoized

  // ** using useMemo we are memoizing value not functions

  // now we use usecallback hook to memoized the function here
  // agin it takes a fn and a dependecy like below
  // so here we want the fn to be render only on the first time app loads
  // and we are passing nothing in our dependecy array

  // additionally we want a variable so that if that will called then the ChildA component will run
  // created a state count and pass it to childA component as props
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
