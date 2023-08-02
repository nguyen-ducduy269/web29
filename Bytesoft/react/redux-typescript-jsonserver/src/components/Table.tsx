// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions.tsx";

import Status from "./Status";

const Table = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.Task.data.data);

  const editBtn = (e: any) => {
    console.log(e);
    dispatch(actions.openForm());
  };
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
              <input className="add-input" type="text"></input>
            </td>

            <Status />
            <td className="activity"></td>
          </tr>

          {tasks.map((e: any, i: any) => (
            <tr key={i}>
              <td className="stt">{i + 1}</td>
              <td className="name">{e.name}</td>
              <td className="status">
                <p className="status-active">{e.status}</p>
              </td>
              <td className="activity button">
                <button className="btn_edit" onClick={() => editBtn(e.id)}>
                  Sửa
                </button>
                <button className="btn_remove">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
