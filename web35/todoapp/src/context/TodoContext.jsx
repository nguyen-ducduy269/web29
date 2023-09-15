import { createContext, useEffect, useReducer } from "react";
import { createTask, removeTask, toggleTask } from "../services/todos.service";

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      return { ...state, tasks: action.payload, loading: false };
    }
    case "LOAD_DATA_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_TASK": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case "UPDATE_TODO": {
      const newTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload.updateTask;
        }
        return task;
      });

      return { ...state, tasks: newTask };
    }
    case "REMOVE_TODO": {
      const newTask = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );

      return { ...state, tasks: newTask };
    }
    case "CHANGE_FILTER": {
      return { ...state, filterValue: action.payload.filterValue };
    }
  }
};

const initialState = {
  tasks: [],
  loading: true,
  error: null,
  filterValue: "all",
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

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

        if (!ignored) dispatch({ type: "LOAD_DATA_SUCCESS", payload: data });
      } catch (error) {
        if (!ignored) dispatch({ type: "LOAD_DATA_FAIL", payload: error });
      }
    };

    getTasks();

    return () => {
      ignored = true;
    };
  }, []);

  const addTask = async (title) => {
    const newTask = await createTask(title);

    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const toggle = async (task) => {
    const updateTask = await toggleTask(task);

    dispatch({
      type: "UPDATE_TODO",
      payload: { id: updateTask.id, updateTask },
    });
  };

  const deleteTask = async (id) => {
    if (confirm("Xoa?")) {
      await removeTask({ id });

      dispatch({ type: "REMOVE_TODO", payload: { id } });
    }
  };

  const handleFilterValueChange = (filterValue) => {
    dispatch({ type: "CHANGE_FILTER", payload: { filterValue } });
  };

  const filteredTasks =
    state.filterValue === "all"
      ? state.tasks
      : state.filterValue === "done"
      ? state.tasks.filter((task) => task.completed)
      : state.tasks.filter((task) => !task.completed);

  return (
    <TodoContext.Provider
      value={{
        ...state,
        addTask,
        toggle,
        deleteTask,
        handleFilterValueChange,
        filteredTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
