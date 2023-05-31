import React from "react";
import { useState } from "react";

export const AddJob = ({ data, setData, setDisplay }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = () => {
    console.log("name", name);
    console.log("status", status);
    setData({
      n: name,
      s: status,
    });
  };

  const closeDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <div className="form">
          <label>Tên: </label>
          <br />
          <input
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
