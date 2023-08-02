import { combineReducers } from "redux";
import isDisplay from "./isDisplay";
import Task from "./Task";
import arrange from "./arrange";

const myReducers = combineReducers({
  isDisplay,
  Task,
  arrange,
});

export default myReducers;
