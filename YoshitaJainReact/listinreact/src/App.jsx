import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // rendering of list in react?
  // means we usually use to render the api call and display the data accordingly
  // for iterating and retriving the data one by one we use map method to do so for example
  // list-render or say todo list or lists of items

  // suppose we have a list
  const IPL = ["CSK", "MI", "RCB", "CSK"];

  // now we need to list in our ui or render on UI for that we can write simply
  // IPL[0], IPL[1], IPL[2]
  // this is not the right approch the right way is to use map to render it
  // and map function will work

  // we directly write this to the return a we can save it to a variable and call the variable in return
  // Imp-Notes:::: --->  When React tries to render these JSX elements without a parent wrapper,
  // it encounters an error because JSX expressions must have exactly one
  // outermost element. React doesn't allow adjacent JSX elements to be returned without
  // being wrapped in a single parent element.

  // if you will not wrap in tag so output will be [object Object], [object Object], [object Object]

  // now we will see in key in list

  // key should be unique for every element, keys attribute so
  // Keys help React identify which items have changed, are added, or are removed.
  // here we can give key as a index
  // here we have given "ele" and it will work good here because here each and every element is
  // unique but suppose we have CSK two times in the array it can be right then the key "ele" will
  // not be unique for that we can't use it so we can use index and it will work properly and
  // now we will not get warning in the console
  // that how react wll identify and update/remove/add the eleme
  // we will print index as well

  // Imp-Note: if we are using key we need to take care of some point like
  // 1. if we dont have anything in our list to keep the key value unique that time we can use index
  // suppose we have array of object like

  // In this example we can use id as key
  const l1 = [
    { id: 1, name: "Prakash" },
    { id: 2, name: "Gupta" },
  ];

  const objResult = l1.map((ele) => {
    return <h3 key={ele.id}>{ele.name}</h3>;
  });

  // sometime api use to create a uinque key to represent the value or element
  const result = IPL.map((ele, index) => {
    return (
      <h1 key={index}>
        {ele} at index {index}
      </h1>
    );
  });
  return (
    <>
      <h1>Hello World </h1>
      <div>{result}</div>
      <div>{objResult}</div>
    </>
  );
}

export default App;
