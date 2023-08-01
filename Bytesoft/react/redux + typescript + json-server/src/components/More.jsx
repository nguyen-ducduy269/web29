import React, { useEffect, useState } from "react";
import { Arrange } from "./Arrange";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const More = () => {
  const [searchValue, setSearchValue] = useState("");
  const arrange = useSelector((state) => state.arrange);
  const dispatch = useDispatch();

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
        <button
          onClick={() => {
            dispatch({ type: "FILTER_TASK", payload: searchValue });
          }}
        >
          Tìm
        </button>
        <button
          className="reduce"
          onClick={() => dispatch(actions.showArrng())}
        >
          Sắp xếp
        </button>
        {arrange ? <Arrange /> : false}
      </Mored>
    </>
  );
};

const Mored = styled.div`
  position: relative;
`;
