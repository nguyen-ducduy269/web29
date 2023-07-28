const data = JSON.parse(localStorage.getItem("item"));
var initialState = data ? data : [];

const filterTask = (state = initialState, action) => {
  const item = JSON.parse(localStorage.getItem("item"));
  switch (action.type) {
    case "HANDLE_ARRANGE":
      let newItem = [...item];
      newItem = newItem.filter((props) => {
        return props.status.includes(action.value);
      });
      state = newItem;
      return state;
    default:
      return state;
  }
};

export default filterTask;
