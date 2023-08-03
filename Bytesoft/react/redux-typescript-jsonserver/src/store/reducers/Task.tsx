import data from "../../../data/db.json";
var initialState = { data };

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case "TASK":
      console.log("action", action);
      console.log("state", state.data.data);
      return state;
    default:
      return state;
  }
};

export default Task;
