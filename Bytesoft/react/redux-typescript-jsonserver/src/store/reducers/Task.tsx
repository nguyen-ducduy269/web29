import data from "../../../data/db.json";
var initialState = { data: data ? data : [] };

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case "TASK":
      console.log(action);
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default Task;
