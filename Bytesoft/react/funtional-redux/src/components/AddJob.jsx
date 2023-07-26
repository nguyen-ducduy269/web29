import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const AddJob = ({
  array,
  onAdd,
  job,
  setArray,
  setUpdateJob,
  name,
  setName,
  status,
  setStatus,
}) => {
  const addTask = useSelector((state) => state.addTask);
  const dispatch = useDispatch();

  const updatingJob = () => {
    let indexToUpdate = array.findIndex((item) => item.id === job.id);
    let newArray = [...array];
    newArray[indexToUpdate] = { ...job, name, status };
    setArray(newArray);
    setUpdateJob("");
    dispatch(actions.closeForm());
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!job) {
      onAdd({
        id: Math.random(),
        name: name,
        status: status,
      });
      setName("");
      dispatch(actions.closeForm());
    } else {
      updatingJob(e.id);
    }
  };

  useEffect(() => {
    if (job) {
      setName(job.name);
      setStatus(job.status);
    } else {
      setName("");
      setStatus("Kích hoạt");
    }
  }, []);

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <label>Trạng thái: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button
              type="submit"
              className="btn_add"
              onClick={(e) => handleRegister(e)}
            >
              Thêm
            </button>
            <button
              className="btn_remove"
              onClick={() => dispatch(actions.closeForm())}
            >
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
