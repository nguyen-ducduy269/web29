import React, { useEffect } from "react";

export const AddJob = ({
  array,
  onAdd,
  closeDisplay,
  job,
  setArray,
  setUpdateJob,
  name,
  setName,
  status,
  setStatus,
}) => {
  const updatingJob = () => {
    let indexToUpdate = array.findIndex((item) => item.id === job.id);
    let newArray = [...array];
    newArray[indexToUpdate] = { ...job, name, status };
    setArray(newArray);
    localStorage.setItem("item", JSON.stringify(newArray));
    setUpdateJob("");
    closeDisplay();
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
      closeDisplay();
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
            <button className="btn_remove" onClick={closeDisplay}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
