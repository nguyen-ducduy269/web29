"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../features/todo/todoSlice";
import { AppDispatch } from "../store/Store";

const Status = () => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filterValue = useSelector((state: any) => state.todos.filter);

  useEffect(() => {
    dispatch(todoSlice.actions.filter({ ...filterValue, status: status }));
  }, [status]);

  return (
    <>
      <td className="status">
        <select onClick={(e: any) => setStatus(e.target.value)}>
          <option value={""}>All</option>
          <option value={"Active"}>Active</option>
          <option value={"Hide"}>Hide</option>
        </select>
      </td>
    </>
  );
};

export default Status;
