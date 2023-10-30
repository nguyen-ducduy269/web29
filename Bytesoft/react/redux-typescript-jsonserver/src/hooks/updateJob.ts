import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateJob = createAsyncThunk("todos/updateJob", (temp: any) => {
  return axios.put(`http://localhost:3000/data/${temp.id}`, temp.item);
});
