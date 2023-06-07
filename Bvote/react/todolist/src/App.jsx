import { useState } from "react";
import { AddJob } from "./sceens/AddJob";
import { EditJob } from "./sceens/EditJob";
import styled from "styled-components";

let data = [
  { id: 1, name: "a", status: "Kích hoạt", i: 0 },
  { id: 2, name: "b", status: "Ẩn", i: 1 },
];
function App() {
  const [array, setArray] = useState(data);
  const [display, setDisplay] = useState(false);
  const [updateJob, setUpdateJob] = useState("");

  const showDisplay = () => {
    setDisplay(true);
  };

  const onAdd = (aJob) => {
    const newJob = { ...aJob, id: array.length + 1 }; // Tăng id khi thêm công việc mới
    setArray((prevArray) => [...prevArray, newJob]);
  };

  const onDelete = (id) => {
    setArray((prevArray) => prevArray.filter((newArray) => newArray.id !== id));

    const deleArr = array.filter((newArray) => newArray.id === id);
    console.log("deleArr", deleArr);
  };

  return (
    <>
      <Header>Quản lý công việc</Header>
      <Container>
        <div className="left-job">
          {display ? <AddJob onAdd={onAdd} setDisplay={setDisplay} /> : false}
          <EditJob
            array={array}
            setArray={setArray}
            updateJob={updateJob}
            setUpdateJob={setUpdateJob}
          />

          <button className="add-job" onClick={showDisplay}>
            Thêm công việc
          </button>
        </div>

        <div className="right-job">
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

              {array?.map((e, i) => (
                <tr key={i}>
                  <td className="stt">{i + 1}</td>
                  <td className="name">{e.name}</td>
                  <td className="status">
                    <p className="status-active">{e.status}</p>
                  </td>
                  <td className="activity button">
                    <button
                      className="btn_edit"
                      onClick={() =>
                        setUpdateJob({
                          id: e.id,
                          name: e.name,
                          status: e.status,
                        })
                      }
                    >
                      Sửa
                    </button>
                    <button
                      className="btn_remove"
                      onClick={() => onDelete(e.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default App;

const Header = styled.h1`
  width: 100%;
  font-size: 45px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;

  .left-job {
    width: 30%;
    position: relative;
  }
  .add-job {
    position: absolute;
    top: -10%;
    right: -47%;
    width: 150px;
    height: 30px;
    background-color: blue;
    color: white;
  }

  .add {
    height: 50px;
    line-height: 50px;
    background-color: bisque;
    padding-left: 10px;
  }

  .form {
    height: 190px;
    border: 1px solid bisque;
    padding: 10px 10px;
  }
  label {
    font-size: 20px;
    font-weight: 700;
  }

  .left-job .name {
    width: 97%;
    height: 40px;
    border-radius: 8px;
    padding-left: 5px;
  }
  .left-job select {
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
  .left-job .button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .btn_add {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
  }
  .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }

  .right-job {
    width: 60%;
    height: 276.6px;
  }
  .right-job button {
    background-color: #0000ffc7;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: white;
    padding: 0 5px;
    margin-bottom: 0;
  }

  .right-job .reduce {
    margin-left: 20px;
  }
  .main-input {
    width: 300px;
    height: 30px;
  }

  table,
  tr,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  thead {
    font-weight: 700;
  }

  thead .stt {
    width: 50px;
  }

  thead .name {
    width: 300px;
  }

  thead .status {
    width: 150px;
  }

  thead .activity {
    width: 200px;
  }
  td {
    height: 50px;
    text-align: center;
  }

  .add-input {
    width: 90%;
    height: 70%;
  }

  tbody select {
    width: 90%;
    height: 70%;
  }

  tbody .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status-active {
    border: 1px solid;
    width: 70px;
    font-size: 12px;
    background-color: #4caf50;
    color: white;
  }

  tbody .button button {
    padding: 0px 5px;
    text-align: center;
  }

  tbody .button .btn_edit {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
    margin-right: 10px;
  }

  tbody .button .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }
`;
