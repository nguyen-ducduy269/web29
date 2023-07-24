import * as types from "../constants/ActionTypes";

var initialState = {};

var myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      // const tasks = JSON.parse(localStorage.getItem("tasks"));
      // console.log("tasks", tasks);
      // tasks.filter((task) => {
      //   if (task.id == action.task.id) {
      //     console.log("action.task", action.task);
      //     console.log("action.task.id", action.task.id);

      //     var products = {
      //       id: action.task.id,
      //       name: action.task.name,
      //       status: action.task.status,
      //     };
      //     console.log("products", products);

      //     this.setState({
      //       id: action.task.id,
      //       name: action.task.name,
      //       status: action.task.status,
      //     });
      //   }
      // });
      return action.task;
    default:
      return state;
  }
};

export default myReducers;
