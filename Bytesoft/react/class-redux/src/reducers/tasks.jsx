import * as types from "./../constants/ActionTypes";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var generateID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

var findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

var myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.SAVE_TASK:
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      var newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };
      if (!newTask.id) {
        newTask.id = generateID();
        state.push(newTask);
      } else {
        var id = action.task.id;
        // console.log(id);
        var index = findIndex(state, id);
        // state.splice(index, 1);

        const products = {
          id: action.task.id,
          name: action.task.name,
          status: action.task.status,
        };
        // console.log("products", products);
        // console.log("index", index);

        tasks.splice(index, 1, products);
        console.log("New task", tasks);
        // console.log(typeof state);
        // console.log(typeof tasks);
        // state = Array(state);
        // tasks = Array(tasks);
        // state.push(tasks);
        var newTask = [...tasks];
        console.log(newTask.splice(0, 1, products));
      }

      // const array = [];
      // const otherTask = [...tasks];
      // tasks.filter((task) => {
      //   var newTask = {
      //     id: action.task.id,
      //     name: action.task.name,
      //     status: action.task.status,
      //   };
      //   if (!newTask.id) {
      //     newTask.id = generateID();
      //     state.push(newTask);
      //   } else {
      //     if (newTask.id != task.id) {
      //       array.push(task);
      //       console.log(array);
      //     } else if (newTask.id == task.id) {
      //       // console.log(task);
      //       var id = task.id;
      //       var index = findIndex(state, id);
      //       // state.splice(index, 1);
      //       const products = {
      //         id: action.task.id,
      //         name: action.task.name,
      //         status: action.task.status,
      //       };
      //       // console.log("products", products);
      //       // console.log("index", index);

      //       otherTask.splice(index, 1, products);
      //       otherTask.concat(array);
      //       console.log(otherTask);
      //       state.push(otherTask);
      //     }
      //   }
      // });

      // var newTask = {
      //   id: generateID(),
      //   name: action.task.name,
      //   status: action.task.status,
      // };
      // state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.DELETE_TASK:
      var id = action.id;
      var index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducers;
