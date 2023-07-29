const data = JSON.parse(localStorage.getItem("item"));
var initialState = data ? data : [];

var findIndex = (tasks, id) => {
  return tasks.findIndex((t) => t.id == id);
};

const saveTask = (state = initialState, action) => {
  const item = JSON.parse(localStorage.getItem("item"));
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
    case "DELETE_TASK":
      var id = action.payload.id;
      var index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("item", JSON.stringify(state));
      return state;
    case "FILTER_TASK":
      let newItem = [...item];
      if (action.payload != "" && action.payload != null) {
        newItem = newItem.filter((params) => {
          return params.name.toLowerCase().includes(action.payload);
        });
        state = newItem;
      } else if (action.payload == "" || action.payload == null) {
        state = item;
      }
      return state;
    case "HANDLE_ARRANGE":
      let newObject = [...item];
      newObject = newObject.filter((props) => {
        return props.status.includes(action.payload);
      });
      state = newObject;
      return state;
    case "FROM_A_TO_Z":
      let newAction = [...action.payload];
      newAction = newAction.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      state = newAction;
      return state;
    case "FROM_Z_TO_A":
      let newSort = [...action.payload];
      newSort = newSort
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
        .reverse();
      state = newSort;
      return state;
    case "FILTER_TABLE":
      if (action.payload == "Tất cả") {
        state = item;
      } else {
        let newStat = [...item];
        newStat = newStat.filter((item) => {
          return item.status
            .toUpperCase()
            .includes(action.payload.toUpperCase());
        });
        state = newStat;
      }
      return state;
    default:
      return state;
  }
};

export default saveTask;
