"use client";
import { useState } from "react";
import styled from "styled-components";
import { filterJobAsync } from "../features/todo/todoSlice";

// import components
import Arrange from "./Arrange";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/Store";

const More = () => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filterValue = useSelector((state: any) => state.todos.data);

  const filterName = () => {
    dispatch(filterJobAsync({ ...filterValue, name: search }));
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
