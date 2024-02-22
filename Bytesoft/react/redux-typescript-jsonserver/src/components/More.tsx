"use client";
import { useState } from "react";
import { Mored } from "../App.ts";

// import components
import { filterJob } from "../hooks/filterJob.ts";
import Arrange from "./Arrange";

interface Props {
  filterName: string;
  setFilterName: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
}

const More = (props: Props) => {
  const [arrange, setArrange] = useState(false);
  const { filter } = filterJob();

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
        <button
          onClick={() => {
            filter(props.filterName, props.filterStatus);
          }}
        >
          Tìm
        </button>
        <button className="reduce" onClick={() => setArrange(!arrange)}>
          Sắp xếp
        </button>
        {arrange ? (
          <Arrange
            setArrange={setArrange}
            setSearchStatus={props.setFilterStatus}
          />
        ) : (
          ""
        )}
      </Mored>
    </>
  );
};

export default More;
