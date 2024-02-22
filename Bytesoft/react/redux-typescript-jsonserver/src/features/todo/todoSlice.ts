import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";

const initialState: todoType = {
  isLoading: true,
  data: [],
};

export type TodoItem = {
  id: number;
  name: string;
  status: string;
};

export interface todoType {
  isLoading: boolean;
  data: TodoItem[];
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { todoSlice };
