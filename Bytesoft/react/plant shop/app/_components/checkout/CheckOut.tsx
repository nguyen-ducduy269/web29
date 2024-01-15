import React, { useEffect, useState } from "react";

const CheckOutPage = () => {
  const [data, setData]: any = useState([]);
  const [discount, setDiscount] = useState("");
  const [changePercent, setChangePercent] = useState(0);
  const city = [
    "An Giang",
    "Hà Giang",
    "Ninh Thuận",
    "Bà Rịa – Vũng Tàu",
    "Hà Nam",
    "Phú Thọ",
    "Bạc Liêu",
    "Hà Nội",
    "Phú Yên",
    "Bắc Giang",
    "Hà Tĩnh",
    "Quảng Bình",
    "Bắc Kạn",
    "Hải Dương",
    "Quảng Nam",
    "Bắc Ninh",
    "Hải Phòng",
    "Quảng Ngãi",
    "Bến Tre",
    "Hậu Giang",
    "Quảng Ninh",
    "Bình Dương",
    'Hòa Bình", "Quảng Trị',
    "Bình Định",
    "Thành phố Hồ Chí Minh",
    "Sóc Trăng",
    "Bình Phước",
    "Hưng Yên",
    "Sơn La",
    "Bình Thuận",
    "Khánh Hòa",
    "Tây Ninh",
    "Cà Mau",
    "Kiên Giang",
    "Thái Bình",
    "Cao Bằng",
    "Kon Tum",
    "Thái Nguyên",
    "Cần Thơ",
    "Lai Châu",
    "Thanh Hóa",
    "Đà Nẵng",
    "Lạng Sơn",
    "Thừa Thiên Huế",
    "Đắk Lắk",
    "Lào Cai",
    "Tiền Giang",
    "Đắk Nông",
    "Lâm Đồng",
    "Trà Vinh",
    "Điện Biên",
    "Long An",
    "Tuyên Quang",
    "Đồng Nai",
    "Nam Định",
    "Vĩnh Long",
    "Đồng Tháp",
    "Nghệ An",
    "Vĩnh Phúc",
    "Gia Lai",
    "Ninh Bình",
    "Yên Bá",
  ];
  let finalTotalPrice = 0;

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/card");
  }, []);

  for (let i = 0; i < data.length; i++) {
    finalTotalPrice += data[i].total_price;
  }

  const applyDiscount = () => {
    if (discount === "DiscountGift1") {
      alert("Apply discount code successfully!");
      setChangePercent(10);
    } else if (discount === "DiscountGift2") {
      alert("Apply discount code successfully!");
      setChangePercent(20);
    } else if (discount === "Gift1") {
      alert("Apply discount code successfully!");
      setChangePercent(3);
    } else if (discount === "Gift2") {
      alert("Apply discount code successfully!");
      setChangePercent(5);
    } else {
      return false;
    }
  };

  return (
    <div className="check-out">
      <div className="contact">
        <div className="form-email">
          <label htmlFor="email">Contact</label>
          <input type="email" placeholder="Email" />
        </div>

        <select name="" id="">
          <option value="">Viet Nam</option>
        </select>

        <div className="name">
          <input type="text" placeholder="First name" />

          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Company (optional)" />

        <input type="text" placeholder="Address" />

        <input type="text" placeholder="Apartment, suite, etc. (optional)" />

        <div className="place">
          <input type="text" placeholder="Ward" />

          <select name="" id="" placeholder="State">
            {city.map((location: any) => {
              return <option value="">{location}</option>;
            })}
          </select>

          <input type="text" placeholder="ZIP Code" />
        </div>

        <input type="text" placeholder="Phone (optional)" />

        <div className="pay-now">Pay Now</div>
      </div>

      <div className="summary">
        <div className="order">
          {data.map((item: any) => {
            return (
              <div className="order-item">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>

                <div className="detail">
                  <div className="name">{item.name}</div>
                  <div className="pot">{item.size}</div>
                  <div className="quantity">Quantity: {item.quantity}</div>
                </div>

                <div className="total-price">${item.total_price}</div>
              </div>
            );
          })}
        </div>

        <div className="discount-code">
          <input
            type="text"
            placeholder="Discount code or gift card"
            value={discount}
            onChange={(e: any) => setDiscount(e.target.value)}
          />

          <button className="apply" onClick={() => applyDiscount()}>
            Apply
          </button>
        </div>

        <div className="final">
          <div className="subtotal">
            Subtotal <p>${finalTotalPrice}</p>
          </div>

          <div className="shipping">
            Shipping Discount <p>{changePercent}%</p>
          </div>

          <div className="total">
            Total{" "}
            {discount !== "" ? (
              <p>
                $
                {Math.round(
                  (finalTotalPrice - finalTotalPrice * (changePercent / 100)) *
                    100
                ) / 100}
              </p>
            ) : (
              <p>${finalTotalPrice}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
