/// with API calls and optimization

import { useState } from "react";
import { Inputbox } from "./currencyComponents";
import useCurrencyInfo from "./currencyCustomHooks/useCurrencyInfo";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("cad");
  const [to, setTo] = useState("usd");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo); //// this will fetch all the keys which are currency options in this case

  ////// swap functionality
  const swap = () => {
    setFrom(to); // swap currency
    setTo(from);
    setConvertedAmount(amount); // swap amount
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-screen h-screen flex flex-wrap justify-center items-center backgroung bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7230322/pexels-photo-7230322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5  bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Inputbox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-1">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 text-white px-2 py-1"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Inputbox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
