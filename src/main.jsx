import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";

const rootEl = document.getElementById("root");

const randomElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click here to visit google"
);

createRoot(rootEl).render(
  <StrictMode>
    {/* <App /> */}

    {randomElement}
  </StrictMode>
);
