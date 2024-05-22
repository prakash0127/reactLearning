import { useState } from "react";
import CssStyling from "./CssStyling";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CssStyling />
      </div>
    </>
  );
}

export default App;
