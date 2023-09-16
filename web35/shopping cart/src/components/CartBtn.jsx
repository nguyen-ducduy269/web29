import React from "react";
import { useShopping } from "../hooks/useShopping";

const CartBtn = () => {
  const count = useShopping().count;

  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
        <i className="bi-cart-fill me-1" />
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {count}
        </span>
      </button>
    </form>
  );
};

export default CartBtn;
