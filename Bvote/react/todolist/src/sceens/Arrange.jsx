import React, { useState } from "react";
import styled from "styled-components";

export const Arrange = ({ setArray, closeArrng }) => {
  const [arrange, setArrange] = useState("");
  const work = JSON.parse(localStorage.getItem("item"));

  const handleArrange = (value) => {
    let newArray = [...work];

    newArray = newArray.filter((item) => {
      return item.status.includes(value);
    });

    setArray(newArray);
    closeArrng();
  };

  const fromAToZ = () => {
    let newArray = [...work];

    newArray = newArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setArray(newArray);
    closeArrng();
  };

  const fromZToA = () => {
    let newArray = [...work];

    newArray = newArray
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .reverse();
    setArray(newArray);
    closeArrng();
  };

  return (
    <>
      <Arranged>
        <ul>
          <li>
            <a type="button" onClick={() => fromAToZ()}>
              <span>Từ A - Z</span>
            </a>
          </li>
          <li>
            <a type="button" onClick={() => fromZToA()}>
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
