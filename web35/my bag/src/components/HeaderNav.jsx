import React from "react";
import { useMyBag } from "../hooks/useMyBag";

const HeaderNav = () => {
  const data = useMyBag().data;

  return (
    <>
      <div className="nav-header">
        <div className="nav-title">UseReducer</div>
        <div className="shopping">
          <i class="fa-solid fa-bag-shopping"></i>
          <div className="number">{data.length}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
