import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  ///// useCallback hook

  const passGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLHMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let chars = "!@#$%^&*()_-+={}[]~?";

    //// this code makes sure that password includes at least 1 number and 1 character when selected
    if (numbers) pass += nums.charAt(Math.floor(Math.random() * nums.length));
    if (characters)
      pass += chars.charAt(Math.floor(Math.random() * nums.length));

    //// adding nums and chars to the rest of the options so they all have an equal chance to be in the password
    let restOptions = str;
    if (numbers) restOptions += nums;
    if (characters) restOptions += chars;

    for (let i = pass.length; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * restOptions.length);
      pass += restOptions.charAt(randomIndex);
    }

    ///// this shuffles the passwword so the num and char are not always at the front since we coded it first
    pass = pass
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    //////
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  ////// useEffect hook

  useEffect(() => {
    passGen();
  }, [length, numbers, characters, passGen]);

  /////// useRef hook

  const passRef = useRef(null); //// setting initial reference;

  const copyPassword = useCallback(() => {
    passRef.current?.select(); //// this makes the UI better by showing the user that text is selected
    // passRef.current?.setSelectionRange(0, 3); ///// this can be used if needed (we didn't in this case)
    window.navigator.clipboard.writeText(password); //// this executes the actual copying task
  }, [password]);

  //////

  const generateAgain = () => {
    passGen();
  };

  return (
    <>
      <h1 className="tetx-4xl text-center">Password Generator</h1>
      <div>
        <input
          ref={passRef}
          type="text"
          value={password}
          className="password h-10 rounded-md bg-white p-5 text-zinc-900"
          placeholder="password"
          readOnly
        />
        <button onClick={copyPassword}>Copy</button>
        <button className="m-0" onClick={generateAgain}>
          Generate again
        </button>
      </div>
      <div>
        <input
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
          type="range"
          min={8}
          max={14}
          className="mr-3 mb-4 cursor-pointer"
        />
        <label htmlFor="" className="text-orange-500">
          Length: {length}
        </label>
      </div>
      <label htmlFor="numberInput">
        <input
          onChange={() => {
            setNumbers((prevVal) => !prevVal);
          }}
          defaultChecked={numbers}
          id="numberInput"
          type="checkbox"
          className="mr-1"
        />{" "}
        Numbers
      </label>
      <label htmlFor="characterInput" className="ml-5">
        <input
          onChange={() => {
            setCharacters((prevVal) => !prevVal);
          }}
          defaultChecked={characters}
          id="characterInput"
          type="checkbox"
          className="mr-1"
        />{" "}
        Characters
      </label>
    </>
  );
}
