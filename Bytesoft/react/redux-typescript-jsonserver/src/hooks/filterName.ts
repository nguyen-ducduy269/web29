import { createAsyncThunk } from "@reduxjs/toolkit";

export const filterName = createAsyncThunk(
  "todos/filterName",
  async (name: string) => {
    return await fetch(
      `http://localhost:3000/data${name ? `?name_like=${name}` : ""}`
    ).then((res) => res.json());
  }
);
