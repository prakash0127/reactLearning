import { useState } from "react";

import "./App.css";

function App() {
  // created a state and initial we have added a empty value to it
  const [items, setItems] = useState([]);

  // here we'll use map method to iterate our array and and display our items

  // in the return we have added a ordered list and inside it we have use map method and every iterate
  // we are adding a li to the ol, items we need to iterate so items.map((item)=> <li> item.value</li>)
  // here value we have an property in our array and will see or create and
  // on the click of button we will add into ol so created a button and attach a onclick fn
  // will adda key prop in our map method to make it unique
  // addded a function so on click of the button item will add to our ui
  function addItems() {
    // here we use spread operator so our value will not overidden so first we create a copy of our array
    // and then we will change or add it like (...items)

    // remember we need to pass in setItem inside an array because we are going to display the array

    // now we have changed the value like a random value between 1 to 20

    // why we need spread operator, if we remove the spread operator first it will create a value
    // but next time it will override the previous value so that why we need it
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.round(Math.random() * 20) + 1,
      },
    ]);
  }
  return (
    <>
      <div className="app">
        <ol>
          {items.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ol>
        <button onClick={addItems}>Add Items</button>
      </div>
    </>
  );
}

export default App;
