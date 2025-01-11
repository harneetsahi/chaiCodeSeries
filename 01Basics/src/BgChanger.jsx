import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("  ");

  /// one way to change color is this: pass a function with a handler and execute it here
  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <div
        className="w-screen h-screen p-20 font-semibold font-mono"
        style={{ backgroundColor: color }}
      >
        color changer
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <button
            className="bg-green-800"
            ///// second way to change color is to call setColor directly here
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-pink-400"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="bg-orange-700"
            onClick={() => {
              changeColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="bg-purple-600"
            onClick={() => {
              changeColor("purple");
            }}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  );
}
