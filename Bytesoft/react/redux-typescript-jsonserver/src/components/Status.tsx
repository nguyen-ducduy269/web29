import React from "react";

const Status = () => {
  return (
    <>
      <td className="status">
        <select>
          <option value={"Tất cả"}>Tất cả</option>
          <option value={"Kích hoạt"}>Kích hoạt</option>
          <option value={"Ẩn"}>Ẩn</option>
        </select>
      </td>
    </>
  );
};

export default Status;
