var initialState = "";

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case "TASK": {
      return state;
    }
    default:
      return state;
  }
};

export default Task;
