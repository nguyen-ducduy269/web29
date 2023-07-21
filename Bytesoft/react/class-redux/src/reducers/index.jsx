import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplay from "./isDisplay";
const myReducers = combineReducers({
  tasks,
  isDisplay,
});

export default myReducers;
