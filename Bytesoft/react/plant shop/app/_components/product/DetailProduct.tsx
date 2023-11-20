import { Product } from "@/app/_style-components/detail-product/Product";
import { Container } from "@/app/_style-components/home-page-css/Container";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

///// import icons
import { GoChevronRight } from "react-icons/go";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";
import LooReview from "../home-page/LooReview";

const DetailProduct = () => {
  return (
    <Product>
      <Container>
        <div className="head">
          <Link href={"/"}>Home</Link>
          <GoChevronRight />
          Arabica Coffee
        </div>

        <div className="main-content">
          <div className="main-img">
            <img
              src="https://houseplantshop.com/cdn/shop/products/3_Arabica_Coffee_1_592x592.jpg?v=1636129404"
              alt=""
            />

            <div className="more-img">
              <img
                src="https://houseplantshop.com/cdn/shop/products/4_ARABICA_COFFEE_1_75x75_crop_center.jpg?v=1627689722"
                alt=""
              />

              <img
                src="https://houseplantshop.com/cdn/shop/products/1-Arabica-Coffee-4DETAIL_75x75_crop_center.jpg?v=1627689722"
                alt=""
              />

              <img
                src="https://houseplantshop.com/cdn/shop/products/1-Arabica-Coffee-4HOLD_75x75_crop_center.jpg?v=1627689722"
                alt=""
              />

              <img
                src="https://houseplantshop.com/cdn/shop/products/3_Arabica_Coffee_1_75x75_crop_center.jpg?v=1636129404"
                alt=""
              />
            </div>
          </div>

          <div className="detail-information">
            <h1>Arabica Coffee</h1>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">$13.99</div>

            <ul>
              <li>
                <strong>Botanical Name:</strong> Coffea arabica
              </li>
              <li>
                <strong>Common Names:</strong> Arabian Coffee, Mountain Coffee
              </li>
              <li>
                <strong>Description:</strong> The easy-to-care-for Arabian
                Coffee Plant has become popular indoor house plant that can
                produce white flowers and colorful cherries if grown large
                enough. The seeds inside the cherries are actually coffee beans,
                and make up around 60% of the world's coffee production.
                Originally found and documented in Yemen around the 12th
                century, Coffea arabica has a truly global distribution today.
                As a house plant, it requires minimum maintenance and can be put
                outside when the weather warms up.
              </li>
            </ul>
          </div>

          <div className="summary">
            <h4>Size</h4>

            <div className="select-size">
              <button className="active">3" Pot</button>
              <button>4" Pot</button>
            </div>

            <div>
              <p>CA Greenhouse: 0</p>
              <p>Fl Greenhouse: 28</p>
            </div>

            <div className="form">
              <label htmlFor="">Quantity</label>
              <input type="number" name="" id="" min={1} placeholder="1" />
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
              <h1>Arabica Coffee</h1>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="price">$13.99</div>

              <ul>
                <li>
                  <strong>Botanical Name:</strong> Coffea arabica
                </li>
                <li>
                  <strong>Common Names:</strong> Arabian Coffee, Mountain Coffee
                </li>
                <li>
                  <strong>Description:</strong> The easy-to-care-for Arabian
                  Coffee Plant has become popular indoor house plant that can
                  produce white flowers and colorful cherries if grown large
                  enough. The seeds inside the cherries are actually coffee
                  beans, and make up around 60% of the world's coffee
                  production. Originally found and documented in Yemen around
                  the 12th century, Coffea arabica has a truly global
                  distribution today. As a house plant, it requires minimum
                  maintenance and can be put outside when the weather warms up.
                </li>
              </ul>
            </div>

            <div className="summary">
              <h4>Size</h4>

              <div className="select-size">
                <button className="active">3" Pot</button>
                <button>4" Pot</button>
              </div>

              <div>
                <p>CA Greenhouse: 0</p>
                <p>Fl Greenhouse: 28</p>
              </div>

              <div className="form">
                <label htmlFor="">Quantity</label>
                <input type="number" name="" id="" min={1} placeholder="1" />
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
