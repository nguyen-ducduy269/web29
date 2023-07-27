import isDisplay from "./isDisplay";
import saveTask from "./saveTask";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  isDisplay,
  saveTask,
});

export default myReducers;
