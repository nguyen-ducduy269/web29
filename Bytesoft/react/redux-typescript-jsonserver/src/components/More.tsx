import { useState } from "react";
import styled from "styled-components";
import Arrange from "./Arrange";

const More = () => {
  const [arrange, setArrange] = useState(false);

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
        ></input>
        <button>Tìm</button>
        <button className="reduce" onClick={() => setArrange(true)}>
          Sắp xếp
        </button>
        {arrange ? <Arrange setArrange={setArrange} /> : false}
      </Mored>
    </>
  );
};

export default More;

const Mored = styled.div`
  position: relative;
`;
