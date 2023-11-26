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

  const filter = async ({ name, status }: any) => {
    dispatch(fetchData({ name, status }));
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
