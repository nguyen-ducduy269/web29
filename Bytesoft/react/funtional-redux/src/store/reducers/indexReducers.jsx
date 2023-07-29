import isDisplay from "./isDisplay";
import saveTask from "./saveTask";
import arrange from "./arrange";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  isDisplay,
  saveTask,
  arrange,
});

export default myReducers;
