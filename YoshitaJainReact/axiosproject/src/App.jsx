import { useState } from "react";
import AxiosExample from "./AxiosExample";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Axios-Project</h2>
      </div>
      <AxiosExample />
    </>
  );
}

export default App;
