import data from "../../../data/db.json";
var initialState = data ? data : [];
import axios from "axios";

var findIndex = (tasks, id) => {
  return tasks.findIndex((t) => t.id == id);
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
        state.data.push(newTask);
        axios
          .post("http://localhost:3000/data", {
            name: action.payload.name,
            status: action.payload.status,
          })
          .then((response) => console.log(response.data))
          .then((error) => console.log(error));
      } else {
        var index = findIndex(state.data, action.payload.id);
        state.data[index] = newTask;
      }
      return state;
    case "DELETE_TASK":
      var id = action.payload;
      var index = findIndex(state.data, id);
      state.data.splice(index, 1);
      axios
        .delete(`http://localhost:3000/data/${id}`)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
      return state;
    case "FILTER_TASK":
      let newItem = [...state.data];
      if (action.payload != "" && action.payload != null) {
        newItem = newItem.filter((params) => {
          return params.name
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
        state.data = newItem;
      } else if (action.payload == "" || action.payload == null) {
        fetch(`http://localhost:3000/data`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            state.data = data;
          });
      }
      return state;
    case "HANDLE_ARRANGE":
      let newObject = [...state.data];
      newObject = newObject.filter((props) => {
        return props.status.includes(action.payload);
      });
      state.data = newObject;
      return state;
    case "FROM_A_TO_Z":
      let newAction = [...action.payload.data];
      newAction = newAction.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      state.data = newAction;
      return state;
    case "FROM_Z_TO_A":
      let newSort = [...action.payload.data];
      newSort = newSort.sort((a, b) => {
        return a.name > b.name ? -1 : 1;
      });
      state.data = newSort;
      return state;
    case "FILTER_TABLE":
      if (action.payload == "Kích hoạt" || action.payload == "Ẩn") {
        let newStat = [...state.data];
        newStat = newStat.filter((item) => {
          return item.status
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
        state.data = newStat;
      } else if (action.payload == "Tất cả") {
        fetch(`http://localhost:3000/data`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            state.data = data;
          });
      }
      return state;
    default:
      return state;
  }
};

export default saveTask;
