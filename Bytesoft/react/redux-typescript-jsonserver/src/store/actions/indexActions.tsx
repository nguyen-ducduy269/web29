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

export const Task = (data: any) => {
  return {
    type: "TASK",
    payload: data,
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
