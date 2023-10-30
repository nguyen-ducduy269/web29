"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { todoSlice } from "../features/todo/todoSlice";

const Status = () => {
  const dispatch = useDispatch();
  const [statusChange, setStatusChange] = useState("All");

  useEffect(() => {
    handleStatus();
  }, [statusChange]);

  const handleStatus = async () => {
    // dispatch(todoSlice.actions.filterStatus(statusChange));

    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    if (statusChange == "All") {
      dispatch(todoSlice.actions.filter(initValue));
    } else {
      let array = [...initValue];
      array = array.filter((arr: any) => {
        return arr.status.toLowerCase().includes(statusChange.toLowerCase());
      });
      dispatch(todoSlice.actions.filter(array));
    }
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
