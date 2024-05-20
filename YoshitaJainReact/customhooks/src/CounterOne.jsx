import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
  // here we are calling our useCounter custom hooks with accepting three values and
  //  here we are making starting value is 10
  // as we have defined initial vcalue as 0 so if we not pass anyhthig it will take as 0
  const [count, Increment, Decrement] = useCounter(10);

  return (
    <>
      <div>
        <h2>
          In CounterOne Componet, Our Count value is {count} and stating is 10{" "}
        </h2>
      </div>
      {/* need the button as well so  amd onclick calling our increment function */}
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}

export default CounterOne;
