import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { fetchData } from "./fetchData";
import request from "../ulti/api";
import URL_API from "../ulti/url";
import { todoSlice } from "../features/todo/todoSlice";

const useJob = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [newData, setNewData]: any = useState([]);
  const { setData } = todoSlice.actions;

  const renderData = async () => {
    const res = await fetch(`http://localhost:3000/data?_sort=name`).then(
      (res) => res.json()
    );
    setNewData(res);
  };

  useEffect(() => {
    renderData();
  }, []);

  const addJob = async (temp: any) => {
    setLoading(true);
    return request({
      method: "post",
      url: URL_API.DATA,
      data: temp,
    }).then(() => {
      dispatch(fetchData(""));
    });
  };

  const updateJob = async (temp: any) => {
    setLoading(true);
    return request({
      method: "put",
      url: `${URL_API.DATA}/${temp.id}`,
      data: temp,
    }).then(() => {
      dispatch(fetchData(""));
    });
  };

  const deleteJob = async (temp: number) => {
    setLoading(true);
    return request({
      method: "delete",
      url: `${URL_API.DATA}/${temp}`,
    }).then(() => {
      dispatch(fetchData(""));
    });
  };

  const fromAToZ = async () => {
    dispatch(setData(newData));
  };

  const fromZToA = async () => {
    dispatch(setData(newData.reverse()));
  };

  return {
    loading,
    addJob,
    updateJob,
    deleteJob,
    fromAToZ,
    fromZToA,
  };
};

export default useJob;
