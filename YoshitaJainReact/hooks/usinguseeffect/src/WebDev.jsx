import React, { useEffect, useState } from "react";

function WebDev() {
  const [items, setItems] = useState([]);
  const [resourceType, setReasourceType] = useState("posts");
  // useEffect hook practicals from webDev simplified
  // the basic things we can use useEffect hooks is print in the console
  // and id we din't pass the dependencies so on every click of any state
  // it render will print in th console
  // if we pass [] menas the dependencies black so it
  // will render only on app load and its called onMount or didMount
  // if we pass any state in dependencies if it will render only on click of the particular state
  //
  useEffect(() => {
    console.log("render");
    // here we just fetching the data from a apiand displaying in console
    // that api is https://jsonplaceholder.typicode.com/todos/1
    // but we can change as well like https://jsonplaceholder.typicode.com/${resourceType}
    // and used the backtick operator so it evaluate as well instead of quotes inside the fetch method
    // to diplay the data on browser  we will set to a state for that we will create a state
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      // .then((json) => console.log(json));
      // instead of we will assign it to setItems
      .then((json) => setItems(json));
  }, [resourceType]);
  // but one thing to see here is if you click contineously on Posts it will render only one time
  // so it will only print the render next time when we changed the resourceType changed
  // and using map we will diplasy all the data
  return (
    <>
      <div>
        <button onClick={() => setReasourceType("posts")}>Posts</button>
        <button onClick={() => setReasourceType("users")}>Users</button>
        <button onClick={() => setReasourceType("comments")}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map((data) => {
        return <pre>{JSON.stringify(data)}</pre>;
      })}
    </>
  );
}

export default WebDev;
