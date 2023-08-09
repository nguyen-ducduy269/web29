import { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../../data/db.json";
const initValue = data.data;

const Status = () => {
  const dispatch = useDispatch();
  const [statusChange, setStatusChange] = useState("Tất cả");

  const handleStatus = () => {
    if (statusChange == "Tất cả") {
      dispatch({ type: "TASK", payload: initValue });
    } else {
      let array = [...initValue];
      array = array.filter((arr: any) => {
        return arr.status.toLowerCase().includes(statusChange.toLowerCase());
      });
      // console.log("array", array);
      dispatch({ type: "TASK", payload: array });
    }
  };

  return (
    <>
      <td className="status">
        <select
          onChange={(e) => setStatusChange(e.target.value)}
          onClick={handleStatus}
        >
          <option value={"Tất cả"}>Tất cả</option>
          <option value={"Kích hoạt"}>Kích hoạt</option>
          <option value={"Ẩn"}>Ẩn</option>
        </select>
      </td>
    </>
  );
};

export default Status;
