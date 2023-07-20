import { combineReducers } from "redux";
import tasks from "./../reducers/tasks";
const myReducers = combineReducers({
  tasks,
});

export default myReducers;
