import { useEffect, useState } from "react";
import Button from "./components/Button";
import CreateTaskForm from "./components/CreateTaskForm";
import FilterForm from "./components/FilterTaskForm";
import TaskList from "./components/TaskList";
import { createTask } from "./services/todos.service";
import axios from "axios";
import { TodoContext } from "./context/TodoContext";

function App() {
  const [filterValue, setFilterValue] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignored = false;

    const getTasks = async () => {
      try {
        const res = await fetch(
          "https://jsonserver-fhn2.onrender.com/api/todos"
        );

        if (!res.ok) {
          throw new Error("Lỗi tải dữ liệu");
        }

        const data = await res.json();

        if (!ignored) setTasks(data);
      } catch (error) {
        if (!ignored) setError(error);
      } finally {
        if (!ignored) setLoading(false);
      }
    };

    getTasks();

    return () => {
      ignored = true;
    };
  }, []);

  const addTask = async (title) => {
    const newTask = await createTask(title);

    setTasks([...tasks, newTask]);
  };

  const toggle = async (id, completed) => {
    const res = await axios.put(
      `https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
      { completed }
    );

    if (res.status < 400) {
      const index = tasks.findIndex((t) => t.id == id);
      const task = tasks[index];

      task.completed = completed;

      setTasks((prev) => [
        ...prev.slice(0, index),
        task,
        ...prev.slice(index + 1),
      ]);
    }
  };

  const deleteTask = async (id) => {
    const res = await axios.delete(
      `https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
      { tasks }
    );

    if (res.status < 400) {
      if (confirm("Are you sure you want to delete this fucking task?"))
        setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const clear = async () => {
    if (confirm("Are you sure you want to clear tasks?")) {
      setTasks([]);
    }
  };

  const handleFilterValueChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filteredTasks =
    filterValue === "all"
      ? tasks
      : filterValue === "done"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <TodoContext.Provider
      value={{
        addTask,
        filterValue,
        handleFilterValueChange,
        filteredTasks,
        deleteTask,
        toggle,
      }}
    >
      <div className="container">
        <div className="todo-app">
          <h1 className="heading">Todo App</h1>
          

          <CreateTaskForm />

          <FilterForm />

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Lỗi khi tải dữ liệu</div>
          ) : (
            <>
              <TaskList />

              <div className="task-summary">
                <p className="task-summary-count">
                  You have {tasks.length} pending task
                </p>

                <Button onClick={clear} variant="danger">
                  Clear
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
