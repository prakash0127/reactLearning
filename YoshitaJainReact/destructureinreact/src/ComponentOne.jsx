import React from "react";

function ComponentOne({ firstName, lastName }) {
  // accessing the props in ComponentOne we need to receive it
  // to destructure one way is
  // function ComponentOne(props)
  // const { firstName, lastName } = props; // props is not an array , its an object in react

  // we can directly receive in the params of ComponetOne like above
  // function ComponentOne({ firstName, lastName })
  return (
    <>
      <div>
        <h2>Componet One </h2>
        {firstName} {lastName}
        {/*  now we can do it like that  */}
      </div>
    </>
  );
}

export default ComponentOne;
