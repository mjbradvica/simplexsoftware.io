import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/main.scss";

ReactDOM.createRoot(document.querySelector("#root") ?? new Element()).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
