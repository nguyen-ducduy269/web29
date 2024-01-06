"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

///// impotr components
import { CollectionsStyle } from "@/app/_style-components/collections/CollectionsStyle";
import { Container } from "@/app/_style-components/home-page-css/Container";

///// import icons
import { SlArrowRight } from "react-icons/sl";
import { CgDisplayGrid } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdCircle, MdOutlineFilterAlt } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";
import axios from "axios";

interface Props {
  item: string;
  setSelectedItem: (value: any) => void;
  title: string;
}

const Collections = (props: Props) => {
  const [openSortPopUp, setOpenSortPopUp] = useState(false);
  const [openQuickShopPopUp, setOpenQuickShopPopUp] = useState(false);
  const [openChooseOptionPopUp, setOpenChooseOptionPopUp] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [popUpInfor, setPopUpInfor] = useState<any>([]);
  const [changeQuickShopPopUpImg, setChangeQuickShopPopUpImg] = useState(0);
  const [changePot, setChangePot] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setAllProduct(users);
  };

  useEffect(() => {
    fetchData(`http://localhost:4001/${props.item}`);
  }, []);

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
    if (params === 0) {
      return (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
  };

  const onAddToCart = () => {
    const total_price = popUpInfor.price * quantity;

    const productAddToCard = {
      id: popUpInfor.id,
      name: popUpInfor.name,
      image: popUpInfor.main_image,
      size: popUpInfor.pot[changePot].name,
      price: popUpInfor.price,
      ca: popUpInfor.pot[changePot].ca,
      fl: popUpInfor.pot[changePot].fl,
      quantity: quantity,
      total_price: total_price,
    };

    props.setSelectedItem(Math.random());
    axios.post("http://localhost:4001/card", productAddToCard);
  };

  return (
    <CollectionsStyle>
      <Container>
        <div className="shoptify-collection">
          <div className="collections">
            <div className="title">
              <Link href={"/"}>Home</Link> <SlArrowRight /> {props.title}
            </div>

            <h1>{props.title}</h1>

            <div className="sort">
              <div className="sort-by">
                <div className="title">Sort by</div>

                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                </select>
              </div>

              <div className="view">
                View as <CgDisplayGrid />
              </div>
            </div>

            <div className="sort-responsive">
              <div className="sort-by">
                <div className="title" onClick={() => setOpenSortPopUp(true)}>
                  <MdOutlineFilterAlt /> Filter
                </div>
              </div>

              <div className="view">
                View as <CgDisplayGrid />
              </div>
            </div>

            {openSortPopUp == true ? (
              <div className="sort-pop-up">
                <div className="pop-up">
                  <div
                    className="side-bar"
                    onClick={() => setOpenSortPopUp(false)}
                  >
                    Filter <IoCloseSharp />
                  </div>

                  <div className="option">
                    <div className="filter-option">Featured</div>
                    <div className="filter-option">Best Selling</div>
                    <div className="filter-option">Alphabetically, A-Z</div>
                    <div className="filter-option">Alphabetically, Z-A</div>
                    <div className="filter-option">Price, low to high</div>
                    <div className="filter-option">Price, high to low</div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="all-product">
              {allProduct.map((item: any) => {
                return (
                  <div className="product-item">
                    <Link
                      href={"/product"}
                      onClick={() => {
                        localStorage.setItem(
                          "detail-products",
                          JSON.stringify(item)
                        );
                      }}
                    >
                      <img src={item.main_image} alt="" />
                    </Link>

                    <div className="stars">{rateStar(item.rate)}</div>

                    <div className="product-price">from ${item.price}</div>

                    <div className="owner">{item.name}</div>

                    <div className="option">
                      <button
                        className="quick-shop"
                        onClick={() => {
                          setOpenQuickShopPopUp(true);
                          setPopUpInfor(item);
                        }}
                      >
                        Quick shop
                      </button>
                      {item.sold_out == true ? (
                        <button
                          style={{
                            backgroundColor: "#808080ba",
                            border: "unset",
                            color: "#00634b",
                            fontWeight: "600",
                          }}
                        >
                          Sold Out
                        </button>
                      ) : (
                        <button
                          className="choose-option"
                          onClick={() => {
                            setOpenChooseOptionPopUp(true);
                            setPopUpInfor(item);
                          }}
                        >
                          Choose Options
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {openQuickShopPopUp == true ? (
              <div className="quick-shop-pop-up">
                <div className="pop-up">
                  <div className="product-image">
                    <img
                      src={
                        popUpInfor.detail_image[changeQuickShopPopUpImg]
                          .big_image
                      }
                      alt=""
                      className="main-img"
                    />

                    <div className="more-img">
                      {popUpInfor.detail_image.map(
                        (item: any, index: number) => {
                          return (
                            <img
                              src={item.small_image}
                              onClick={() => {
                                setChangeQuickShopPopUpImg(index);
                              }}
                              style={{ cursor: "pointer" }}
                              className={
                                changeQuickShopPopUpImg == index ? "active" : ""
                              }
                              alt=""
                            />
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="content">
                    <div className="detail-information">
                      <ul>
                        <li>
                          <MdCircle /> <strong>Botanical Name :</strong>
                          {popUpInfor.botanical_name}
                        </li>

                        <li>
                          <MdCircle /> <strong>Common Name(s) :</strong>
                          {popUpInfor.common_name}
                        </li>

                        <li>
                          <MdCircle /> <strong>Description :</strong>{" "}
                          {popUpInfor.detail_description}
                        </li>
                      </ul>

                      <div className="covid">{popUpInfor.covid}</div>

                      <div className="share-contact">
                        <p>Share this:</p>
                        <div className="internet-contact">
                          <Image
                            src={facebook}
                            width={24}
                            height={24}
                            alt="facebook"
                          />
                          <Image
                            src={twitter}
                            width={24}
                            height={24}
                            alt="twitter"
                          />
                          <Image
                            src={linked_in}
                            width={24}
                            height={24}
                            alt="linked_in"
                          />
                          <Image
                            src={pinterest}
                            width={24}
                            height={24}
                            alt="pinterest"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="summary">
                      <div className="name">{popUpInfor.name}</div>

                      <div className="price">${popUpInfor.price}</div>

                      <div className="choose-size">
                        <div className="title">Size</div>

                        <div className="button">
                          {popUpInfor.pot.map((item: any, index: number) => {
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
                      </div>

                      {popUpInfor.pot_style ? (
                        <div className="choose-type">
                          <div className="title">Pop Type</div>

                          <div className="type">
                            {popUpInfor.pot_style.map((item: any) => {
                              return (
                                <button
                                  className={
                                    item.status == true ? "active" : ""
                                  }
                                  style={{ cursor: "pointer" }}
                                  key={item.id}
                                >
                                  {item.name}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <form action="">
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
                      </form>

                      {popUpInfor.sold_out == true ? (
                        <>
                          <button
                            style={{
                              height: "48px",
                              color: "white",
                              backgroundColor: "gray",
                              width: "100%",
                              fontWeight: "500",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "unset",
                            }}
                          >
                            Sold Out
                          </button>

                          <button
                            style={{
                              height: "48px",
                              color: "white",
                              backgroundColor: "gray",
                              width: "100%",
                              fontWeight: "500",
                              fontSize: "16px",
                              display: "flex",
                              marginTop: "10px",
                              border: "unset",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Buy with <FcGoogle /> Pay
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            style={{
                              height: "48px",
                              color: "#1e8570",
                              backgroundColor: "white",
                              width: "100%",
                              fontWeight: "500",
                              fontSize: "16px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "10px",
                              border: "1px solid #dddddd",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              onAddToCart();
                              setOpenQuickShopPopUp(false);
                            }}
                          >
                            Add to Cart
                          </button>

                          <button
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
                              cursor: "pointer",
                            }}
                          >
                            Buy with <FcGoogle /> Pay
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div
                    className="exit"
                    onClick={() => setOpenQuickShopPopUp(false)}
                  >
                    <IoCloseSharp />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {openChooseOptionPopUp == true ? (
              <div className="choose-option-pop-up">
                <div className="choose-option">
                  <div className="name">{popUpInfor.name}</div>

                  <div className="price">${popUpInfor.price}</div>

                  <div className="choose-size">
                    <div className="title">Size</div>

                    <div className="button">
                      {popUpInfor.pot.map((item: any, index: number) => {
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
                  </div>

                  {popUpInfor.pot_style ? (
                    <div className="choose-type">
                      <div className="title">Pop Type</div>

                      <div className="type">
                        {popUpInfor.pot_style.map((item: any) => {
                          return (
                            <button
                              className={item.status == true ? "active" : ""}
                              style={{ cursor: "pointer" }}
                              key={item.id}
                            >
                              {item.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <form action="">
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
                  </form>

                  {popUpInfor.sold_out == true ? (
                    <>
                      <button
                        style={{
                          height: "48px",
                          color: "white",
                          backgroundColor: "gray",
                          width: "100%",
                          fontWeight: "500",
                          fontSize: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Sold Out
                      </button>

                      <button
                        style={{
                          height: "48px",
                          color: "white",
                          backgroundColor: "gray",
                          width: "100%",
                          fontWeight: "500",
                          fontSize: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Buy with <FcGoogle /> Pay
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={{
                          height: "48px",
                          color: "#1e8570",
                          backgroundColor: "white",
                          width: "100%",
                          fontWeight: "500",
                          fontSize: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "10px",
                          border: "1px solid #dddddd",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          onAddToCart();
                          setOpenChooseOptionPopUp(false);
                        }}
                      >
                        Add to Cart
                      </button>

                      <button
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
                          cursor: "pointer",
                        }}
                      >
                        Buy with <FcGoogle /> Pay
                      </button>
                    </>
                  )}

                  <div
                    className="exit"
                    onClick={() => setOpenChooseOptionPopUp(false)}
                  >
                    <IoCloseSharp />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="change-page">
              <button>
                <BsChevronDoubleLeft /> Previous Page
              </button>
              <div>1</div>
              <div>2</div>
              <div>...</div>
              <button>
                Next Page <BsChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </CollectionsStyle>
  );
};

export default Collections;
