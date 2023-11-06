import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { fetchData } from "./fetchData";
import request from "../ulti/api";
import URL_API from "../ulti/url";

const useJob = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const addJob = async (temp: any) => {
    setLoading(true);
    return request({
      method: "post",
      url: URL_API.DATA,
      data: temp,
    }).then((res) => {
      res.data;
      dispatch(fetchData(""));
    });
  };

  const updateJob = async (temp: any) => {
    setLoading(true);
    return request({
      method: "put",
      url: `${URL_API.DATA}/${temp.id}`,
      data: temp,
    }).then((res) => {
      res.data;
      dispatch(fetchData(""));
    });
  };

  const deleteJob = async (temp: number) => {
    setLoading(true);
    return request({
      method: "delete",
      url: `${URL_API.DATA}/${temp}`,
    }).then((res) => {
      res.data;
      dispatch(fetchData(""));
    });
  };

  const filter = async (name: any) => {
    const name_like = name;

    return await request({
      method: "get",
      url: URL_API.DATA,
      params: {
        name_like,
      },
    }).then((res) => {
      res.data;
      dispatch(fetchData(name));
    });
  };
  return {
    loading,
    addJob,
    updateJob,
    deleteJob,
    filter,
  };
};

export default useJob;
