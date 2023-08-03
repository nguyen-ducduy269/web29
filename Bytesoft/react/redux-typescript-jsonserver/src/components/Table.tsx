// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions.tsx";
import axios from "axios";

import Status from "./Status";

type props = {
  array: any;
  setArray: (value: object) => void;
  name: string;
  setName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};
const Table = ({
  array,
  setArray,
  name,
  setName,
  status,
  setStatus,
}: props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.Task.data.data);

  const editBtn = (e: any) => {
    dispatch(actions.openForm());
    let indexFilter = array.findIndex((item: any) => item.id === e);
    setName(array[indexFilter].name);
    setStatus(array[indexFilter].status);
  };

  const deleteBtn = (e: any) => {
    console.log(e);

    let indexFilter = array.findIndex((item: any) => item.id === e);
    const newArray = array.filter((item: any) => {
      return item != array[indexFilter];
    });

    axios
      .delete(`http://localhost:3000/data/${e}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setArray(newArray);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <td className="stt">STT</td>
            <td className="name">Tên</td>
            <td className="status">Trạng thái</td>
            <td className="activity">Hành động</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="stt"></td>
            <td className="name">
              <input className="add-input" type="text"></input>
            </td>

            <Status />
            <td className="activity"></td>
          </tr>

          {tasks.map((e: any, i: any) => (
            <tr key={i}>
              <td className="stt">{i + 1}</td>
              <td className="name">{e.name}</td>
              <td className="status">
                <p className="status-active">{e.status}</p>
              </td>
              <td className="activity button">
                <button
                  className="btn_edit"
                  data-action="edit"
                  onClick={() => editBtn(e.id)}
                >
                  Sửa
                </button>
                <button className="btn_remove" onClick={() => deleteBtn(e.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
