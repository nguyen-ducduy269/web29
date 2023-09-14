import React from "react";
import { useMyBag } from "../hooks/useMyBag";

const TotalPrice = ({ priceTotal }) => {
  const setData = useMyBag().setData;
  return (
    <>
      <div className="summary">
        <div className="summay-price">
          <div className="total">Total</div>
          <div className="total-price">${priceTotal.toFixed(2)}</div>
        </div>

        <button className="clear-cart" onClick={() => setData([])}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default TotalPrice;
