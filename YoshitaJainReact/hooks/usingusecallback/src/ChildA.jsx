import { memo } from "react";
import React from "react";

function ChildA({ learning, count }) {
  // just added a console.log
  console.log("Child component ");
  return <div></div>;
}
// just wrap the Component and it has been memoized
export default memo(ChildA);
