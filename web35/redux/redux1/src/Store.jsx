import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./features/todo/todoSlice";

const store = createStore(todoReducer, composeWithDevTools());

export default store;
