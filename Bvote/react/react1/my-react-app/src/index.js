import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Hobby = () => {
  return (
    <>
      <h1 className="header">Quản lý công việc</h1>
      <div className="container">
        <div className="left-job">
          <p className="add">Thêm công việc</p>

          <div className="form">
            <label>Tên: </label>
            <br></br>
            <input className="name" type="text"></input>
            <br></br>
            <label>Trạng thái: </label>
            <select>
              <option>Kích hoạt</option>
              <option>Ẩn</option>
            </select>

            <div className="button">
              <button className="btn_add">Thêm</button>
              <button className="btn_remove">Hủy bỏ</button>
            </div>
          </div>
        </div>

        <div className="right-job">
          <button>Thêm công việc</button>
          <div className="more">
            <input
              className="main-input"
              type="text"
              placeholder="Nhập từ khóa..."
            ></input>
            <button>Tìm</button>
            <button className="reduce">Sắp xếp</button>
          </div>

          <table>
            <thead>
              <tr>
                <td className="stt">STT</td>
                <td className="name">Tên</td>
                <td className="status">Trạng thái</td>
                <td className="activity">Hành động</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="stt"></td>
                <td className="name">
                  <input className="add-input" type="text"></input>
                </td>
                <td className="status">
                  <select>
                    <option>Tất cả</option>
                    <option>Kích hoạt</option>
                    <option>Ẩn</option>
                  </select>
                </td>
                <td className="activity"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hobby />);
