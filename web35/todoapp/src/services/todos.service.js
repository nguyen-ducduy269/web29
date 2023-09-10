export const createTask = async (title) => {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    title,
    completed: false,
  });

  let response = await fetch("https://jsonserver-fhn2.onrender.com/api/todos", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data;
};
