import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Task } from "../store/actions/indexActions";

const Status = () => {
  const dispatch = useDispatch();
  const [statusChange, setStatusChange] = useState("All");

  const handleStatus = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    if (statusChange == "All") {
      dispatch(Task(initValue));
    } else {
      let array = [...initValue];
      array = array.filter((arr: any) => {
        return arr.status.toLowerCase().includes(statusChange.toLowerCase());
      });
      dispatch(Task(array));
    }
  };

  return (
    <>
      <td className="status">
        <select
          onChange={(e) => setStatusChange(e.target.value)}
          onClick={handleStatus}
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
