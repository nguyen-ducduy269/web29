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

export const filterTask = (filter) => {
  return {
    type: "FILTER_TASK",
    filter,
  };
};

export const handleArrange = (value) => {
  return {
    type: "HANDLE_ARRANGE",
    value,
  };
};

export const sortFromAToZ = (value) => {
  return {
    type: "FROM_A_TO_Z",
    value,
  };
};

export const sortFromZToA = (value) => {
  return {
    type: "FROM_Z_TO_A",
    value,
  };
};

export const filterTable = (filter) => {
  return {
    type: "FILTER_TABLE",
    filter,
  };
};
