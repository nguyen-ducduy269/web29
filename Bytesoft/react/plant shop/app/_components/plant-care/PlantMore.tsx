import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const PlantMore = ({ product, setSelectedItem }: any) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const addToCard = (item: any) => {
    const total_price = item.price * quantity;

    const plantAddToCard = {
      id: item.id,
      name: item.name,
      image: item.detail_image[0].big_image,
      price: item.price,
      size: item.pot[0].name,
      ca: item.pot[0].ca,
      fl: item.pot[0].fl,
      quantity: quantity,
      total_price: Math.round(total_price * 100) / 100,
    };

    setSelectedItem(Math.random());
    axios.post("http://localhost:4001/card", plantAddToCard);
    alert("Successfull add product to your card! Continue Shopping?");
    setQuantity(1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="item-detail" key={product.id}>
      <div className="item-img">
        <img src={product.main_image} alt="" />
      </div>

      <div className="details">
        <div className="item-title">{product.name}</div>

        <div className="item-price">${product.price}</div>

        <ul>
          <li>
            <strong>Botanical Name:</strong> {product.botanical_name}
          </li>
          <li>
            <strong>Description:</strong> {product.detail_description}
          </li>
        </ul>

        <div className="add-to-card-value">
          <div className="value">
            {quantity <= 1 ? (
              <button
                className="minus"
                style={{
                  backgroundColor: "rgb(209, 213, 219)",
                  color: "white",
                }}
              >
                -
              </button>
            ) : (
              <button
                className="minus"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
            )}
            <input type="text" className="quantity" value={quantity} min={1} />
            {product.sold_out == true ? (
              <button
                className="plus"
                style={{
                  backgroundColor: "rgb(209, 213, 219)",
                  color: "white",
                }}
              >
                +
              </button>
            ) : (
              <button
                className="plus"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            )}
          </div>

          {product.sold_out == true ? (
            <div
              className="add-to-card"
              style={{
                backgroundColor: "rgb(209, 213, 219)",
                color: "white",
              }}
            >
              Sold Out
            </div>
          ) : (
            <div
              className="add-to-card"
              onClick={() => {
                addToCard(product);
              }}
            >
              Add To Card
            </div>
          )}
        </div>

        <Link
          href={"/product"}
          onClick={() => {
            localStorage.setItem("detail-products", JSON.stringify(product));
          }}
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default PlantMore;
