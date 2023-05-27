import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const AddButton = styled.button`
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
  `;
  return (
    <>
      <h1 class="header">Quản lý công việc</h1>
      <div class="container">
        <div class="left-job">
          <div class="left">
            <p class="add">Thêm công việc</p>
            <div class="form">
              <label>Tên: </label>
              <br />
              <input class="name" type="text" />
              <br />

              <label>Trạng thái: </label>
              <select>
                <option value="Kích hoạt">Kích hoạt</option>
                <option value="Ẩn">Ẩn</option>
              </select>

              <div class="button">
                <AddButton>Thêm</AddButton>
                <button class="btn_remove">Hủy bỏ</button>
              </div>
            </div>
          </div>
        </div>

        <div class="right-job">
          <button class="add-job">Thêm công việc</button>
          <div class="more">
            <input
              class="main-input"
              type="text"
              placeholder="Nhập từ khóa..."
            ></input>
            <button>Tìm</button>
            <button class="reduce">Sắp xếp</button>
          </div>

          <table>
            <thead>
              <tr>
                <td class="stt">STT</td>
                <td class="name">Tên</td>
                <td class="status">Trạng thái</td>
                <td class="activity">Hành động</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="stt"></td>
                <td class="name">
                  <input class="add-input" type="text"></input>
                </td>
                <td class="status">
                  <select>
                    <option>Tất cả</option>
                    <option>Kích hoạt</option>
                    <option>Ẩn</option>
                  </select>
                </td>
                <td class="activity"></td>
              </tr>

              <tr>
                <td class="stt">1</td>
                <td class="name">duy</td>
                <td class="status">
                  <p class="status-active">Kích hoạt</p>
                </td>
                <td class="activity button">
                  <button class="btn_edit">Sửa</button>
                  <button class="btn_remove">Xóa</button>
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
