import * as types from "./../constants/ActionTypes";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var generateID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

var findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

var myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.SAVE_TASK:
      var newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };
      if (!newTask.id) {
        newTask.id = generateID();
        state.push(newTask);
      } else {
        index = findIndex(state, newTask.id);
        state[index] = newTask;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.DELETE_TASK:
      var id = action.id;
      var index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducers;
