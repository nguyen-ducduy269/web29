import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addJob = createAsyncThunk("todos/addJob", (temp: any) => {
  return axios.post("http://localhost:3000/data", temp);
});
