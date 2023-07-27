export const openForm = () => {
  return {
    type: "OPEN_FORM",
  };
};

export const closeForm = () => {
  return {
    type: "CLOSE_FORM",
  };
};

export const saveTask = (data) => {
  return {
    type: "SAVE_TASK",
    payload: data,
  };
};
