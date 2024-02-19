import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/Store";
import { filterJobAsync } from "../features/todo/todoSlice";

export const filterJob = () => {
  const tasks = useSelector((state: any) => state.todos.data) || [];
  const dispatch = useDispatch<AppDispatch>();

  const filter = (searchName: string, searchStatus: string) => {
    dispatch(
      filterJobAsync({ ...tasks, name: searchName, status: searchStatus })
    );
  };

  return { filter };
};
