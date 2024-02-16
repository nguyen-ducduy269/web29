import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";
import { AppDispatch } from "../../store/Store";

const initialState: todoType = {
  isLoading: true,
  data: [],
};

export type TodoItem = {
  id: number;
  name: string;
  status: string;
};

export interface todoType {
  isLoading: boolean;
  data: TodoItem[];
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
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

export const { setData } = todoSlice.actions;

export const filterJobAsync =
  (filter: any) => async (dispatch: AppDispatch) => {
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
    const res = await fetch(`http://localhost:3000/data${filterString}`).then(
      (res) => res.json()
    );

    dispatch(setData(res));
  };

export const sortJobAsync = (sort: any) => async (dispatch: AppDispatch) => {
  dispatch(setData(sort));
};

export { todoSlice };
