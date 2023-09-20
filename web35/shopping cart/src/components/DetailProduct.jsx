import React, { useState } from "react";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const item = quantity + 1;
    setQuantity(item);
  };

  const decreaseQuantity = () => {
    const item = quantity - 1;
    setQuantity(item);
  };

  return (
    <>
      <div className="detail-product-container">
        <div className="detail-main-img">
          <img
            src="https://i.dummyjson.com/data/products/5/thumbnail.jpg"
            alt=""
          />
        </div>

        <div className="detail-main-content">
          <h2>
            Huawei P30
            <div className="discount-precent">Discount: 10.58%</div>
          </h2>

          <div className="price">
            Price:
            <div className="before-discount">$499</div>
            <div className="after-discount">$446.21</div>
          </div>

          <div className="discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            provident molestias ipsum, incidunt tenetur exercitationem iste
            consequuntur natus, molestiae minima quaerat! Voluptas est eveniet
            quo eius. Voluptas hic laboriosam amet.
          </div>

          <div className="add-quantity">
            <button className="divide" onClick={decreaseQuantity}>
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button className="plus" onClick={increaseQuantity}>
              +
            </button>
          </div>

          <button className="add-card">Add To Card</button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
