"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../features/todo/todoSlice";

interface Props {
  selectedItem: any;
  setIsDisplay: (value: boolean) => void;
  setChangeStatus: (value: any) => void;
  changeStatus: any;
}

const AddJob = (props: Props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.todos.data);

  useEffect(() => {
    setName(props.selectedItem?.name || "");
    setStatus(props.selectedItem?.status || "Active");
  }, [props.selectedItem]);

  const handleText = () => {
    if (props.selectedItem != null) {
      const index = tasks.findIndex((t: any) => t.id == props.selectedItem.id);
      const temp = [...tasks];
      temp[index] = { id: props.selectedItem.id, name, status };

      const item = {
        id: props.selectedItem.id,
        item: temp[index],
      };
      dispatch(todoSlice.actions.update(item));
      props.setChangeStatus(!props.changeStatus);
      props.setIsDisplay(false);
    } else if (props.selectedItem == null) {
      if (!name) {
        return;
      } else {
        const item = {
          name,
          status,
        };
        dispatch(todoSlice.actions.add(item));
        setName("");
        setStatus("Active");
        props.setIsDisplay(false);
      }
    }
  };

  const closeForm = () => {
    props.setIsDisplay(false);
    setName("");
    setStatus("Active");
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
                handleText();
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
