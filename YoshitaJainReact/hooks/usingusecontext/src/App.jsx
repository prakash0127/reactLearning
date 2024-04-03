import { createContext, useState } from "react";

import "./App.css";
import ChildC from "./ChildC";
import ChildA from "./ChildA";

// need to create two contexts

const data = createContext();
const data1 = createContext();
function App() {
  const name = "Prakash Gupta";
  const gender = "Male";
  // want to share with ChildC component

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildC />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
