import axios from "axios";
import React, { useState } from "react";

function AxiosPost() {
  // mainly post method we used as we need to update our db or send a data to db
  // the best way is to take the data from a form and send to server or db

  // will create a form to take the input from user and save the data

  // will create a object to store the data
  const data = { fname: "", lname: "" }; // and keeping it blank so we will add the data to it
  // creating a state to store the data and diplay on UI or send to db or server amd set the initial value as data variable
  const [inputData, setInputData] = useState(data);

  // function for event listener

  function handleData(e) {
    // here creating a copy so it will not delete/ override the previous values
    // and setting th name from form-input to the value of the input
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  // adding a function so while submit the button it do a api call and send the data
  function handleSubmit(e) {
    // first we prevent the default
    e.preventDefault();
    // now we will use axios with post and will use the same api to post it
    // using the same api that we use in Get method
    // here additional we can seea another parameter i.e inputData, i.e the data we need to send to the Api
    //
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
    // here we are setting after submit button click cleaning the fname and lname from the input
    setInputData({ ...inputData, fname: "", lname: "" });
  }

  // update functionality

  function handleUpdate(e) {
    e.preventDefault();
    // we are updating so we need to use put method to do that
    // and we change our api to /user/1 as per the jsonplaceholder for put method you can see in routes on the websites
    // and again the second parament is for for taking the data for update here
    // and in console we can see that we have updated in the data
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((response) => {
        console.log(response);
      });
  }

  function handleDelete(e) {
    e.preventDefault();
    // same procees but we are deleteing so used delete key and same axios with delete method
    // and here we dont need second paramenter because we are not submitting anything things to db
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <h3>Axios Post</h3>
      <div>
        <label> First Name :</label>
        {/* added a name firstname andvalue to set to data.fname and onChange event listener */}
        <input
          type="text"
          name="fname"
          value={inputData.fname}
          onChange={handleData}
        />{" "}
        <br></br>
        <label> Last Name :</label>
        <input
          type="text"
          name="lname"
          value={inputData.lname}
          onChange={handleData}
        />{" "}
        <br />
        {/* will add a button so on submit on button it will accept the values and for that we need a function to 
         handle the submit 
        */}
        <button onClick={handleSubmit}>Submit</button>
        {/* adding a update button to update the data  */}
        <button onClick={handleUpdate}>Update</button>
        {/* button we have added for delete  
        it will delete all the data from the api 
        */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default AxiosPost;
