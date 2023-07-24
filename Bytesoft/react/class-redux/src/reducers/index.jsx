import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplay from "./isDisplay";
import itemEditing from "./itemEditing";
const myReducers = combineReducers({
  tasks,
  isDisplay,
  itemEditing,
});

export default myReducers;
