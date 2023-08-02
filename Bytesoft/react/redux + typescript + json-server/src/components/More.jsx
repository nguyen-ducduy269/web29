import React from "react";
import { Arrange } from "./Arrange";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const More = ({ filter, setFilter }) => {
  const arrange = useSelector((state) => state.arrange);
  const dispatch = useDispatch();

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        ></input>
        <button
          onClick={() => {
            dispatch({
              type: "FILTER_TASK",
              payload: filter.name,
            });
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
        {arrange ? <Arrange filter={filter} /> : false}
      </Mored>
    </>
  );
};

const Mored = styled.div`
  position: relative;
`;
