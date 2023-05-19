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
    console.log(name);
    console.log(status);

    // tạo thẻ tr và gắn với handleAddClick
    // const tr = React.createElement(
    //   "tr",
    //   null,
    //   React.createElement("td", { className: "stt" }, 1),
    //   React.createElement("td", { className: "name" }, { name }),
    //   React.createElement("td", { className: "status" }, { status }),
    //   React.createElement(
    //     "td",
    //     { className: "activity" },
    //     React.createElement("button", { className: "btn_edit" }, "Sửa"),
    //     React.createElement("button", { className: "btn_remove" }, "Xóa")
    //   )
    // );
    const item = { stt, name, status };

    const tr = (
      <tr>
        <td className="stt">{item.stt}</td>
        <td className="name">{item.name}</td>
        <td className="status">{item.status}</td>
        <td className="activity">
          <button className="btn_edit">Sửa</button>
          <button className="btn_remove">Xóa</button>
        </td>
      </tr>
    );
    const tbody = document.getElementsByTagName("tbody");
    ReactDOM.render(tr, tbody);
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
