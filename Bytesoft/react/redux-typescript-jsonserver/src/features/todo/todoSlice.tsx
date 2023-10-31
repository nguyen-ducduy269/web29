import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";
import { fetchDataStatus } from "../../hooks/fetchDataStatus";
import { filterName } from "../../hooks/filterName";

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
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },

    filter(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    //// render data
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

    //// filter status
    builder.addCase(fetchDataStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDataStatus.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchDataStatus.rejected, (state) => {
      state.isLoading = false;
    });

    ////// filter name
    builder.addCase(filterName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterName.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(filterName.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { todoSlice };
