import React, { useContext } from "react";
import { data, data1 } from "./App";

function ChildC() {
  const fullName = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>Using useContext hook</h1>
      <h2>
        Hi my name is {fullName} and my gender is {gender}
      </h2>
    </>
  );
}

export default ChildC;
