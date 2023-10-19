import fetchApi from "@/ulti/api";
import { API_URL } from "@/ulti/url";
import { useQuery } from "@tanstack/react-query";

export const url = API_URL.DATA;
export const useGetDataData = () => {
  return useQuery([url], async () => {
    const res = await fetchApi(url);
    return res.json();
  });
};
