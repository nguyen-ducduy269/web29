import React from "react";

export const EditJob = ({ array, setArray, updateJob, setUpdateJob }) => {
  const cancleUpdate = () => {
    setUpdateJob("");
  };

  const changJob = (e) => {
    let newEnterJob = {
      id: updateJob.id,
      name: e.target.value,
      status: updateJob.status,
    };
    setUpdateJob(newEnterJob);
  };

  const updatingJob = () => {
    let filterJob = [...array].filter(
      (newArray) => newArray.id !== updateJob.id
    );
    let updateObject = [...filterJob, updateJob];
    setArray(updateObject);
    setUpdateJob("");
  };

  return (
    <>
      <div className="left">
        <p className="add">Sửa công việc</p>
        <div className="form">
          <label>Tên: </label>
          <br />
          <input
            value={updateJob && updateJob.name}
            onChange={(e) => changJob(e)}
            className="name"
            type="text"
          />
          <br />

          <label>Trạng thái: </label>
          <select
            value={updateJob && updateJob.status}
            onChange={(e) => {
              console.log(e.target.value);
              setUpdateJob((prev) => {
                return { ...prev, status: e.target.value };
              });
            }}
          >
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button className="btn_add" onClick={() => updatingJob()}>
              Sửa
            </button>
            <button className="btn_remove" onClick={() => cancleUpdate()}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
