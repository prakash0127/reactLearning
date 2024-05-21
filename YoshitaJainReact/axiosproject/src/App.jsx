import { useState } from "react";

import "./App.css";
import AxiosPost from "./AxiosPost";
import AxiosGet from "./AxiosGet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Axios-Project</h2>
      </div>
      <AxiosGet />
      <AxiosPost />
    </>
  );
}

export default App;
