"use client";
import React, { useState } from "react";
import { filterProduct } from "../product/Service";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  //   const { products: filterData } = await filterProduct("iphone");
  //   console.log(filterData);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <form
      action=""
      style={{
        width: "100%",
        height: "40px",
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        style={{ width: "50%" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </form>
  );
};

export default Search;
