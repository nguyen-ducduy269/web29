"use client";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  filter: any;
  setFilter: (value: any) => void;
}

// import components
import Arrange from "./Arrange";

const More = (props: Props) => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");

  const filterName = async () => {
    props.setFilter({ ...props.filter, name: search });
  };

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button onClick={() => filterName()}>Tìm</button>
        <button className="reduce" onClick={() => setArrange(true)}>
          Sắp xếp
        </button>
        {arrange ? (
          <Arrange
            setArrange={setArrange}
            setFilter={props.setFilter}
          />
        ) : (
          ""
        )}
      </Mored>
    </>
  );
};

export default More;

const Mored = styled.div`
  position: relative;
  input {
    padding-left: 5px;
  }
`;
