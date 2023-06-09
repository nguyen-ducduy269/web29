import React, { useState } from "react";
import styled from "styled-components";

export const Arrange = ({ setArray, array, closeArrng }) => {
  const [arrange, setArrange] = useState("");
  console.log(arrange);

  const handleArrange = (value) => {
    // setArrange(e.target.value);
    console.log(value);

    let newArray = [...array];

    newArray = newArray.filter((item) => {
      return item.status.includes(value);
    });

    setArray(newArray);
  };

  return (
    <>
      <Arranged>
        <ul>
          <li>
            <a type="button">
              <span>Từ A - Z</span>
            </a>
          </li>
          <li>
            <a type="button">
              <span>Từ Z - A</span>
            </a>
          </li>
          <li>
            <a
              type="button"
              value="Kích hoạt"
              onClick={() => handleArrange("Kích hoạt")}
            >
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>
          <li>
            <a type="button" value="Ẩn" onClick={() => handleArrange("Ẩn")}>
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
