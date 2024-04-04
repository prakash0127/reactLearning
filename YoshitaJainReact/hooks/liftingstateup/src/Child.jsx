import React from "react";
import { useState } from "react";

function Child(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.getData(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Child;
