import React, { useState } from "react";

export const Tr = ({ array, setArray, setUpdateJob, search, showDisplay }) => {
  const onDelete = (id) => {
    setArray((prevArray) => prevArray.filter((newArray) => newArray.id !== id));
  };

  const changeJob = (e) => {
    let newEnterJob = {
      id: e.id,
      name: e.name,
      status: e.status,
    };
    setUpdateJob(newEnterJob);
  };

  const editBtn = (e) => {
    showDisplay();
    changeJob(e);
  };
  return (
    <>
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
              <button className="btn_remove" onClick={() => onDelete(e.id)}>
                Xóa
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};
