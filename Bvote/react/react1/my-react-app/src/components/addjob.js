import React, { useState } from "react";

function AddJob({ setShowAddJob }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Kích hoạt");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAddClick = () => {
    // Lấy giá trị của name và status để sử dụng ở đây
    console.log(name);
    console.log(status);
  };

  return (
    <div className="left">
      <p className="add">Thêm công việc</p>
      <div className="form">
        <label>Tên: </label>
        <br />
        <input
          className="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <label>Trạng thái: </label>
        <select value={status} onChange={handleStatusChange}>
          <option value="Kích hoạt">Kích hoạt</option>
          <option value="Ẩn">Ẩn</option>
        </select>

        <div className="button">
          <button className="btn_add" onClick={handleAddClick}>
            Thêm
          </button>
          <button className="btn_remove" onClick={() => setShowAddJob(false)}>
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
