import React, { useEffect, useState } from "react";
import { Arrange } from "./Arrange";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const More = ({ setArray, array }) => {
  const [searchValue, setSearchValue] = useState("");
  const items = JSON.parse(localStorage.getItem("item"));

  const arrange = useSelector((state) => state.arrange);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchValue != "" && searchValue != null) {
      let newArray = [...array];
      const searched = searchValue.toUpperCase();
      newArray = newArray.filter((item) => {
        return item.name.toUpperCase().includes(searched);
      });
      setArray(newArray);
    }
    if (searchValue == "" || searchValue == null) {
      setArray(items);
    }
  };

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Tìm</button>
        <button
          className="reduce"
          onClick={() => dispatch(actions.showArrng())}
        >
          Sắp xếp
        </button>
        {arrange ? <Arrange setArray={setArray} /> : false}
      </Mored>
    </>
  );
};

const Mored = styled.div`
  position: relative;
`;
