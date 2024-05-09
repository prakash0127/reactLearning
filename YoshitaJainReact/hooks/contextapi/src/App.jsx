import { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";
import ChildC from "./ChildC";

const data = createContext();
// 1. here we have craeted context
const data1 = createContext();
function App() {
  const name = "Prakash Gupta";
  const gender = "Male";
  //context API
  // 1. create context
  // 2. provider
  // 3. consumer

  return (
    <>
      {/* to passing the data directl to ComponentC 
      first we wrap to provider using data.provider data1.provider 
      for both the data 
    */}

      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>Context API </h1>
          <ChildC />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
