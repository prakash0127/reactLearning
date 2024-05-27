import { buy_book } from "./BookTypes";

const initialState = {
  numberOfBooks: 20,
};

// creating our reducer function
const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_book:
      return {
        // here craeting a copy of state so it won't override the state just update it
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
        // and decreasing the value because if we will buy any book
        // the no of books will decrease by 1
      };
    default:
      return state;
  }
};

export default BookReducer;
