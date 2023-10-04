const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: false, color: null },
    { id: 1, text: "Learn Java", completed: true, color: "purple" },
  ],
  filters: {
    status: "Active",
    color: ["red", "blue"],
  },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    }

    case "toggle": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo;
        }),
      };
    }
    case "changeColor": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload.id
            ? {
                ...todo,
                color: action.payload.color,
              }
            : todo;
        }),
      };
    }
    case "deleteTask": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id !== action.payload.id;
        }),
      };
    }
    case "markAllTask": {
    }
    case "deleteAllCompleteTask": {
    }
    case "filterState": {
    }
    case "filterColor": {
    }

    default: {
      return state;
    }
  }
}
