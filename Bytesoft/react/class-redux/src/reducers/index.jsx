import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplay from "./isDisplay";
import itemEditing from "./itemEditing";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";

const myReducers = combineReducers({
  tasks,
  isDisplay,
  itemEditing,
  filterTable,
  search,
  sort,
});

export default myReducers;
