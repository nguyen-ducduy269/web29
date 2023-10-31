import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { fetchData } from "./fetchData";
import { todoSlice } from "../features/todo/todoSlice";

const useJob = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const addJob = async (temp: any) => {
    setLoading(true);
    return axios.post("http://localhost:3000/data", temp).then(() => {
      setLoading(false);
      dispatch(todoSlice.actions.add(temp));
      dispatch(fetchData(""));
    });
  };

  const updateJob = async (temp: any) => {
    setLoading(true);
    return axios.put(`http://localhost:3000/data/${temp.id}`, temp).then(() => {
      setLoading(false);
      dispatch(fetchData(""));
    });
  };

  const deleteJob = async (temp: number) => {
    setLoading(true);
    return axios.delete(`http://localhost:3000/data/${temp}`).then(() => {
      setLoading(false);
      dispatch(fetchData(""));
    });
  };
  return {
    loading,
    addJob,
    updateJob,
    deleteJob,
  };
};

export default useJob;
