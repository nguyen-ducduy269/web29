import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../ulti/api";
import URL_API from "../ulti/url";

export const filterName = createAsyncThunk(
  "todos/filterName",
  async (name: string) => {
    const name_like = name;
    return await request({
      method: "get",
      url: URL_API.DATA,
      params: {
        name_like,
      },
    }).then((res) => {
      return res.data;
    });
  }
);
