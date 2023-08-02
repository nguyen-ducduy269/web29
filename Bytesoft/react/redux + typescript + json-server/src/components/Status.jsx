import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Status = ({ filter, setFilter }) => {
  const [stat, setStat] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <td className="status">
        <select
          value={filter.status}
          onChange={(e) => {
            dispatch({
              type: "FILTER_TABLE",
              payload: e.target.value,
            });
            setFilter({ ...filter, status: e.target.value });
          }}
        >
          <option value={"Tất cả"}>Tất cả</option>
          <option value={"Kích hoạt"}>Kích hoạt</option>
          <option value={"Ẩn"}>Ẩn</option>
        </select>
      </td>
    </>
  );
};
