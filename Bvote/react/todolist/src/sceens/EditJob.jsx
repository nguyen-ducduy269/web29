import React from "react";

export const EditJob = ({ array, setArray, updateJob, setUpdateJob }) => {
  const cancelUpdate = () => {
    setUpdateJob("");
  };

  const changeJob = (e) => {
    let newEnterJob = {
      id: updateJob.id,
      name: e.target.value,
      status: updateJob.status,
    };
    setUpdateJob(newEnterJob);
  };

  const updatingJob = () => {
    let indexToUpdate = array.findIndex((job) => job.id === updateJob.id);
    let newArray = [...array];
    newArray[indexToUpdate] = updateJob;
    setArray(newArray);
    setUpdateJob("");
  };

  return (
    <>
      {
        <div className="left">
          <p className="add">Sửa công việc</p>
          <div className="form">
            <label>Tên: </label>
            <br />
            <input
              value={updateJob && updateJob.name}
              onChange={changeJob}
              className="name"
              type="text"
            />
            <br />

            <label>Trạng thái: </label>
            <select
              value={updateJob && updateJob.status}
              onChange={(e) =>
                setUpdateJob({
                  ...updateJob,
                  status: e.target.value,
                })
              }
            >
              <option value="Kích hoạt">Kích hoạt</option>
              <option value="Ẩn">Ẩn</option>
            </select>

            <div className="button">
              <button className="btn_add" onClick={updatingJob}>
                Sửa
              </button>
              <button className="btn_remove" onClick={cancelUpdate}>
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};
