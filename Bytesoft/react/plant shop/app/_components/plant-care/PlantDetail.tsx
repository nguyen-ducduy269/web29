import React, { useState } from "react";
import Link from "next/link";

import { Container } from "@/app/_style-components/home-page-css/Container";
import { PLantDetailCss } from "@/app/_style-components/plant-care/PlantDetailCss";
import axios from "axios";

interface Props {
  setSelectedItem: (value: any) => void;
}

const PlantDetail = (props: Props) => {
  const plant_care_detail = JSON.parse(
    localStorage.getItem("plant-care-item") || ""
  );
  const [quantity, setQuantity] = useState(1);

  const addToCard = (item: any) => {
    const total_price = item.price * quantity;

    const plantAddToCard = {
      id: item.id,
      name: item.name,
      image: item.detail_image[0].big_image,
      price: item.price,
      ca: item.pot[0].ca,
      fl: item.pot[0].fl,
      quantity: quantity,
      total_price: Math.round(total_price * 100) / 100,
    };

    props.setSelectedItem(Math.random());
    axios.post("http://localhost:4001/card", plantAddToCard);
    alert("Successfull add product to your card! Continue Shopping?");
  };

  return (
    <>
      <PLantDetailCss>
        <Container>
          <div className="title">
            <h4>Care Guide</h4>
            <h1>{plant_care_detail.name} Care</h1>
          </div>
        </Container>

        <div className="meeting">
          <Container>
            <div className="meet">
              <div className="image">
                <img src={plant_care_detail.meet_img} alt="" />
              </div>

              <div className="meet-content">
                <h1>Meet {plant_care_detail.name}</h1>
                <div className="discription">
                  {plant_care_detail.meet_content}
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="condition">
            <div className="main-img">
              <img src={plant_care_detail.condition_img} alt="" />
            </div>

            <div className="condition-detail">
              <div className="light">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-00ee98a6--2.png?v=1606857583"
                  alt=""
                />

                <div className="content">
                  <h3>Light</h3>
                  <p>{plant_care_detail.light}</p>
                </div>
              </div>

              <div className="pet">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-a6039687--1.png?v=1606857645"
                  alt=""
                />

                <div className="content">
                  <h3>Pet Friendly</h3>
                  <p>{plant_care_detail.pet}</p>
                </div>
              </div>

              <div className="water">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-ee98a603--3.png?v=1606857603"
                  alt=""
                />

                <div className="content">
                  <h3>Water</h3>
                  <p>{plant_care_detail.water}</p>
                </div>
              </div>

              <div className="humidity">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-039687e5--5.png?v=1606857658"
                  alt=""
                />

                <div className="content">
                  <h3>Humidity</h3>
                  <p>{plant_care_detail.humidity}</p>
                </div>
              </div>

              <div className="temperature">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-98a60396--4.png?v=1606857620"
                  alt=""
                />

                <div className="content">
                  <h3>Temperature</h3>
                  <p>{plant_care_detail.temperature}</p>
                </div>
              </div>

              <div className="difficult-level">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-9687e5b3--6.png?v=1606857686"
                  alt=""
                />

                <div className="content">
                  <h3>Difficult Level</h3>
                  <p>{plant_care_detail.difficult_level}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="common-problems">
          <Container>
            <div className="problem">
              <div className="problem-content">
                <h1>Common Problems Q&A</h1>
                {plant_care_detail.common_problems.map((problem: any) => {
                  return <p>{problem}</p>;
                })}
              </div>

              <div className="image">
                <img src={plant_care_detail.common_image} alt="" />
              </div>
            </div>
          </Container>
        </div>

        {plant_care_detail.shop.length != 0 ? (
          <Container>
            <div className="shop-detail">
              <h1>Shop Air Plants</h1>

              {plant_care_detail.shop.map((product: any) => {
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
                          <strong>Botanical Name:</strong>{" "}
                          {product.botanical_name}
                        </li>
                        <li>
                          <strong>Description:</strong>{" "}
                          {product.detail_description}
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
                          <input
                            type="text"
                            className="quantity"
                            value={quantity}
                            min={1}
                          />
                          <button
                            className="plus"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
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
                          localStorage.setItem(
                            "detail-products",
                            JSON.stringify(product)
                          );
                        }}
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        ) : (
          ""
        )}
      </PLantDetailCss>
    </>
  );
};

export default PlantDetail;
