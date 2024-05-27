import { buy_book } from "./BookTypes";

const purchase_book = () => {
  return {
    type: buy_book,
  };
};

export default purchase_book;
// and we have recommended way for type, that means we should use a constant for it
