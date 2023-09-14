import React, { useState } from "react";
import { useMyBag } from "../hooks/useMyBag";

const Item = ({ item }) => {
  const deleteItem = useMyBag().deleteItem;
  const data = useMyBag().data;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (val, id) => {
    setQuantity((prev) => prev + val);

    let temp = [...data];
    const item = data.find((i) => i.id === id);
    const index = temp.indexOf(item);
    const product = data[index];

    product.price = product.price * (quantity + 1);
    product.quantity = quantity + 1;
  };

  const decreaseQuantity = (val, id) => {
    setQuantity((prev) => prev + val);

    let temp = [...data];
    const item = data.find((i) => i.id === id);
    const index = temp.indexOf(item);
    const product = data[index];

    product.price = product.price * (quantity - 1);
    product.quantity = quantity - 1;
    if (quantity <= 1) {
      deleteItem(id);
      setQuantity(1);
    }
  };

  return (
    <>
      <div className="product" key={item.id}>
        <div className="product-img">
          <img src={item.image} alt="" />
        </div>

        <div className="product-detail">
          <div className="title">{item.title}</div>
          <div className="price">${item.price}</div>
          <button className="remove" onClick={() => deleteItem(item.id)}>
            Remove
          </button>
        </div>

        <div className="number-product">
          <button
            className="divide"
            onClick={() => decreaseQuantity(-1, item.id)}
          >
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button className="plus" onClick={() => increaseQuantity(1, item.id)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
