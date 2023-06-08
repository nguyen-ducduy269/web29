import React from "react";

export const Tr = ({ array, setArray, setUpdateJob, search }) => {
  const onDelete = (id) => {
    setArray((prevArray) => prevArray.filter((newArray) => newArray.id !== id));

    const deleArr = array.filter((newArray) => newArray.id === id);
    console.log("deleArr", deleArr);
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
              <button
                className="btn_edit"
                onClick={() =>
                  setUpdateJob({
                    id: e.id,
                    name: e.name,
                    status: e.status,
                  })
                }
              >
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
