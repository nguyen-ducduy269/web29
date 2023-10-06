import React, { useState } from "react";
import { useSelector } from "react-redux";

const Status = () => {
  const [indexValue, setIndexValue] = useState(null);
  const status = useSelector((state) => state.todos.filters.status);

  const toggleStatus = (params) => {
    setIndexValue(params);
  };

  return (
    <>
      {status.map((item, index) => {
        return (
          <button
            style={{ padding: "10px", marginBottom: "10px", border: "none" }}
            className={indexValue == index ? "active" : ""}
            onClick={() => toggleStatus(index)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Status;
