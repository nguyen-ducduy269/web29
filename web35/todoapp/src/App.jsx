import Button from "./components/Button";
import CreateTaskForm from "./components/CreateTaskForm";
import FilterForm from "./components/FilterTaskForm";
import TaskList from "./components/TaskList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <div className="todo-app">
          <h1 className="heading">Todo App</h1>

          <CreateTaskForm />

          <FilterForm />

          <TaskList />

          <div className="task-summary">
            <p className="task-summary-count">You have 0 pending task</p>

            <Button variant="danger">Clear</Button>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
