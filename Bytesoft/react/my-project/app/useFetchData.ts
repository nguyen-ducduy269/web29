import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./GolbalRedux/store";
import { fetchData } from "./GolbalRedux/Features/counter/counterSlice";

const useFetchData = () => {
  const { entities } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return { entities };
};

export default useFetchData;
