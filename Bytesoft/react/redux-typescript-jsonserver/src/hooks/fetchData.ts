import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async (filter: any) => {
    let filterString = "";
    if (filter.name || filter.status) {
      filterString += "?";
    }
    if (filter.name) {
      filterString += `name_like=${filter.name}`;
    }
    if (filter.status) {
      if (filter.name) {
        filterString += "&";
      }
      filterString += `status=${filter.status}`;
    }
    return await fetch(`http://localhost:3000/data${filterString}`).then(
      (res) => res.json()
    );
  }
);
