import { createAsyncThunk } from "@reduxjs/toolkit";

export const orderSortJob = createAsyncThunk("todos/orderSortJob", async () => {
  return await fetch("http://localhost:3000/data?_order=name").then((res) =>
    res.json()
  );
});
