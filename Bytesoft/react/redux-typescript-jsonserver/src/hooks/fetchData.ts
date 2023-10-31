import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async (filter: string) => {
    return await fetch(
      `http://localhost:3000/data${
        filter === "sort" ? "?_sort=name" : "order" ? "?_order=name" : ""
      }`
    ).then((res) => res.json());
  }
);
