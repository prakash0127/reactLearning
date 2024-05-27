import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction";

function BookContainer() {
  const noOfBooks = useSelector((state) => state.numberOfBooks);

  // and using usedispatct hook and assigning to a varibale
  const dispatch = useDispatch();
  return (
    <>
      <div>Books Comnatiner </div>
      <h2>Our number of Books is - {noOfBooks}</h2>
      {/*  adding a buton so anyone buy a book so it will update the noOf books in our store 
      and added a eventListener to it so while click it will update it  */}
      <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
    </>
  );
}

export default BookContainer;
