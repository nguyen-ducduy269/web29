import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <h1 className="header">Quản lý công việc</h1>
      <div className="container">
        <div className="left-job">
          <div className="left">
            <p className="add">Thêm công việc</p>
            <div className="form">
              <label>Tên: </label>
              <br />
              <input className="name" type="text" />
              <br />

              <label>Trạng thái: </label>
              <select>
                <option value="Kích hoạt">Kích hoạt</option>
                <option value="Ẩn">Ẩn</option>
              </select>

              <div className="button">
                <AddButton>Thêm</AddButton>
                <button className="btn_remove">Hủy bỏ</button>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="right-job">
          <button className="add-job">Thêm công việc</button>
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

              <tr>
                <td className="stt">1</td>
                <td className="name">duy</td>
                <td className="status">
                  <p className="status-active">Kích hoạt</p>
                </td>
                <td className="activity button">
                  <button className="btn_edit">Sửa</button>
                  <button className="btn_remove">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

const AddButton = styled.button`
  width: 70px;
  height: 30px;
  text-align: center;
  background-color: coral;
  color: white;
`;
