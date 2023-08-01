import styled from "styled-components";
import { Arrange } from "./Arrange";

export const More = () => {
  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
        ></input>
        <button>Tìm</button>
        <button className="reduce">Sắp xếp</button>
        <Arrange />
      </Mored>
    </>
  );
};

const Mored = styled.div`
  position: relative;
`;
