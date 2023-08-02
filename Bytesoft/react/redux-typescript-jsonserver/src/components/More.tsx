// import React from "react";
import styled from "styled-components";
import Arrange from "./Arrange";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions.tsx";

const More = () => {
  const dispatch = useDispatch();
  const arrange = useSelector((state: any) => state.arrange);
  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
        ></input>
        <button>Tìm</button>
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

export default More;

const Mored = styled.div`
  position: relative;
`;
