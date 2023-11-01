"use client";
import React, { useState } from "react";
import { Site } from "../_style-components/Site";
import { Container } from "../_style-components/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";

//// import icons
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

///// import image
import images from "@/public/images/logo.webp";

const SiteHeader = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Site>
        <Container>
          <div className="site-header-main">
            <Link href={"/"}>
              <Image src={images} alt="" width={201} height={46} />
            </Link>

            <div className="site-input">
              <input type="text" placeholder="What are you looking for?" />
              <Button type="primary">
                <CiSearch />
              </Button>
            </div>

            <Link href={"/cart"} className="shopping">
              <div className="shopping-cart">
                <FaShoppingCart />

                <div className="number-cart">10</div>
              </div>
            </Link>
          </div>

          <div className="site-main">
            <div className="site-page">
              <Link href={"/shop"}>Shop</Link>
              <Link href={"/holiday"}>Holiday Plants</Link>
              <Link href={"/care"}>Plants Care</Link>
              <Link href={"/subscription"}>Monthly Subscription Box</Link>
              <Link href={"/shopping"}>California Greenhouse Shopping</Link>
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/business"}>For Business</Link>
            </div>

            <Link href={"/log-in"} className="log-in">
              Log In
            </Link>
          </div>

          <div className="response-site">
            <div className="header-response">
              <AiOutlineMenu onClick={() => setDisplay(true)} />

              <Link href={"/"}>
                <Image src={images} alt="" width={201} height={46} />
              </Link>

              <div className="shopping">
                <div className="shopping-cart">
                  <FaShoppingCart />
                  <div className="number-cart">10</div>
                </div>
              </div>
            </div>

            <div className="response-search">
              <input type="text" placeholder="What are you looking for?" />
              <Button type="primary">
                <CiSearch />
              </Button>
            </div>

            {display ? (
              <div className="menu">
                <div className="head">
                  <Link href={"/log-in"} className="log-in">
                    Log In
                  </Link>

                  <AiOutlineClose onClick={() => setDisplay(false)} />
                </div>

                <div className="site-page">
                  <Link href={"/shop"}>Shop</Link>
                  <Link href={"/holiday"}>Holiday Plants</Link>
                  <Link href={"/care"}>Plants Care</Link>
                  <Link href={"/subscription"}>Monthly Subscription Box</Link>
                  <Link href={"/shopping"}>California Greenhouse Shopping</Link>
                  <Link href={"/contact"}>Contact Us</Link>
                  <Link href={"/business"}>For Business</Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Container>
      </Site>
    </>
  );
};

export default SiteHeader;
