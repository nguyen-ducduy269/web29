import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Hobby = () => {
  const cancleJob = () => {
    prompt("Xóa nhé?");
    if (true) {
      const inputValue = document.querySelector(".name");
      inputValue.value = "";
    }
  };

  const editJob = (e) => {
    const btnEdit = e.target;
    const trEdit = btnEdit.parentElement.parentElement.parentElement;
    const fixItem = trEdit.querySelector(".name");
    // dùng hàm contentEditable để chỉnh sửa trực tiếp trên HTML
    fixItem.setAttribute("contentEditable", "true");
    // dùng focus để đặt trỏ chuột vào vị trí có khả năng sửa
    fixItem.focus();
    fixItem.addEventListener("keydown", (e) => {
      // khi nhấn phím nếu là Enter, sử dụng hàm preventDefault để tránh việc xuống dòng liền tục
      if (e.key === "Enter") {
        e.preventDefault();
        // chuyển contentEditable về thành false
        fixItem.setAttribute("contentEditable", "false");
      }
    });
  };

  const handleJob = () => {
    const inputValue = document.querySelector(".name").value;
    const selectValue = document.querySelector("select").value;

    if (!inputValue) {
      alert("Không được để trông phần điền tên");
      return false;
    } else {
      const table = document.querySelector("table");
      const newRow = table.insertRow(-1);
      // tính từ dòng thead là 0, dòng đầu tiên chỉ chứa input và status là 1 vậy phải trừ đi 1 mới đúng vơi stt
      // tinh stt của phần tử mơi được thêm
      const sttCell = newRow.insertCell(0);
      sttCell.innerHTML = table.tBodies[0].rows.length - 1;

      // lây nội dung phần input
      const nameCell = newRow.insertCell(1);
      nameCell.innerHTML = inputValue;

      // Hiển thị trạng thái status
      const statusCell = newRow.insertCell(2);
      statusCell.setAttribute("class", "status");
      const p = document.createElement("p");
      p.innerHTML = selectValue;
      p.setAttribute("class", "statu-active");
      statusCell.appendChild(p);

      // render ra hoạt động cuối
      const activityCell = newRow.insertCell(3);
      activityCell.innerHTML = `
        <div class="button">
          <button class="btn_edit" onClick="editJob()">Sửa</button>
          <button class="btn_remove">Xóa</button>
        </div>
      `;
    }
  };

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
              <button className="btn_add" onClick={handleJob}>
                Thêm
              </button>
              <button className="btn_remove" onClick={cancleJob}>
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>

        <div className="right-job">
          <button onClick={handleJob}>Thêm công việc</button>
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
                <td className="name">Học lập trình</td>
                <td className="status">
                  <p className="statu-active">Kích hoạt</p>
                </td>
                <td className="activity">
                  <div className="button">
                    <button className="btn_edit" onClick={editJob}>
                      Sửa
                    </button>
                    <button className="btn_remove">Xóa</button>
                  </div>
                </td>
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
