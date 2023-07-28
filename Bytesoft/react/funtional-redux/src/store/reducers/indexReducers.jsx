import isDisplay from "./isDisplay";
import saveTask from "./saveTask";
import deleteTask from "./deleteTask";
import arrange from "./arrange";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  isDisplay,
  saveTask,
  deleteTask,
  arrange,
});

export default myReducers;
