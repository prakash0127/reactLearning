import React, { useState } from "react";

function useCounter(initialValue = 0) {
  // will paste our app.js functionality as well as we are now keeping both the
  // and creating a replica of counter function

  // here we are  passing an parameter so our starting value will be 0
  // why we are passng it so we can cutomize our starting value like , 10 ,12 or anthing thing

  // here we set our state hook the initial value so it will start from 0
  const [count, setCount] = useState(initialValue);
  // here our Increment func
  function Increment() {
    setCount(count + 1);
  }
  // here our Decrement func
  function Decrement() {
    setCount(count - 1);
  }
  // and we are returning three values so useCounter can return while calling
  return [count, Increment, Decrement];
}

export default useCounter;
