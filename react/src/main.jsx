import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartItemsProvider from "./Context/CartItemsProvider";
import SearchProvider from "./Context/SearchProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartItemsProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CartItemsProvider>
  </React.StrictMode>
);
