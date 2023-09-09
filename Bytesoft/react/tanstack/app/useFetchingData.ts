import { useQuery } from "@tanstack/react-query";

const useFetchingData = () =>
  useQuery(["data"], async () => {
    const res = await fetch("http://localhost:3001/data");
    return res.json();
  });

export default useFetchingData;
