import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AddJob = ({ selectedItem, setIsDisplay }: any) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");
  const dp = useDispatch();
  const tasks = useSelector((state: any) => state.Task.data);

  useEffect(() => {
    setName(selectedItem?.name || "");
    setStatus(selectedItem?.status || "Active");
  }, [selectedItem]);

  const closeForm = () => {
    setIsDisplay(false);
    setName("");
    setStatus("Active");
  };

  const handleBtn = () => {
    if (selectedItem) {
      const index = tasks.findIndex((t: any) => t.id == selectedItem.id);
      const temp = [...tasks];
      temp[index] = { id: selectedItem.id, name, status };
      dp({ type: "TASK", payload: temp });

      axios
        .put(`http://localhost:3000/data/${selectedItem.id}`, tasks)
        .then((response) => console.log(response.data))
        .then((error) => console.log(error));
    } else {
      const temp = {
        id: Math.random(),
        name: name,
        status: status,
      };
      tasks.push(temp);
      dp({ type: "TASK", payload: tasks });

      axios
        .post("http://localhost:3000/data", temp)
        .then((response) => console.log("response.data", response.data))
        .then((error) => console.log("error", error));
    }
    setIsDisplay(false);
  };

  return (
    <>
      <div className="left">
        <p className="add">
          {selectedItem ? "Sửa công việc" : "Thêm công việc"}
        </p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Trạng thái: </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Hide">Hide</option>
          </select>

          <div className="button">
            <button
              className="btn_add"
              onClick={(e) => {
                e.preventDefault();
                handleBtn();
              }}
            >
              {selectedItem ? "Sửa" : "Thêm"}
            </button>
            <button className="btn_remove" onClick={() => closeForm()}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
