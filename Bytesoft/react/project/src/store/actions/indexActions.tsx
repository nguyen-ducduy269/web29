export const Task = (data: String) => {
  return {
    type: "TASK",
    payload: data,
  };
};
