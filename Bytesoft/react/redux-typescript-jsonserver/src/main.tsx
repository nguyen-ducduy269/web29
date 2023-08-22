import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createStore } from "redux";
import myReducers from "./store/reducers/indexReducers.tsx";
import { Provider } from "react-redux";
const store = createStore(
  myReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
