import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextUno from "./context/ContextUno";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextUno>
      <App />
    </ContextUno>
  </React.StrictMode>
);
