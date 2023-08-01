import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";
import { Status } from "../components/Status";

export const Table = ({ setUpdateJob, setName, setStatus, refresh }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.saveTask);

  const editBtn = (e) => {
    dispatch(actions.openForm());
    let newEnterJob = {
      id: e.id,
      name: e.name,
      status: e.status,
    };
    setUpdateJob(newEnterJob);
    setName(e.name);
    setStatus(e.status);
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
              <input
                className="add-input"
                type="text"
                onChange={(e) =>
                  dispatch({ type: "FILTER_TASK", payload: e.target.value })
                }
              ></input>
            </td>

            <Status />
            <td className="activity"></td>
          </tr>

          {tasks.map((e, i) => (
            <tr key={i}>
              <td className="stt">{i + 1}</td>
              <td className="name">{e.name}</td>
              <td className="status">
                <p className="status-active">{e.status}</p>
              </td>
              <td className="activity button">
                <button className="btn_edit" onClick={() => editBtn(e)}>
                  Sửa
                </button>
                <button
                  className="btn_remove"
                  onClick={() => {
                    dispatch({ type: "DELETE_TASK", payload: e.id });
                    refresh();
                  }}
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
