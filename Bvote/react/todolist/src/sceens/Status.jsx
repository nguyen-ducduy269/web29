import React, { useState } from "react";

export const Status = ({ setArray }) => {
  const [stat, setStat] = useState("");
  const work = JSON.parse(localStorage.getItem("item"));

  console.log("work", work);

  const handleStat = (e) => {
    if (e.target.value == "Tất cả") {
      setArray(work);
    } else {
      let newStat = [...work];
      console.log("newStat", newStat);

      const status = stat.toUpperCase();

      newStat = newStat.filter((item) => {
        return item.status.toUpperCase().includes(status);
      });
      setArray(newStat);
    }
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
