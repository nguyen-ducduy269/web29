import React from "react";
import ListStar from "./ListStar";
import PropTypes from "prop-types";

const CardBody = ({ price, discountPercent, vote, title }) => {
  const priceDiscount = (price * discountPercent) / 100;
  const priceAfterDiscount = (price - priceDiscount).toFixed(2);

  return (
    <div className="card-body p-4">
      <div className="text-center">
        <h5 className="fw-bolder">{title}</h5>
        {vote && <ListStar />}
        <span className="text-muted text-decoration-line-through">
          $ {price}
        </span>
        $ {priceAfterDiscount}
      </div>
    </div>
  );
};
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pricesale: PropTypes.number,
  vote: PropTypes.bool,
};
export default CardBody;
