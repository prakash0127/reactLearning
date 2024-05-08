import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function WebDevSimplifyRef() {
  const [name, setName] = useState("");
  const prevValue = useRef("");
  useEffect(() => {
    prevValue.current = name;
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My Name is {name} the previous value is {prevValue.current}
      </div>
    </>
  );
}

export default WebDevSimplifyRef;
