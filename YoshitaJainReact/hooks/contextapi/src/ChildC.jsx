import React from "react";
import { data, data1 } from "./App";
function ChildC() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    My name is {name} and gender is {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildC;
