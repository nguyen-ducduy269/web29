// import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions";

const AddJob = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input id="name" type="text" />

          <label>Trạng thái: </label>
          <select>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button
              type="submit"
              className="btn_add"
              onClick={(e) => {
                e.preventDefault();
                dispatch(actions.Task({ name: "a", status: true }));
              }}
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

export default AddJob;
