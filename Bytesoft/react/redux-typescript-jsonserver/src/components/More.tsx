"use client";
import { useState } from "react";
import styled from "styled-components";

// import components
import Arrange from "./Arrange";

const More = () => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");

  const filterName = async () => {};

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
        {arrange ? <Arrange setArrange={setArrange} /> : ""}
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
