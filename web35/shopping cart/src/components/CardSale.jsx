import React from "react";

const CardSale = ({ pricesale }) => {
  return (
    <div
      className="badge bg-dark text-white position-absolute"
      style={{ top: "0.5rem", right: "0.5rem" }}
    >
      Sale {pricesale}%
    </div>
  );
};

export default CardSale;
