import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function AxiosExample() {
  const [userData, setUserData] = useState([]);

  // if we are calling any api we usaually or must use useEffect hook so on app load it render the data
  useEffect(() => {
    // this is how we call axios for get method and after that as we use then() method to call capture our data
    // as we do in the promises
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response);

      // now setting the value to userData
      setUserData(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {/*  mapping our data and calling in a div and rendering on UI  and display our name data */}
        {userData.map((ele, index) => {
          return <div key={index}> {ele.name}</div>;
        })}
      </div>
    </>
  );
}

export default AxiosExample;
