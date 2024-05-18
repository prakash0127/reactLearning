import React, { useState } from "react";

function TodoList() {
  // to make our input actitvity we are making it store our variable inside our state
  const [activity, setActivity] = useState("");
  // here we are creating another list of array so we capture means append the value we entered
  // from the activity state and append in the our list i.e ListData while click on button
  const [listData, setListData] = useState([]);
  function addactivity() {
    // setListData([...listData, activity]);

    // console.log(listData);
    // here we are facing like asynchronous way to make syncronous way
    setListData((listData) => {
      const updatedData = [...listData, activity];
      console.log(updatedData);

      setActivity(""); //after data fetch we are making it blank our input field
      return updatedData; // returning the updated data
    });
  }
  return (
    <>
      <div className="container">
        {/* // created a header */}
        <div className="header">TODO LIST</div>
        {/* now input button  */}
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        {/* // button so on click it will update or add our list  */}
        <button onClick={addactivity}>Add</button>
      </div>
    </>
  );
}

export default TodoList;
