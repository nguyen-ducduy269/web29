"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Status from "./Status";

////// import hooks
import useJob from "../hooks/Job";
import { fetchData } from "../hooks/fetchData";
import { filterJob } from "../hooks/filterJob";
import { AppDispatch } from "../store/Store";

interface Props {
  setIsDisplay: (value: boolean) => void;
  setSelectedItem: (value: any) => void;
  filterName: string;
  setFilterName: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
}

const Table = (props: Props) => {
  const tasks = useSelector((state: any) => state.todos.data) || [];
  const { deleteJob } = useJob();
  const { filter } = filterJob();
  const [filterData, setFilterData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    filter(props.filterName, props.filterStatus);
    setFilterData([]);
  }, [props.filterName, props.filterStatus]);

  const handleDelete = async (params: number) => {
    try {
      await deleteJob(params);
    } catch (error) {
      console.log("error", error);
    }
  };

  const filterTableData = useCallback(
    (keyword: string, status: string) => {
      // const newItem = tasks.filter((params: any) => {
      //   const regex = new RegExp(`${keyword}.${status}`, "i");
      //   console.log("regex", regex);

      //   return regex.test(params.name || "") && regex.test(params.status || "");
      // });

      // setFilterData(newItem);

      if (keyword && status) {
        const item = dispatch(
          fetchData({
            ...tasks,
            name: keyword,
            status: status,
          })
        );

        console.log("item", item);
      }

      if (keyword) {
        const newItem = tasks.filter((params: any) => {
          return new RegExp(`${keyword}`, "i").test(params.name);
        });

        setFilterData(newItem);
      }

      if (status) {
        const newItem = tasks.filter((params: any) => {
          return new RegExp(`${status}`, "i").test(params.status);
        });
        console.log("regex", newItem);

        setFilterData(newItem);
      }

      if (!keyword && !status) {
        setFilterData(tasks);
      }
    },
    [tasks]
  );

  useEffect(() => {
    filterTableData(filterValue, filterStatus);
  }, [filterValue, filterStatus]);

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
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                }}
              ></input>
            </td>

            <Status setFilterStatus={setFilterStatus} />
            <td className="activity"></td>
          </tr>

          {(filterData.length > 0 ? filterData : tasks)?.map(
            (e: any, i: any) => (
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
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
