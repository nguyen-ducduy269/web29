import fetchApi from "@/ulti/api";
import { API_URL } from "@/ulti/url";
import { useQuery } from "@tanstack/react-query";

export const url = API_URL.PROJECT;
export const useFetchingDataProject = (type: string) => {
  return useQuery([url, type], async () => {
    const res = await fetchApi(`${url}${type ? `?type=${type}` : ""}`);
    return res.json();
  });
};
