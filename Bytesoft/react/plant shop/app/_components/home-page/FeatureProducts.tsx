"use client";
import React, { useState } from "react";
import { Feature } from "../../_style-components/home-page-css/Feature";
import { Container } from "../../_style-components/home-page-css/Container";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import axios from "axios";

///// import images
import bigtree1 from "@/public/images/big-image-tree1.webp";
import smalltree1 from "@/public/images/small-image-tree1.webp";
import bigtree2 from "@/public/images/big-image-tree2.webp";
import smalltree2 from "@/public/images/small-image-tree2.webp";
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";

////// import icons
import { FcGoogle } from "react-icons/fc";

interface Props {
  setSelectedItem: (value: any) => void;
}

const FeatureProducts = (props: Props) => {
  const [cardValue, setCardValue] = useState(1);
  const [choosePlant, setChoosePlant] = useState(0);

  const product = {
    id: "new product",
    name: "Monstera Deliciosa Mint Large Form",
    price: 999.99,
    image:
      "https://houseplantshop.com/cdn/shop/files/bf97e578-2f94-4342-b272-616b51e943ab_75x75_crop_center.png?v=1700069502",
    quantity: cardValue,
    total_price: Math.round(999.99 * cardValue * 100) / 100,
  };

  const onSubmit = () => {
    props.setSelectedItem(Math.random());
    axios.post("http://localhost:4001/card", product);
    setCardValue(1);
  };

  return (
    <Feature>
      <Container>
        <div className="product">
          <div className="product-gallery">
            <div className="main-img">
              {choosePlant == 0 ? (
                <Image src={bigtree1} width={677} height={677} alt="" />
              ) : 1 ? (
                <Image src={bigtree2} width={677} height={677} alt="" />
              ) : (
                ""
              )}
            </div>

            <div className="more-img">
              <Image
                src={smalltree1}
                width={75}
                height={75}
                alt=""
                onClick={() => {
                  setChoosePlant(0);
                }}
              />
              <Image
                src={smalltree2}
                width={75}
                height={75}
                alt=""
                onClick={() => {
                  setChoosePlant(1);
                }}
              />
            </div>
          </div>

          <div className="product-main">
            <h1>Monstera Deliciosa Mint Large Form</h1>
            <div className="price">$999.99</div>

            <div className="form-field-select">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                name=""
                id=""
                min={1}
                placeholder="1"
                value={cardValue}
                onChange={(e: any) => setCardValue(e.target.value)}
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
                onSubmit();
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
            <Link href={""}>View full details</Link>

            <p>Share this:</p>
            <div className="internet-contact">
              <Image src={facebook} width={24} height={24} alt="facebook" />
              <Image src={twitter} width={24} height={24} alt="twitter" />
              <Image src={linked_in} width={24} height={24} alt="linked_in" />
              <Image src={pinterest} width={24} height={24} alt="pinterest" />
            </div>
          </div>
        </div>
      </Container>
    </Feature>
  );
};

export default FeatureProducts;
