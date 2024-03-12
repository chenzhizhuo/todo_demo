import React from "react";
import ReactDOM from "react-dom/client";
import "./style/tailwind.css";
import "./index.css";
import "./style/base.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
