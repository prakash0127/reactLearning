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
    // here we are facing like asynchronous way to make syncronous way like while updating it should update at the same time
    // and will not get any blank array
    setListData((listData) => {
      const updatedData = [...listData, activity];
      console.log(updatedData);

      setActivity(""); //after data fetch we are making it blank our input field this is also worked as wanted
      return updatedData; // returning the updated data instantly and working properly now
    });
  }
  // for remove the particular button
  function removeActivity(i) {
    const updatedListData = listData.filter((ele, id) => {
      return i != id; // checking i is not eaual to id so display the only items
    });
    setListData(updatedListData); // after that we are stting the data to updatedListData and displaying it
  }

  function removeAll() {
    setListData([]);
    // removing our all the data as empty array
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
        <p className="list-heading">Here is your list :{")"}</p>
        {listData != [] &&
          listData.map((data, index) => {
            return (
              <>
                {/* we are just displaying it here a paragraph and added our list inside it */}
                <p key={index}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    {" "}
                    <button onClick={() => removeActivity(index)}>
                      Remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {/* Adding this button so we can remove all our lists items at the same time  
            and with a condition it will appear when our list is more than 1 
        */}
        {listData.length >= 2 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
