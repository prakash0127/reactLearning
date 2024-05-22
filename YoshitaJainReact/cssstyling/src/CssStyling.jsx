import React from "react";

function CssStyling() {
  // using variable
  const myStyle = {
    color: "red",
    border: "2px solid white",
    borderRadius: "4px",
  };

  // and for external we can use external style sheet and import the file inside the Component
  return (
    <div>
      {/* inline styling  */}
      <h2 style={{ color: "red" }}>CSS styling</h2>
      <h3 style={myStyle}>Hello World </h3>
    </div>
  );
}

export default CssStyling;
