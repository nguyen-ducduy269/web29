import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const AddJob = ({ job, name, setName, status, setStatus, refresh }) => {
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(actions.saveTask({ id: job?.id, name, status }));
    dispatch(actions.closeForm());
    refresh();
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