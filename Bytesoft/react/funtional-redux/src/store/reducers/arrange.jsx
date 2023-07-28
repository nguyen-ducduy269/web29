const arrange = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ARRANGE":
      return true;
    case "CLOSE_ARRANGE":
      return false;
    default:
      return state;
  }
};

export default arrange;
