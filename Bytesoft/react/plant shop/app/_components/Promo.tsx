import React from "react";
import { Promomosaic } from "../_style-components/Promomosaic";
import { Container } from "../_style-components/Container";

import Link from "next/link";

const Promo = () => {
  return (
    <Promomosaic>
      <Container>
        <div className="promo">
          <div className="left-promo">
            <Link href={""}>
              <div className="house-plant">
                <h1>House Plant Accessories</h1>
                <button>Shop Accessories</button>
              </div>
            </Link>

            <Link href={""}>
              <div className="promotion-item">
                <h1>Promotional Item</h1>
                <button>Shop Gift Cards</button>
              </div>
            </Link>
          </div>

          <div className="right-promo">
            <Link href={""}>
              <div className="new-arrivals">
                <h1>New Arrivals</h1>
                <button>Shop Now</button>
              </div>
            </Link>

            <Link href={""}>
              <div className="seed-packets">
                <h1>Seed Packets</h1>
                <button>Shop Seed</button>
              </div>
            </Link>

            <Link href={""}>
              <div className="shipping">
                <h1>Shipping Infor</h1>
                <button>How We Ship Plants</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="promo-responsive">
          <Link href={""}>
            <div className="house-plant">
              <h1>House Plant Accessories</h1>
              <button>Shop Accessories</button>
            </div>
          </Link>

          <Link href={""}>
            <div className="promotion-item">
              <h1>Promotional Item</h1>
              <button>Shop Gift Cards</button>
            </div>
          </Link>

          <Link href={""}>
            <div className="new-arrivals">
              <h1>New Arrivals</h1>
              <button>Shop Now</button>
            </div>
          </Link>

          <Link href={""}>
            <div className="seed-packets">
              <h1>Seed Packets</h1>
              <button>Shop Seed</button>
            </div>
          </Link>

          <Link href={""}>
            <div className="shipping">
              <h1>Shipping Infor</h1>
              <button>How We Ship Plants</button>
            </div>
          </Link>
        </div>
      </Container>
    </Promomosaic>
  );
};

export default Promo;
