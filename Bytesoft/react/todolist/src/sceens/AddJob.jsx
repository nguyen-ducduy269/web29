import React, { useEffect } from "react";
import { useState } from "react";

export const AddJob = ({
  array,
  onAdd,
  closeDisplay,
  job,
  setArray,
  setUpdateJob,
  name,
  setName,
  status,
  setStatus,
}) => {
  const updatingJob = () => {
    let indexToUpdate = array.findIndex((item) => item.id === job.id);
    let newArray = [...array];
    newArray[indexToUpdate] = { ...job, name, status };
    setArray(newArray);
    setUpdateJob("");
    closeDisplay();
  };

  const handleSubmit = () => {
    if (!job) {
      onAdd({
        name: name,
        status: status,
      });
      setName("");
      closeDisplay();
    } else {
      updatingJob();
    }
  };

  useEffect(() => {
    if (job) {
      setName(job.name);
      setStatus(job.status);
    } else {
      setName("");
      setStatus("Kích hoạt");
    }
  }, []);

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <div className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input
            id="name"
            className="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Trạng thái: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button className="btn_add" onClick={handleSubmit}>
              Thêm
            </button>
            <button className="btn_remove" onClick={closeDisplay}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
