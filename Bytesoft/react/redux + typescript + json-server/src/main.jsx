import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { createStore } from "redux";
import myReducers from "./store/reducers/indexReducers";
import { Provider } from "react-redux";
const store = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
