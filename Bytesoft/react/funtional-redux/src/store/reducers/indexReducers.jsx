import isDisplay from "./isDisplay";
import addTask from "./addTask";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  isDisplay,
  addTask,
});

export default myReducers;
