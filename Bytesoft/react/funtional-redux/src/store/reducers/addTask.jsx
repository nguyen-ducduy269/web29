const data = JSON.parse(localStorage.getItem("item"));
var initialState = data ? data : [];

const addTask = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      //   var newTask = {
      //     id: Math.random(),
      //     name: action.task.name,
      //     status: action.task.status,
      //   };
      //   state.push(newTask);
      //   localStorage.setItem("tasks", JSON.stringify(state));
      //   return [...state];
      return state;
    default:
      return state;
  }
};

export default addTask;
