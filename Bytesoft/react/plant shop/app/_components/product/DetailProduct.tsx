"use client";
import React from "react";
import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

///// import components
import { Product } from "@/app/_style-components/detail-product/Product";
import { Container } from "@/app/_style-components/home-page-css/Container";
import LooReview from "../home-page/LooReview";

///// import icons
import { GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiStar } from "react-icons/ci";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";

interface Props {
  setSelectedItem: (value: any) => void;
}

const DetailProduct = (props: Props) => {
  const product = JSON.parse(localStorage.getItem("detail-products") || "");
  const [changeImage, setChangeImage] = useState(0); ///// change image
  const [changePot, setChangePot] = useState(0); //// change pot
  const [quantity, setQuantity] = useState(1); //////change quantity

  const rateStar = (params: number) => {
    if (params === 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    }
    if (params === 4) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
        </>
      );
    }
    if (params === 3) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 2) {
      return (
        <>
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 1) {
      return (
        <>
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
  };

  const onChangeImage = (params: number) => {
    setChangeImage(params);
  };

  const total_price = product.price * quantity;

  const productAddToCard = {
    name: product.name,
    image: product.detail_image[0].big_image,
    size: product.pot[changePot].name,
    price: product.price,
    ca: product.pot[changePot].ca,
    fl: product.pot[changePot].fl,
    quantity: quantity,
    total_price: total_price,
  };

  const onAddToCart = () => {
    props.setSelectedItem(Math.random());
    axios.post("http://localhost:4001/card", productAddToCard);
  };

  return (
    <Product>
      <Container>
        <div className="head">
          <Link href={"/"}>Home</Link>
          <GoChevronRight />
          {product.name}
        </div>

        <div className="main-content">
          <div className="main-img">
            <img src={product.detail_image[changeImage].big_image} alt="" />

            <div className="more-img">
              {product.detail_image.map((item: any, index: number) => {
                return (
                  <img
                    src={item.small_image}
                    onClick={() => onChangeImage(index)}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className="detail-information">
            <h1>{product.name}</h1>

            <div className="stars">{rateStar(product.rate)}</div>

            <div className="price">${product.price}</div>

            <ul>
              <li>
                <strong>Botanical Name:</strong> {product.botanical_name}
              </li>
              <li>
                <strong>Common Names:</strong> {product.common_name}
              </li>
              <li>
                <strong>Description:</strong> {product.detail_description}
              </li>
            </ul>
          </div>

          <div className="summary">
            <h4>Size</h4>

            <div className="select-size">
              {product.pot.map((item: any, index: number) => {
                return (
                  <button
                    className={changePot == item.id ? "active" : ""}
                    onClick={() => setChangePot(index)}
                    style={{ cursor: "pointer" }}
                    key={item.id}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div>
              <p>CA Greenhouse: {product.pot[changePot].ca}</p>
              <p>Fl Greenhouse: {product.pot[changePot].fl}</p>
            </div>

            <div className="form">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                name=""
                id=""
                min={1}
                placeholder="1"
                value={quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
              />
            </div>

            <Button
              style={{
                height: "48px",
                color: "#1e8570",
                backgroundColor: "white",
                width: "100%",
                fontWeight: "500",
                fontSize: "16px",
              }}
              onClick={() => {
                console.log("productAddToCard", productAddToCard);
                onAddToCart();
              }}
            >
              Add to Card
            </Button>

            <Button
              style={{
                height: "48px",
                color: "white",
                backgroundColor: "black",
                width: "100%",
                fontWeight: "500",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Buy with <FcGoogle style={{ marginLeft: "7px" }} />
              Pay
            </Button>

            <Link href={""}>More payment options</Link>
            <p>Share this:</p>
            <div className="internet-contact">
              <Image src={facebook} width={24} height={24} alt="facebook" />
              <Image src={twitter} width={24} height={24} alt="twitter" />
              <Image src={linked_in} width={24} height={24} alt="linked_in" />
              <Image src={pinterest} width={24} height={24} alt="pinterest" />
            </div>
          </div>

          <div className="response">
            <div className="detail-information">
              <h1>{product.name}</h1>

              <div className="stars">{rateStar(product.rate)}</div>

              <div className="price">${product.price}</div>

              <ul>
                <li>
                  <strong>Botanical Name:</strong> {product.botanical_name}
                </li>
                <li>
                  <strong>Common Names:</strong> {product.common_name}
                </li>
                <li>
                  <strong>Description:</strong> {product.detail_description}
                </li>
              </ul>
            </div>

            <div className="summary">
              <h4>Size</h4>

              <div className="select-size">
                {product.pot.map((item: any, index: number) => {
                  return (
                    <button
                      className={changePot == item.id ? "active" : ""}
                      onClick={() => setChangePot(index)}
                      style={{ cursor: "pointer" }}
                      key={item.id}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <div>
                <p>CA Greenhouse: {product.pot[changePot].ca}</p>
                <p>Fl Greenhouse: {product.pot[changePot].fl}</p>
              </div>

              <div className="form">
                <label htmlFor="">Quantity</label>
                <input
                  type="number"
                  name=""
                  id=""
                  min={1}
                  placeholder="1"
                  value={quantity}
                  onChange={(e: any) => setQuantity(e.target.value)}
                />
              </div>

              <Button
                style={{
                  height: "48px",
                  color: "#1e8570",
                  backgroundColor: "white",
                  width: "100%",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
                onClick={() => {
                  console.log("productAddToCard", productAddToCard);
                  onAddToCart();
                }}
              >
                Add to Card
              </Button>

              <Button
                style={{
                  height: "48px",
                  color: "white",
                  backgroundColor: "black",
                  width: "100%",
                  fontWeight: "500",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Buy with <FcGoogle style={{ marginLeft: "7px" }} />
                Pay
              </Button>

              <Link href={""}>More payment options</Link>
              <p>Share this:</p>
              <div className="internet-contact">
                <Image src={facebook} width={24} height={24} alt="facebook" />
                <Image src={twitter} width={24} height={24} alt="twitter" />
                <Image src={linked_in} width={24} height={24} alt="linked_in" />
                <Image src={pinterest} width={24} height={24} alt="pinterest" />
              </div>
            </div>
          </div>
        </div>

        <LooReview />
      </Container>
    </Product>
  );
};

export default DetailProduct;
