const data = JSON.parse(localStorage.getItem("item"));
var initialState = data ? data : [];

const filterTask = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_TASK":
      const item = JSON.parse(localStorage.getItem("item"));
      if (action.filter != "" && action.filter != null) {
        let newItem = [...item];
        newItem = newItem.filter((params) => {
          return params.name.toLowerCase().includes(action.filter);
        });
        state = newItem;
      } else if (action.filter == "" || action.filter == null) {
        state = item;
      }
      return state;
    default:
      return state;
  }
};

export default filterTask;
