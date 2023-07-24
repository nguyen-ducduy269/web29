import * as types from "../constants/ActionTypes";

var initialState = {};

var findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

var myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      console.log(action);
      var tasks = state;
      var id = action.id;
      var index = findIndex(tasks, id);
      var taskEditing = tasks[index];

      this.setState({
        taskEditing: taskEditing,
      });
      return !state;
    default:
      return state;
  }
};

export default myReducers;
