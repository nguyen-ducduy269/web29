import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteItem = createAsyncThunk("todos/deleteItem", (temp: any) => {
  return axios.delete(`http://localhost:3000/data/${temp}`);
});
