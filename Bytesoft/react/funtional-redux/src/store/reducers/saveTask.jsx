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

const saveTask = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TASK":
      var newTask = {
        id: action.payload.id,
        name: action.payload.name,
        status: action.payload.status,
      };
      if (!action.payload.id) {
        newTask.id = Math.random();
        state.push(newTask);
      } else {
        var index = findIndex(state, action.payload.id);
        state[index] = newTask;
      }
      localStorage.setItem("item", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default saveTask;
