import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("todos/fetchData", async () => {
  return await fetch("http://localhost:3000/data").then((res) => res.json());
});

const initialState = {
  isLoading: true,
  data: [],
};

export interface todoType {
  id: number;
  name: string;
  status: any;
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      const temp = {
        id: Math.random(),
        name: action.payload.name,
        status: action.payload.status,
      };
      state.data.push(temp);
      axios.post("http://localhost:3000/data", temp);
    },
    update(state, action) {
      console.log(state.data);
      axios.put(
        `http://localhost:3000/data/${action.payload.id}`,
        action.payload.item
      );
    },
    deleteItem(state, action) {
      console.log(state.data);
      axios.delete(`http://localhost:3000/data/${action.payload}`);
    },
    filterName(state, action) {
      state.data = action.payload;
    },
    filterStatus(state, action) {
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
