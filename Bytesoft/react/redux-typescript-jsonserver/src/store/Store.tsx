import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
