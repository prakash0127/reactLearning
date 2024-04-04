import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [pswd, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.name === "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPassword(e.target.value);
    }
  }

  return (
    <>
      <form className="form-one" action="">
        <label>First name </label> <br />
        <input
          type="text"
          value={name}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label>Password: </label> <br />
        <input
          type="text"
          value={pswd}
          name="password"
          onChange={handleChange}
        />
      </form>
      <h1>our inputs </h1>
      <p>
        {name} {pswd}
      </p>
    </>
  );
}

export default App;
