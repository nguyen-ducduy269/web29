import React from "react";
import CardSale from "./CardSale";
import CardImg from "./CardImg";
import CardBody from "./CardBody";
import Button from "./Button";
import PropTypes from "prop-types";
import { useShopping } from "../hooks/useShopping";
/**
 *
 * @param {*} param0
 * @returns
 */
const Card = ({ title, price, img, vote, pricesale }) => {
  const addTask = useShopping().addTask;

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <CardSale pricesale={pricesale} />
        <CardImg img={img} alt={title} />
        <CardBody
          price={price}
          pricesale={pricesale}
          vote={vote}
          title={title}
        />
        <Button onClick={(e) => addTask()}>Add to cart</Button>
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
