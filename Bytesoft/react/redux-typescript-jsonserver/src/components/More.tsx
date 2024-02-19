"use client";
import { useEffect, useState } from "react";
import { Mored } from "../App.ts";

// import components
import Arrange from "./Arrange";
import { filterJob } from "../hooks/filterJob.ts";

interface Props {
  filterName: string;
  setFilterName: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
}

const More = (props: Props) => {
  const [arrange, setArrange] = useState(false);
  const [reload, setReload] = useState(0);
  const { filter } = filterJob();

  useEffect(() => {
    filter(props.filterName, props.filterStatus);
  }, [reload]);

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={props.filterName}
          onChange={(e) => {
            props.setFilterName(e.target.value);
          }}
        ></input>
        <button onClick={() => setReload(reload + 1)}>Tìm</button>
        <button className="reduce" onClick={() => setArrange(!arrange)}>
          Sắp xếp
        </button>
        {arrange ? (
          <Arrange
            setArrange={setArrange}
            setSearchStatus={props.setFilterStatus}
            setReload={setReload}
            reload={reload}
          />
        ) : (
          ""
        )}
      </Mored>
    </>
  );
};

export default More;
