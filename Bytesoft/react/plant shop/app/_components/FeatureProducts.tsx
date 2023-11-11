"use client";
import React, { useState } from "react";
import { Feature } from "../_style-components/Feature";
import { Container } from "../_style-components/Container";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

///// import images
import bigtree1 from "@/public/images/big-image-tree1.webp";
import smalltree1 from "@/public/images/small-image-tree1.webp";
import bigtree2 from "@/public/images/big-image-tree2.webp";
import smalltree2 from "@/public/images/small-image-tree2.webp";
import bigtree3 from "@/public/images/big-image-tree3.jpg";
import smalltree3 from "@/public/images/small-image-tree3.webp";
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";

////// import icons
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoPinterest } from "react-icons/bi";

const FeatureProducts = () => {
  const [choosePlant, setChoosePlant] = useState(0);

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
              ) : 2 ? (
                <Image src={bigtree3} width={677} height={677} alt="" />
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
                  console.log(choosePlant);
                }}
              />
              <Image
                src={smalltree2}
                width={75}
                height={75}
                alt=""
                onClick={() => {
                  setChoosePlant(1);
                  console.log(choosePlant);
                }}
              />
              <Image
                src={smalltree3}
                width={75}
                height={75}
                alt=""
                onClick={() => {
                  setChoosePlant(2);
                  console.log(choosePlant);
                }}
              />
            </div>
          </div>

          <div className="product-main">
            <h1>Monstera Deliciosa Mint Large Form</h1>
            <div className="price">$999.99</div>

            <div className="form-field-select">
              <label htmlFor="">Quantity</label>
              <select name="" id="" aria-label="Quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10+">10+</option>
              </select>
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
