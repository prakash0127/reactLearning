import { useState } from "react";
import AgeValidation from "./AgeValidation";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AgeValidation />
      </div>
    </>
  );
}

export default App;
