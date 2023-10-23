"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// import components
import { Task } from "../store/actions/indexActions";

interface Props {
  selectedItem: any;
  setIsDisplay: (value: boolean) => void;
}

const AddJob = (props: Props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.Task.data);

  useEffect(() => {
    setName(props.selectedItem?.name || "");
    setStatus(props.selectedItem?.status || "Active");
  }, [props.selectedItem]);

  const closeForm = () => {
    props.setIsDisplay(false);
    setName("");
    setStatus("Active");
  };

  const handleBtn = () => {
    if (props.selectedItem) {
      const index = tasks.findIndex((t: any) => t.id == props.selectedItem.id);
      const temp = [...tasks];
      temp[index] = { id: props.selectedItem.id, name, status };
      dispatch(Task(temp));

      axios
        .put(`http://localhost:3000/data/${props.selectedItem.id}`, temp[index])
        .then((response) => console.log(response.data))
        .then((error) => console.log(error));
    } else {
      const temp = {
        id: Math.random(),
        name: name,
        status: status,
      };
      tasks.push(temp);
      dispatch(Task(tasks));

      axios
        .post("http://localhost:3000/data", temp)
        .then((response) => console.log("response.data", response.data))
        .then((error) => console.log("error", error));
    }
    props.setIsDisplay(false);
  };

  return (
    <>
      <div className="left">
        <p className="add">
          {props.selectedItem ? "Sửa công việc" : "Thêm công việc"}
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
              {props.selectedItem ? "Sửa" : "Thêm"}
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
