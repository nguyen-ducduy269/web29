import { useEffect, useState } from "react";

const useMyHook = () => {
  const [data, setData] = useState(1);
  useEffect(() => {
    let t = setInterval(() => {
      setData((data) => data + 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);
  return { data };
};

export default useMyHook;
