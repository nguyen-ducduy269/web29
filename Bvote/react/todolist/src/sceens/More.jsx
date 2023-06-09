import React, { useState } from "react";
import { Arrange } from "./Arrange";
import styled from "styled-components";

export const More = ({ setArray, array }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    let newArray = [...array];
    console.log("1", newArray);
    const searched = searchValue.toUpperCase();
    newArray = newArray.filter((item) => {
      return item.name.toUpperCase().includes(searched);
    });
    setArray(newArray);
  };

  const [showArrange, setShowArrange] = useState(false);
  const closeArrng = () => {
    setShowArrange(false);
  };

  const showArrng = () => {
    setShowArrange(true);
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
        <button className="reduce" onClick={showArrng}>
          Sắp xếp
        </button>
        {showArrange ? (
          <Arrange array={array} setArray={setArray} closeArrng={closeArrng} />
        ) : (
          false
        )}
      </Mored>
    </>
  );
};

const Mored = styled.div`
  position: relative;
`;
