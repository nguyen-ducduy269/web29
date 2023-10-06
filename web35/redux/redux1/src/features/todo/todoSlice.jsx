import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    { id: 0, text: "Learn React", completed: false, color: null },
    { id: 1, text: "Learn Java", completed: true, color: "Purple" },
  ],
  filters: {
    status: ["All", "Active", "Complete"],
    color: ["Green", "Blue", "Orange", "Purple", "Red"],
  },
};

// export default function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case "todos/added": {
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now(),
//             text: action.payload,
//             completed: false,
//           },
//         ],
//       };
//     }

//     case "todos/toggle": {
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           todo.id === action.payload
//             ? {
//                 ...todo,
//                 completed: !todo.completed,
//               }
//             : todo;
//         }),
//       };
//     }

//     case "todos/change-color": {
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           todo.id === action.payload
//             ? {
//                 ...todo,
//                 color: action.payload.color,
//               }
//             : todo;
//         }),
//       };
//     }

//     case "deleteTask": {
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           todo.id !== action.payload;
//         }),
//       };
//     }
//     case "markAllTask": {
//     }
//     case "deleteAllCompleteTask": {
//     }
//     case "filterState": {
//     }
//     case "filterColor": {
//     }

//     default: {
//       return state;
//     }
//   }
// }

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      ///// hoặc là sửa trạng thái
      ///// hoặc là trả về trạng thái mới
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggle(state, action) {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[index].completed === action.payload.completed;
    },

    delete(state, action) {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },

    changeColor(state, action) {
      state.items.color === action.payload;
    },

    filterStatus(state, action) {
      state.filters.status = action.payload;
    },

    filterColor(state, action) {
      state.filters.color = action.payload;
    },
  },
});

export { todoSlice };
