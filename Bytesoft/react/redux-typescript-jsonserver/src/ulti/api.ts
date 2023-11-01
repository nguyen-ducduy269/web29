import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3000",
});

const request = ({
  method,
  url,
  data,
  params,
}: {
  method: string;
  url: string;
  data?: any;
  params?: any;
}) => {
  return axiosConfig({
    method,
    url,
    data,
    params,
  });
};

export default request;
