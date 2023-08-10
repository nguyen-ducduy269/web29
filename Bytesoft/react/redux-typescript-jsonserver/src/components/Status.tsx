import { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../../data/db.json";
const initValue = data.data;

const Status = () => {
  const dispatch = useDispatch();
  const [statusChange, setStatusChange] = useState("All");

  const handleStatus = () => {
    if (statusChange == "All") {
      dispatch({ type: "TASK", payload: initValue });
    } else {
      let array = [...initValue];
      array = array.filter((arr: any) => {
        return arr.status.toLowerCase().includes(statusChange.toLowerCase());
      });
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
          <option value={"All"}>Tất cả</option>
          <option value={"Active"}>Kích hoạt</option>
          <option value={"Hide"}>Ẩn</option>
        </select>
      </td>
    </>
  );
};

export default Status;
