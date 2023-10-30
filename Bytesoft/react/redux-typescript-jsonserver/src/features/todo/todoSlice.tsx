import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";
import { fetchDataStatus } from "../../hooks/fetchDataStatus";
import { updateJob } from "../../hooks/updateJob";
import { deleteItem } from "../../hooks/deleteItem";
import { filterName } from "../../hooks/filterName";
import { sortJob } from "../../hooks/sortJob";
import { orderSortJob } from "../../hooks/orderSortJob";
import { addJob } from "../../hooks/addJob";

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

    ///// add
    builder.addCase(addJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addJob.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addJob.rejected, (state) => {
      state.isLoading = false;
    });

    ///// update
    builder.addCase(updateJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateJob.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateJob.rejected, (state) => {
      state.isLoading = false;
    });

    ////// delete
    builder.addCase(deleteItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteItem.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteItem.rejected, (state) => {
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

    ////// sort from A to Z
    builder.addCase(sortJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sortJob.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(sortJob.rejected, (state) => {
      state.isLoading = false;
    });

    ////// sort from Z to A
    builder.addCase(orderSortJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(orderSortJob.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(orderSortJob.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { todoSlice };
