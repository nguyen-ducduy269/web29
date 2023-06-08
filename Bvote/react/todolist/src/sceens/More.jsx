import React, { useState } from "react";

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

  return (
    <>
      <div className="more">
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Tìm</button>
        <button className="reduce">Sắp xếp</button>
      </div>
    </>
  );
};
