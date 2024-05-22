import React, { useState } from "react";

function AgeValidation() {
  const [isValidAge, setIsValidAge] = useState(false);

  // using if else condition but it is not recommended: --
  // if (isValidAge) {
  //   return <div>You can vote</div>;
  // } else {
  //   return <div>You can't vote</div>;
  //   // so here our isValidAge is false so it will display You can't vote on the screen
  //   // and our return stmt is write twice here and that is not good
  //   // no wcommented out all the code
  // }
  //

  // now we will see using variable and store the values and displsy it
  // let age;
  // if (isValidAge) {
  //   age = <div> You can vote </div>;
  // } else {
  //   age = <div> You can't vote </div>;
  // }
  // // now here you are writting only one time return
  // return (
  //   <>
  //     <h2>{age}</h2>
  //   </>
  // );
  // now using ternary operator
  return (
    <>
      {/* {isValidAge ? <div>You can Vote</div> : <div>You can't Vote</div>} */}

      {/*  short circuit way  */}
      {isValidAge && <div> You can vote</div>}
    </>
  );
}

export default AgeValidation;
