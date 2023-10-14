import { useQuery } from "@tanstack/react-query";

export const useFetchingData = (url: string) =>
  useQuery(["data", url], async () => {
    const res = await fetch(url);
    return res.json();
  });
