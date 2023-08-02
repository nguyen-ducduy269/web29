const isDisplay = (state = false, action: { type: any }) => {
  switch (action.type) {
    case "OPEN_FORM":
      return true;
    case "CLOSE_FORM":
      return false;
    default:
      return state;
  }
};

export default isDisplay;
