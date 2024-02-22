import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/Store";
import { fetchData } from "./fetchData";

export const filterJob = () => {
  const tasks = useSelector((state: any) => state.todos.data) || [];
  const dispatch = useDispatch<AppDispatch>();

  const filter = (searchName: string, searchStatus: string) => {
    dispatch(fetchData({ ...tasks, name: searchName, status: searchStatus }));
  };

  return { filter };
};
