"use client";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";

// import components
import Arrange from "./Arrange";
import { filterName } from "../hooks/filterName";
// import useJob from "../hooks/Job";

const More = () => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // const { filter } = useJob();
  const handleSearch = () => {
    dispatch(filterName(search));
    // filter(search);
  };

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Tìm</button>
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
`;
