"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

///// impotr components
import { CollectionsStyle } from "@/app/_style-components/collections/CollectionsStyle";
import { Container } from "@/app/_style-components/home-page-css/Container";

///// import icons
import { SlArrowRight } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgDisplayGrid } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdCircle, MdOutlineFilterAlt } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

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
          <div className="filter">
            <h4>Filters</h4>

            <div className="filter-option">
              <div className="title">Light</div>

              <form action="">
                <input type="checkbox" value={"low_light"} />
                <label htmlFor="">Low Light</label>
              </form>

              <form action="">
                <input type="checkbox" value={"bright_light"} />
                <label htmlFor="">Bright Light</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Plant Size</div>

              <form action="">
                <input type="checkbox" value={"mini"} />
                <label htmlFor="">Mini (2"-3" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"small"} />
                <label htmlFor="">Small (4" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"medium"} />
                <label htmlFor="">Medium (6" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"large"} />
                <label htmlFor="">Large (8"-10" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"cutting"} />
                <label htmlFor="">Cuttings</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Genus</div>

              <form action="">
                <input type="checkbox" value={"zantedeschia"} />
                <label htmlFor="">Zantedeschia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"alocasia"} />
                <label htmlFor="">Alocasia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"amaryllis"} />
                <label htmlFor="">Amaryllis</label>
              </form>

              <form action="">
                <input type="checkbox" value={"amydrium"} />
                <label htmlFor="">Amydrium</label>
              </form>

              <form action="">
                <input type="checkbox" value={"anthurium"} />
                <label htmlFor="">Anthurium</label>
              </form>

              <form action="">
                <input type="checkbox" value={"aralia"} />
                <label htmlFor="">Aralia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"aralia"} />
                <label htmlFor="">Aralia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"azalea"} />
                <label htmlFor="">Azalea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"begonia"} />
                <label htmlFor="">Begonia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"bromeliad"} />
                <label htmlFor="">Bromeliad</label>
              </form>

              <form action="">
                <input type="checkbox" value={"cactus"} />
                <label htmlFor="">Cactus</label>
              </form>

              <form action="">
                <input type="checkbox" value={"calathea"} />
                <label htmlFor="">Calathea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"carnivorous"} />
                <label htmlFor="">Carnivorous</label>
              </form>

              <form action="">
                <input type="checkbox" value={"castanospermum"} />
                <label htmlFor="">Castanospermum</label>
              </form>

              <form action="">
                <input type="checkbox" value={"chinese_evergreen"} />
                <label htmlFor="">Chinese Evergreen</label>
              </form>

              <form action="">
                <input type="checkbox" value={"clusia"} />
                <label htmlFor="">Clusia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"fern"} />
                <label htmlFor="">Fern</label>
              </form>

              <form action="">
                <input type="checkbox" value={"monstera"} />
                <label htmlFor="">Monstera</label>
              </form>

              <form action="">
                <input type="checkbox" value={"orchid"} />
                <label htmlFor="">Orchid</label>
              </form>

              <form action="">
                <input type="checkbox" value={"palm"} />
                <label htmlFor="">Palm</label>
              </form>

              <form action="">
                <input type="checkbox" value={"philodendron"} />
                <label htmlFor="">Philodendron</label>
              </form>

              <form action="">
                <input type="checkbox" value={"pothos"} />
                <label htmlFor="">Pothos</label>
              </form>

              <form action="">
                <input type="checkbox" value={"snake"} />
                <label htmlFor="">Snake</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succ_euphorbia"} />
                <label htmlFor="">Succ. Euphorbia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_huernia"} />
                <label htmlFor="">Succulent_ Huernia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_all"} />
                <label htmlFor="">Succulent_All</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_orbea"} />
                <label htmlFor="">Succulent_Orbea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_senecio"} />
                <label htmlFor="">Succulent_Senecio</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Type</div>

              <form action="">
                <input type="checkbox" value={"flowering"} />
                <label htmlFor="">Flowering</label>
              </form>

              <form action="">
                <input type="checkbox" value={"potted"} />
                <label htmlFor="">Pre Potted</label>
              </form>

              <form action="">
                <input type="checkbox" value={"rare_plants"} />
                <label htmlFor="">Rare Plants</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulents"} />
                <label htmlFor="">Succulents and Cacti</label>
              </form>

              <form action="">
                <input type="checkbox" value={"tropical"} />
                <label htmlFor="">Tropical Indoor Plant</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Benefits</div>

              <form action="">
                <input type="checkbox" value={"purifier"} />
                <label htmlFor="">Air Purifier</label>
              </form>

              <form action="">
                <input type="checkbox" value={"care"} />
                <label htmlFor="">Easy Care</label>
              </form>

              <form action="">
                <input type="checkbox" value={"pet"} />
                <label htmlFor="">Pet Friendly</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">New</div>

              <form action="">
                <input type="checkbox" value={"arrival"} />
                <label htmlFor="">Arrival</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Sale</div>

              <form action="">
                <input type="checkbox" value={"discounted"} />
                <label htmlFor="">Discounted Items</label>
              </form>
            </div>
          </div>

          <div className="collections">
            <div className="title">
              <Link href={"/"}>Home</Link> <SlArrowRight /> {props.title}
            </div>

            <h1>{props.title}</h1>

            <div className="filter-choice">
              <div className="light">
                Light - Low Light <AiFillCloseCircle />
              </div>

              <div className="plant-size">
                Plant Size - Mini (2"-3" Pot) <AiFillCloseCircle />
              </div>

              <div className="genus">
                Genus - Alocasia <AiFillCloseCircle />
              </div>

              <div className="type">
                Type - Flowering <AiFillCloseCircle />
              </div>

              <div className="benefits">
                Benefits - Air Purifier <AiFillCloseCircle />
              </div>

              <div className="new">
                New - Arrival <AiFillCloseCircle />
              </div>

              <div className="sale">
                Sale - Discounted Items <AiFillCloseCircle />
              </div>

              <button>Remove all filters</button>
            </div>

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
                  <option value="">Date, old to new</option>
                  <option value="">Date, new to old</option>
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
                    <div className="filter-option">
                      <div className="title">Light</div>

                      <form action="">
                        <input type="checkbox" value={"low_light"} />
                        <label htmlFor="">Low Light</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"bright_light"} />
                        <label htmlFor="">Bright Light</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">Plant Size</div>

                      <form action="">
                        <input type="checkbox" value={"mini"} />
                        <label htmlFor="">Mini (2"-3" Pot)</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"small"} />
                        <label htmlFor="">Small (4" Pot)</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"medium"} />
                        <label htmlFor="">Medium (6" Pot)</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"large"} />
                        <label htmlFor="">Large (8"-10" Pot)</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"cutting"} />
                        <label htmlFor="">Cuttings</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">Genus</div>

                      <form action="">
                        <input type="checkbox" value={"zantedeschia"} />
                        <label htmlFor="">Zantedeschia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"alocasia"} />
                        <label htmlFor="">Alocasia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"amaryllis"} />
                        <label htmlFor="">Amaryllis</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"amydrium"} />
                        <label htmlFor="">Amydrium</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"anthurium"} />
                        <label htmlFor="">Anthurium</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"aralia"} />
                        <label htmlFor="">Aralia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"aralia"} />
                        <label htmlFor="">Aralia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"azalea"} />
                        <label htmlFor="">Azalea</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"begonia"} />
                        <label htmlFor="">Begonia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"bromeliad"} />
                        <label htmlFor="">Bromeliad</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"cactus"} />
                        <label htmlFor="">Cactus</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"calathea"} />
                        <label htmlFor="">Calathea</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"carnivorous"} />
                        <label htmlFor="">Carnivorous</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"castanospermum"} />
                        <label htmlFor="">Castanospermum</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"chinese_evergreen"} />
                        <label htmlFor="">Chinese Evergreen</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"clusia"} />
                        <label htmlFor="">Clusia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"fern"} />
                        <label htmlFor="">Fern</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"monstera"} />
                        <label htmlFor="">Monstera</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"orchid"} />
                        <label htmlFor="">Orchid</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"palm"} />
                        <label htmlFor="">Palm</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"philodendron"} />
                        <label htmlFor="">Philodendron</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"pothos"} />
                        <label htmlFor="">Pothos</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"snake"} />
                        <label htmlFor="">Snake</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succ_euphorbia"} />
                        <label htmlFor="">Succ. Euphorbia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succulent_huernia"} />
                        <label htmlFor="">Succulent_ Huernia</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succulent_all"} />
                        <label htmlFor="">Succulent_All</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succulent_orbea"} />
                        <label htmlFor="">Succulent_Orbea</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succulent_senecio"} />
                        <label htmlFor="">Succulent_Senecio</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">Type</div>

                      <form action="">
                        <input type="checkbox" value={"flowering"} />
                        <label htmlFor="">Flowering</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"potted"} />
                        <label htmlFor="">Pre Potted</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"rare_plants"} />
                        <label htmlFor="">Rare Plants</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"succulents"} />
                        <label htmlFor="">Succulents and Cacti</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"tropical"} />
                        <label htmlFor="">Tropical Indoor Plant</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">Benefits</div>

                      <form action="">
                        <input type="checkbox" value={"purifier"} />
                        <label htmlFor="">Air Purifier</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"care"} />
                        <label htmlFor="">Easy Care</label>
                      </form>

                      <form action="">
                        <input type="checkbox" value={"pet"} />
                        <label htmlFor="">Pet Friendly</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">New</div>

                      <form action="">
                        <input type="checkbox" value={"arrival"} />
                        <label htmlFor="">Arrival</label>
                      </form>
                    </div>

                    <div className="filter-option">
                      <div className="title">Sale</div>

                      <form action="">
                        <input type="checkbox" value={"discounted"} />
                        <label htmlFor="">Discounted Items</label>
                      </form>
                    </div>
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
                      <button
                        className="choose-option"
                        onClick={() => {
                          setOpenChooseOptionPopUp(true);
                          setPopUpInfor(item);
                        }}
                      >
                        Choose Options
                      </button>
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
          </div>
        </div>
      </Container>
    </CollectionsStyle>
  );
};

export default Collections;
