import { memo } from "react";
import React from "react";

function ChildA({ learning, count }) {
  console.log("Child component ");
  return <div></div>;
}

export default memo(ChildA);
