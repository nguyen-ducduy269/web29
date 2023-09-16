import React from "react";
import { useShopping } from "../hooks/useShopping";

const Button = ({ children }) => {
  const addTask = useShopping().addTask;

  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a
          className="btn btn-outline-dark mt-auto"
          href="#"
          onClick={(e) => addTask(e)}
        >
          {children}
        </a>
      </div>
    </div>
  );
};

export default Button;
