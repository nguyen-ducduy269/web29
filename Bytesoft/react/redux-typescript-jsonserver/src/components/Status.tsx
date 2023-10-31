"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";

//// import hooks
import { fetchDataStatus } from "../hooks/fetchDataStatus";

const Status = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [statusChange, setStatusChange] = useState<string>("All");

  useEffect(() => {
    handleStatus();
  }, [statusChange]);

  const handleStatus = async () => {
    dispatch(fetchDataStatus(statusChange));
  };

  return (
    <>
      <td className="status">
        <select
          onChange={(e) => {
            setStatusChange(e.target.value);
          }}
        >
          <option value={"All"}>All</option>
          <option value={"Active"}>Active</option>
          <option value={"Hide"}>Hide</option>
        </select>
      </td>
    </>
  );
};

export default Status;
