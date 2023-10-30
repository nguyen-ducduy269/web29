"use client";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// import components
import Arrange from "./Arrange";
import { todoSlice } from "../features/todo/todoSlice";
import axios from "axios";

const More = () => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // xử lý bất đồng bộ
  const handleSearch = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    if (search != "" && search != null) {
      let newTask = [...initValue];
      newTask = newTask.filter((task: any) => {
        return task.name.toLowerCase().includes(search.toLowerCase());
      });
      dispatch(todoSlice.actions.filter(newTask));
    }
    if (search == "" || search == null) {
      dispatch(todoSlice.actions.filter(initValue));
    }
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
