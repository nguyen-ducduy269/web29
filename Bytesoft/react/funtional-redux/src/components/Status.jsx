import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Status = () => {
  const [stat, setStat] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <td className="status">
        <select
          onChange={(e) => setStat(e.target.value)}
          onClick={(e) =>
            dispatch({ type: "FILTER_TABLE", payload: e.target.value })
          }
        >
          <option value={"Tất cả"}>Tất cả</option>
          <option value={"Kích hoạt"}>Kích hoạt</option>
          <option value={"Ẩn"}>Ẩn</option>
        </select>
      </td>
    </>
  );
};
