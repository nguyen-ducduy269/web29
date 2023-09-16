import { useContext } from "react";
import { ShoppingContext } from "../shopping-context/Shopping-Context";

export const useShopping = () => {
  const context = useContext(ShoppingContext);

  return { ...context };
};
