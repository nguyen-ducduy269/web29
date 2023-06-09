import React, { useState } from "react";

export const Status = ({ array, setArray }) => {
  const [stat, setStat] = useState("");

  const handleStat = () => {
    let newStat = [...array];
    console.log("newStat", newStat);

    const status = stat.toUpperCase();

    newStat = newStat.filter((item) => {
      return item.status.toUpperCase().includes(status);
    });
    setArray(newStat);
  };

  return (
    <>
      <td className="status">
        <select onChange={(e) => setStat(e.target.value)} onClick={handleStat}>
          <option>Tất cả</option>
          <option>Kích hoạt</option>
          <option>Ẩn</option>
        </select>
      </td>
    </>
  );
};
