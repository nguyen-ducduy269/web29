"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Status from "./Status";
import { AppDispatch } from "../store/Store";

////// import hooks
import { fetchData } from "../hooks/fetchData";
import { deleteItem } from "../hooks/deleteItem";

interface Props {
  changeStatus: any;
  setIsDisplay: (value: boolean) => void;
  setSelectedItem: (value: any) => void;
  setChangeStatus: (value: any) => void;
}

const Table = (props: Props) => {
  const tasks = useSelector((state: any) => state.todos.data) || [];
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [props.changeStatus]);

  const handleDelete = (params: any) => {
    dispatch(deleteItem(params));
    props.setChangeStatus(!props.changeStatus);
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
              <input
                className="add-input"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              ></input>
            </td>

            <Status />
            <td className="activity"></td>
          </tr>

          {tasks
            ?.filter((item: any) => {
              return searchValue.toLocaleLowerCase() === ""
                ? item
                : item.name.toLocaleLowerCase().includes(searchValue);
            })
            .map((e: any, i: any) => (
              <tr key={i}>
                <td className="stt">{i + 1}</td>
                <td className="name">{e.name}</td>
                <td className="status">
                  <p className="status-active">{e.status}</p>
                </td>
                <td className="activity button">
                  <button
                    className="btn_edit"
                    onClick={() => {
                      props.setIsDisplay(true);
                      props.setSelectedItem(e);
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn_remove"
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
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
