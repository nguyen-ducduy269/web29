import { useContext } from "react";
import { MyBagContext } from "../context/MyBagContext";

export const useMyBag = () => {
  const context = useContext(MyBagContext);

  return context;
};
