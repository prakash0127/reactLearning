// why js extension hooks use to retuen purely js return

// function hello() {
//   return [];
// } this is also a hook

// here we use two hook i.e useEffect and useState
// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   // why we are using "use" because standard value to add in the starting in react to look luike a hook
// }

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
