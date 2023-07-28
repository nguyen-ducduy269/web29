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

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    id,
  };
};

export const showArrng = () => {
  return {
    type: "SHOW_ARRANGE",
  };
};

export const closeArrng = () => {
  return {
    type: "CLOSE_ARRANGE",
  };
};
