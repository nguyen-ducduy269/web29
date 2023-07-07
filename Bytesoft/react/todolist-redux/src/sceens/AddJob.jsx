import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  console.log(errors);

  const updatingJob = () => {
    let indexToUpdate = array.findIndex((item) => item.id === job.id);
    let newArray = [...array];
    newArray[indexToUpdate] = { ...job, name, status };
    setArray(newArray);
    setUpdateJob("");
    closeDisplay();
  };

  const handleRegister = (e) => {
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
  }, []);

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form" onSubmit={handleSubmit(handleRegister)}>
          <label htmlFor="name">Tên: </label>
          <br />
          <input
            id="name"
            {...register("name", {
              required: "Bắt buộc, độ dài nhỏ nhất là 1!",
              minLength: 1,
            })}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <p>{errors.name?.message}</p>

          <label>Trạng thái: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button className="btn_add" onClick={handleSubmit(handleRegister)}>
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
