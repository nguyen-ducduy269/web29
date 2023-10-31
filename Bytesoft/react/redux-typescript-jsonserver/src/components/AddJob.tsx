"use client";
import { useState, useEffect } from "react";

///// import hooks
import useJob from "../hooks/Job";

interface Props {
  selectedItem: any;
  setIsDisplay: (value: boolean) => void;
}

const AddJob = (props: Props) => {
  const { addJob, updateJob } = useJob();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    setName(props.selectedItem?.name || "");
    setStatus(props.selectedItem?.status || "Active");
  }, [props.selectedItem]);

  const handleSubmit = async () => {
    const item = {
      name,
      status,
    };

    if (!name) {
      console.log("name hoặc status không đc trống");
      return;
    }

    if (props.selectedItem?.id) {
      const newItem = {
        id: props.selectedItem.id,
        name,
        status,
      };

      try {
        await updateJob(newItem);
      } catch (error) {}
      props.setIsDisplay(false);
    } else {
      try {
        await addJob(item);
      } catch (error) {}

      setName("");
      setStatus("Active");
      props.setIsDisplay(false);
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
                handleSubmit();
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
