import React from "react";
import ReactDOM from "react-dom/client"; // ❗ React 18 방식
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ❗ 중요
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
