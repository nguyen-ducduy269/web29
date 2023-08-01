import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../store/action/indexAction";

export const Arrange = () => {
  const work = JSON.parse(localStorage.getItem("item"));
  const dispatch = useDispatch();
  return (
    <>
      <Arranged>
        <ul>
          <li>
            <a
              type="button"
              onClick={() => {
                dispatch({ type: "FROM_A_TO_Z", payload: work });
                dispatch(actions.closeArrng());
              }}
            >
              <span>Từ A - Z</span>
            </a>
          </li>
          <li>
            <a
              type="button"
              onClick={() => {
                dispatch({ type: "FROM_Z_TO_A", payload: work });
                dispatch(actions.closeArrng());
              }}
            >
              <span>Từ Z - A</span>
            </a>
          </li>
          <li>
            <a
              type="button"
              value="Kích hoạt"
              onClick={() => {
                dispatch({ type: "HANDLE_ARRANGE", payload: "Kích hoạt" });
                dispatch(actions.closeArrng());
              }}
            >
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>
          <li>
            <a
              type="button"
              value="Ẩn"
              onClick={() => {
                dispatch({ type: "HANDLE_ARRANGE", payload: "Ẩn" });
                dispatch(actions.closeArrng());
              }}
            >
              <span>Trạng thái Ẩn</span>
            </a>
          </li>
        </ul>
      </Arranged>
    </>
  );
};

const Arranged = styled.div`
  min-width: 160px;
  min-height: 200px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  left: 48%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    height: 100%;
    padding: 5px;
    list-style: none;
    li {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;
