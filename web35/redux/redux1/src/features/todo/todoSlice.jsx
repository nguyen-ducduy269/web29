const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: false, color: null },
    { id: 1, text: "Learn Java", completed: true, color: "purple" },
  ],
  filters: {
    status: ["All", "Active", "Complete"],
    color: ["Green", "Blue", "Orange", "Purple", "Red"],
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
            text: action.payload,
            completed: false,
          },
        ],
      };
    }

    case "todos/toggle": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo;
        }),
      };
    }

    case "todos/change-color": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload
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
          todo.id !== action.payload;
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
