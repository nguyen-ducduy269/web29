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

export const toggleTask = async ({ id, title, completed }) => {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    title,
    completed: !completed,
  });

  let response = await fetch(
    `https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();

  return data;
};

export const removeTask = async ({ id }) => {
  let headersList = {
    "Content-Type": "application/json",
  };

  let response = await fetch(
    `https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  return response.ok;
};
