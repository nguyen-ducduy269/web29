import { createContext, useContext } from "react";

// 1 Tạo context
const AppContext = createContext(
  /* Default value */
  {}
);
const useAppContext = () => useContext(AppContext);
export default AppContext;
