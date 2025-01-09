import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import BgChanger from "./BgChanger.jsx";

// const randomElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click here to visit google"
// );

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <StrictMode>
    {/* <App /> */}
    <BgChanger />
    {/* 
    {randomElement} */}
  </StrictMode>
);
