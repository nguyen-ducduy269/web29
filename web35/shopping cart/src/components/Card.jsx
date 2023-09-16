import React from "react";
import CardSale from "./CardSale";
import CardImg from "./CardImg";
import CardBody from "./CardBody";
import Button from "./Button";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
const Card = ({ title, price, img, vote, discountPercent }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <CardSale discountPercent={discountPercent} />
        <CardImg img={img} alt={title} />
        <CardBody
          price={price}
          discountPercent={discountPercent}
          vote={vote}
          title={title}
        />
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pricesale: PropTypes.number,
  vote: PropTypes.bool,
};
export default Card;
