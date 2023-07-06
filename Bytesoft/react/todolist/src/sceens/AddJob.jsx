import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
  showDisplay,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const updatingJob = (id) => {
    let indexToUpdate = array.findIndex((item) => item.id === job.id);
    let newArray = [...array];
    newArray[indexToUpdate] = { ...job, name, status };
    setArray(newArray);
    setUpdateJob("");
    closeDisplay();

    // axios.put(`http://localhost:3000/data/${id}`, newArray);
  };

  const handleSubmit = (e) => {
    if (errors) {
      showDisplay();
    }
    if (!job) {
      onAdd({
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
  }, [job]);

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          {/* <input
            id="name"
            className="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <input
            id="name"
            {...register("name", {
              required: "Required!",
              minLength: {
                value: 4,
                message: "Min length is 4!",
              },
            })}
            type="text"
          />
          <p>{errors.name?.message}</p>
          <br />

          <label>Trạng thái: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button className="btn_add" onClick={(e) => handleSubmit(e)}>
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
