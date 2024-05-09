import React, { useContext } from "react";
import { data, data1, data2 } from "./App";

function ChildC() {
  const fullName = useContext(data);
  const gender = useContext(data1);
  const hobby = useContext(data2);
  return (
    <>
      <h1>Using useContext hook</h1>
      <h2>
        Hi my name is {fullName} and my gender is {gender}
        and my hobby is {hobby}
      </h2>
    </>
  );
}

export default ChildC;
