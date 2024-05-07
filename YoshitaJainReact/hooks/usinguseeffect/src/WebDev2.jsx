import React, { useEffect, useState } from "react";

function WebDev2() {
  // will try some complex things in useEffect hooks
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // we will pass in a useEffect so it will only happen on it
  // now when we resize our browser we can see the value is changing here
  //created a function
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // but luckly we can do the clean up as well
    // but you know when you add event listener and you delet the app componet
    // and want to remove event listener because otherwise it will make our app slow because
    // it will always hooked up and constantaly added but never actually remove
    //
    return () => {
      window.removeEventListener("resize", handleResize);
      // now whenevn our app unmounted this return will remove our handleResize
    };
  }, [windowWidth]);
  //
  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}

export default WebDev2;
