import isDisplay from "./isDisplay";
import saveTask from "./saveTask";
import deleteTask from "./deleteTask";
import arrange from "./arrange";
import filterTask from "./filterTask";
import handleArrange from "./handleArrange";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  isDisplay,
  saveTask,
  deleteTask,
  arrange,
  filterTask,
  handleArrange,
});

export default myReducers;
