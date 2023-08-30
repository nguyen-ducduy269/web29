import { useState } from "react";
import Button from "./components/Button";
import CreateTaskForm from "./components/CreateTaskForm";
import FilterForm from "./components/FilterTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  ///// Thêm công việc
  const addTask = (title) => {
    const task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  ///// Xóa công việc
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAll = () => {
    if (confirm("Xóa?")) {
      setTasks([]);
    }
  };

  const handleFilterValueChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filteredTasks = tasks.filter((task) =>
    filterValue === "all"
      ? true
      : filterValue === "done"
      ? task.completed
      : !task.completed
  );

  const toggleBtn = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="heading">Todo App</h1>

        <CreateTaskForm onSubmit={addTask} />

        <FilterForm
          filterValue={filterValue}
          onFilterValueChange={handleFilterValueChange}
        />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleBtn={toggleBtn}
        />

        <div className="task-summary">
          <p className="task-summary-count">
            You have {tasks.length} pending task
          </p>

          <Button variant="danger" onClick={deleteAll}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
