import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@radix-ui/themes/styles.css";
import store from "./Redux/Store.jsx";
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

