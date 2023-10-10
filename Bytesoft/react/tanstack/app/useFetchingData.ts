import { useQuery } from "@tanstack/react-query";

export const useFetchingData = () =>
  useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/data");
      return res.json();
    },
  });

export const useFetchingProjectData = () =>
  useQuery(["project"], async () => {
    const res = await fetch("http://localhost:4000/project");
    return res.json();
  });
