import data from "../../../data/db.json";
var initialState = { data: data.data };

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case "TASK": {
      // console.log("state", state.data.data); // console.log("action", action.payload);
      // console.log("zzzzzz", action);
      state = { data: action.payload };
      return state;
    }
    default:
      return state;
  }
};

export default Task;
