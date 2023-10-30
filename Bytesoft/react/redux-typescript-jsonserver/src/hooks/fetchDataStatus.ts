import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataStatus = createAsyncThunk(
  "todos/fetchDataStatus",
  async (status: string) => {
    return await fetch(
      `http://localhost:3000/data${status !== "All" ? `?status=${status}` : ""}`
    ).then((res) => res.json());
  }
);
