import { useReducer } from "react";

function Couter() {
  // we use it for more complex state management
  // It is an addition hook
  //
  // useReducer:--
  // is a hook used for stae management, alternative of useState() hook, preferale for complex management logic
  //
  // usereducer hook return two values i.e current state and a function dispatch and dispatch func is main thing in it
  // and it accepts two values reducer func and a initial state and the func reducer also accept two values
  // currentState and action and based on two values it return a new State
  //
  // In reducer func has two things currentState and action

  // dipatch gives the instruction to "action" and it accept and do the change

  const initialState = 0; // here we are setting the initial value
  // The reducer receives the current state (currValue) and the action ("Increment").
  const reducer = (currValue, action) => {
    // added a switch case if we call Increment/Decrement function and it will perform accordingly

    //
    // Reducer Execution: The first time the reducer function runs,
    // currValue is 0 (the value of initialState). When actions are dispatched
    // ("Increment" or "Decrement"), the reducer updates the state based on the current state
    // (currValue) and the action.
    //

    switch (action) {
      // It checks the action type using a switch statement.
      // For the "Increment" action, it returns currValue + 1, effectively incrementing the state by 1.
      case "Increment":
        // console.log(currValue);
        return currValue + 1;
      case "Decrement":
        return currValue - 1;
      default:
        return currValue;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        {/* When the component is first rendered, useReducer initializes 
        the count state with the value provided by initialState, which is 0. */}
        <div>Count ={count}</div>
        {/* Added a two button so we can do increment and decrement  */}
        {/*  */}
        {/* When the "Increment" button is clicked, dispatch("Increment") is called.
         This sends the "Increment" action to the reducer. */}

        {/* Summarrised things : When the user clicks the "Increment" button, the onClick event is triggered.
            The arrow function () => dispatch("Increment") gets executed.
            This function calls dispatch with the action "Increment".
            The dispatch function sends this action to the reducer function.
             Same for Decrement button
            */}
        <button onClick={() => dispatch("Increment")}>Increment</button>

        {/* When the "Decrement" button is clicked, dispatch("Decrement") is called. 
        This sends the "Decrement" action to the reducer.
         */}
        <button onClick={() => dispatch("Decrement")}>Decreament</button>
      </div>
    </>
  );
}

export default Couter;
