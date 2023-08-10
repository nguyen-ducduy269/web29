// import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Status from "./Status";

type props = {
  handleBtn: (value: any) => void;
  deleteBtn: (value: any) => void;
};
const Table = ({ handleBtn, deleteBtn }: props) => {
  const tasks = useSelector((state: any) => state.Task.data) || [];
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
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
              <input
                className="add-input"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
              ></input>
            </td>

            <Status />
            <td className="activity"></td>
          </tr>

          {tasks
            ?.filter((item: any) => {
              return searchValue.toLocaleLowerCase() === ""
                ? item
                : item.name.toLocaleLowerCase().includes(searchValue);
            })
            .map((e: any, i: any) => (
              <tr key={i}>
                <td className="stt">{i + 1}</td>
                <td className="name">{e.name}</td>
                <td className="status">
                  <p className="status-active">{e.status}</p>
                </td>
                <td className="activity button">
                  <button
                    className="btn_edit"
                    data-id="edit"
                    onClick={() => handleBtn(e)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn_remove"
                    onClick={() => deleteBtn(e.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
