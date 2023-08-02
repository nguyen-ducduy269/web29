import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";
import { Status } from "../components/Status";

export const Table = ({
  setUpdateJob,
  setName,
  setStatus,
  refresh,
  filter,
  setFilter,
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.saveTask.data);

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
                value={filter.name}
                onChange={(e) => {
                  dispatch({
                    type: "FILTER_TASK",
                    payload: e.target.value,
                  });
                  setFilter({ ...filter, name: e.target.value });
                }}
              ></input>
            </td>

            <Status filter={filter} setFilter={setFilter} />
            <td className="activity"></td>
          </tr>

          {tasks
            ?.filter((item) => {
              return filter.name.toLocaleLowerCase() === ""
                ? item
                : item.name.toLocaleLowerCase().includes(filter.name);
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
