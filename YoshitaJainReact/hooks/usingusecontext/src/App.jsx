import { createContext, useState } from "react";

import "./App.css";
import ChildC from "./ChildC";
import ChildA from "./ChildA";

// need to create two contexts
// same for the first two process
// in the last one use usecontext
const data = createContext();
const data1 = createContext();
const data2 = createContext();
function App() {
  const name = "Prakash Gupta";
  const gender = "Male";
  const hobby = "Playing Chess";
  // want to share with ChildC component
  // we need to pass like <data.Provider value and agin inside another
  // because if we pass separately ComponentC will call again by again
  // and thatvwe dont want it
  // even we can pass state as well via this
  return (
    <>
      <h1>Hello js and react js developer</h1>
      <ChildA />
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <data2.Provider value={hobby}>
            <ChildC />
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1, data2 };
