import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";
import { Status } from "../components/Status";

export const Table = ({
  array,
  setArray,
  setUpdateJob,
  setName,
  setStatus,
  refresh,
}) => {
  const [search, setSearch] = useState("");
  const filterTask = useSelector((state) => state.filterTask);
  const handleArrange = useSelector((state) => state.handleArrange);
  const dispatch = useDispatch();

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
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </td>

            <Status setArray={setArray} />
            <td className="activity"></td>
          </tr>

          {array
            ?.filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.name.toLocaleLowerCase().includes(search);
            })
            .map((e, i) => (
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
                      dispatch(actions.deleteTask(e.id));
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
