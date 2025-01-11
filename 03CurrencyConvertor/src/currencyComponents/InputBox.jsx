import { useState, useId } from "react";

function Inputbox({
  label,
  amount,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "cad",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); //// this will create unique IDs for accessbility

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 inline-block mb-2 text-left w-full"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="bg-transparent w-full outline-none py-1.5 text-black "
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            step="any" //// this attribute fixed a strange error the code was throwing upon testing, where when i swapped the currency, it wouln't let me enter a value and would say 'please enter a valid number. The valid numbers are ## and ##

            //// '&&' in onChange is done to prevent crashing in case amount is not passed in. So this syntax checks if onAmountChange is available and then calls it.
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 w-full mb-2">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer text-black"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default Inputbox;
