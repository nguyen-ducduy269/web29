import React, { useState } from "react";

export const Tr = ({ array, setArray, setUpdateJob, search, showToggle }) => {
  const onDelete = (id) => {
    setArray((prevArray) => prevArray.filter((newArray) => newArray.id !== id));

    const deleArr = array.filter((newArray) => newArray.id === id);
    console.log("deleArr", deleArr);
  };

  const editBtn = (e) => {
    showToggle(true);
    setUpdateJob({
      id: e.id,
      name: e.name,
      status: e.status,
    });
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
