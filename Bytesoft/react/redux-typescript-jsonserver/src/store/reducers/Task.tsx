import data from "../../../data/db.json";
var initialState = { data: data.data };

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case "TASK": {
      state = { data: action.payload };
      return state;
    }
    default:
      return state;
  }
};

export default Task;
