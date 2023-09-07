"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch("http://localhost:3001/data");
    const data = await response.json();
    return data;
  }
);

const initialState: { entities: Record<string, any> } = {
  entities: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchData.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export default counterSlice.reducer;
