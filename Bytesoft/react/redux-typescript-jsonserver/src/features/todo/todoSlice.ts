import { createSlice } from "@reduxjs/toolkit";

///// import hooks
import { fetchData } from "../../hooks/fetchData";

const initialState = {
  isLoading: true,
  data: [{}],
  filter: {
    name: "",
    status: "",
  },
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
  filter: {
    name: string;
    status: string;
  };
}

const filterJob = async (filter: any) => {
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
  return await fetch(`http://localhost:3000/data${filterString}`).then((res) =>
    res.json()
  );
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
      const filterValue = filterJob(action.payload);
      console.log(filterValue);
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

export { todoSlice };
