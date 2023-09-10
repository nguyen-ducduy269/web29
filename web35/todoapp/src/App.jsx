import { useEffect, useState } from "react";
import Button from "./components/Button";
import CreateTaskForm from "./components/CreateTaskForm";
import FilterForm from "./components/FilterTaskForm";
import TaskList from "./components/TaskList";
import { createTask } from "./services/todos.service";
import axios from "axios";

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

  const toggle = (id) => {
    setTasks(
      tasks.map((task) => {
        const index = tasks.findIndex((t) => t.id == id);
        const temp = [...tasks];

        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        axios.put(
          `"https://jsonserver-fhn2.onrender.com/api/todos"${id}`,
          temp[index]
        );
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this fucking task?"))
      setTasks(tasks.filter((task) => task.id !== id));
  };

  const clear = () => {
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
    <div className="container">
      <div className="todo-app">
        <h1 className="heading">Todo App</h1>

        <CreateTaskForm onSubmit={addTask} />

        <FilterForm
          filterValue={filterValue}
          onFilterValueChange={handleFilterValueChange}
        />

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Lỗi khi tải dữ liệu</div>
        ) : (
          <>
            <TaskList
              tasks={filteredTasks}
              abc={deleteTask}
              onToggle={toggle}
            />

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
  );
}

export default App;
