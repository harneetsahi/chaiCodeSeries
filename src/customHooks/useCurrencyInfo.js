//// hooks are created in js not jsx so the file should be in js

import { stat } from "graceful-fs";
import { use } from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //// we want to call API whenever a component changes so we use useEffect hook
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
