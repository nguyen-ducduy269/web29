import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("todos/fetchData", async () => {
  return await fetch("http://localhost:3000/data").then((res) => res.json());
});
