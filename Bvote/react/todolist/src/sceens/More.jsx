import React, { useEffect, useState } from "react";
import { Arrange } from "./Arrange";
import styled from "styled-components";

export const More = ({ setArray, array }) => {
  const [searchValue, setSearchValue] = useState("");
  const items = localStorage.getItem("item");
  const itemss = items.split();
  console.log("type", typeof itemss);

  const handleSearch = () => {
    console.log("array", array);
    const prevArray = [...array];
    console.log("prevArray", prevArray);
    if (searchValue != "" && searchValue != null) {
      let newArray = [...array];
      const searched = searchValue.toUpperCase();
      newArray = newArray.filter((item) => {
        return item.name.toUpperCase().includes(searched);
      });
      setArray(newArray);
      console.log("newArray", newArray);
    }
    if (searchValue == "" || searchValue == null) {
      setArray(items);
    }
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
