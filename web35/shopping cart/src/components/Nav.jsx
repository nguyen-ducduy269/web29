import React from "react";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
      <NavItem>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "unset",
          }}
        >
          Home
        </Link>
      </NavItem>
      <NavItem>About</NavItem>
      <NavDropdown />
    </ul>
  );
};

export default Nav;
