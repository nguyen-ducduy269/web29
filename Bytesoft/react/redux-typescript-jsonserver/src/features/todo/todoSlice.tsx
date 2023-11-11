import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";

const initialState = {
  isLoading: true,
  data: [{}],
} as todoType;

export interface todoType {
  isLoading: boolean;
  data: [
    {
      id: number;
      name: string;
      status: string;
    }
  ];
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { todoSlice };
