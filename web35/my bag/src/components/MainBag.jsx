import React from "react";

const MainBag = () => {
  return (
    <>
      <div className="main-bag">
        <h1>My Bag</h1>

        <div className="my-products">
          <div className="product">
            <div className="product-img">
              <img
                src="https://www.course-api.com/images/cart/phone-1.png"
                alt=""
              />
            </div>

            <div className="product-detail">
              <div className="title">Samsung Galaxy S8</div>
              <div className="price">$399.99</div>
              <button>Remove</button>
            </div>

            <div className="number-product">
              <button className="divide">-</button>
              <div className="quantity">1</div>
              <div className="plus">+</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBag;
