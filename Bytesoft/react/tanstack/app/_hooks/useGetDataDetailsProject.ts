import fetchApi from "@/ulti/api";
import { API_URL } from "@/ulti/url";
import { useQuery } from "@tanstack/react-query";

export const url = API_URL.PROJECT;
export const useGetDataDetailsProject = (id: string) => {
  return useQuery([`${url}?id=${id}`], async () => {
    const res = await fetchApi(`${url}?id=${id}`);
    return res.json();
  });
};
