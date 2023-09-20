import React from "react";
import { useShopping } from "../hooks/useShopping";
import { Link } from "react-router-dom";

const CartBtn = () => {
  const count = useShopping().count;

  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark add-to-card" type="submit">
        <Link to="/cart">
          <i className="bi-cart-fill me-1" />
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {count}
          </span>
        </Link>
      </button>
    </form>
  );
};

export default CartBtn;
