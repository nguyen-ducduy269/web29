import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Store
import { createStore } from "redux";
import myReducers from "./reducers/index";
import { Provider } from "react-redux";
const store = createStore(myReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
