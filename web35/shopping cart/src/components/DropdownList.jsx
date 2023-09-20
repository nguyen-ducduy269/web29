import React from "react";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";

const DropdownList = () => {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <Link to="/all-products" style={{ textDecoration: "unset" }}>
        <DropdownItem>All Products</DropdownItem>
      </Link>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <DropdownItem>Popular Items</DropdownItem>
      <DropdownItem>New Arrivals</DropdownItem>
    </ul>
  );
};

export default DropdownList;
