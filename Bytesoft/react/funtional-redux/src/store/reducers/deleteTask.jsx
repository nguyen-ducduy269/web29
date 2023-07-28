const data = JSON.parse(localStorage.getItem("item"));
var initialState = data ? data : [];

var findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const deleteTask = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      var id = action.id;
      var index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("item", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default deleteTask;
