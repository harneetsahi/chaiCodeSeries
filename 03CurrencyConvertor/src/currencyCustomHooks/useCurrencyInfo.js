//// hooks are created in js not jsx so the file should be in js

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //// we want to call API whenever a component changes so we use useEffect hook
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
