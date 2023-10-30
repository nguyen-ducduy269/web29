import { createAsyncThunk } from "@reduxjs/toolkit";

export const sortJob = createAsyncThunk("todos/sortJob", async () => {
  return await fetch("http://localhost:3000/data?_sort=name").then((res) =>
    res.json()
  );
});
