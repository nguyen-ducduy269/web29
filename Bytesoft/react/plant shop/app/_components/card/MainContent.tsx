"use client";
import { Main } from "@/app/_style-components/card-css/Main";
import { Container } from "@/app/_style-components/home-page-css/Container";
import React, { useEffect, useState } from "react";
import Link from "next/link";

////// import icons
import { SlArrowRight } from "react-icons/sl";
import { BsCartPlusFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoDot } from "react-icons/go";
import axios from "axios";

interface Props {
  setSelectedItem: (value: any) => void;
}

const MainContent = (props: Props) => {
  const [data, setData]: any = useState([]);
  const [reloadPage, setReloadPage] = useState(1);
  let finalTotalPrice = 0;

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/card");
  }, [reloadPage]);

  for (let i = 0; i < data.length; i++) {
    finalTotalPrice += data[i].total_price;
  }

  const deleteProduct = (id: any) => {
    if (confirm("Are you sure to delete this product?")) {
      axios.delete(`http://localhost:4001/card/${id}`);
    }
    setReloadPage(Math.random());
    props.setSelectedItem(Math.random());
  };

  return (
    <Main>
      <Container>
        <div className="main-content">
          <div className="title">
            <h1>Your Cart</h1>

            {data.length > 0 ? (
              <div className="subtotal">
                <div className="detail">
                  <p>Subtotal</p>
                  <div className="price">
                    ${Math.round(finalTotalPrice * 100) / 100}
                  </div>
                </div>

                <Link href={"/checkout"}>
                  <button>
                    <FaShoppingCart /> Checkout
                  </button>
                </Link>
              </div>
            ) : (
              <Link href={"/shop"}>
                Continue shopping <SlArrowRight />
              </Link>
            )}
          </div>

          {data.length == 0 ? (
            <div className="main">
              <div className="card"></div>

              <div className="empty">
                <p>Your card is empty</p>
                <button>
                  <Link href={"/shop"}>
                    <BsCartPlusFill /> Continue Shopping
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <>
              {data.map((products: any) => {
                return (
                  <div className="main">
                    <div className="card">
                      <div className="item">
                        <div className="card-item">
                          <div className="items1">
                            <img src={products.image} alt="" />

                            <div className="cart-detail">
                              <div className="name">{products.name}</div>
                              {products.size ? (
                                <div className="size">
                                  <strong>Size:</strong> {products.size}
                                </div>
                              ) : (
                                ""
                              )}
                              <div className="product-price">
                                <strong>Price:</strong> ${products.price}
                              </div>
                            </div>
                          </div>

                          <div className="items2">
                            <div className="quantity">
                              Quantity: {products.quantity}
                            </div>

                            <div className="total-price">
                              ${Math.round(products.total_price * 100) / 100}
                            </div>
                            <div
                              className="delete-button"
                              onClick={() => deleteProduct(products.id)}
                            >
                              <MdDelete />
                            </div>
                          </div>
                        </div>

                        <div className="greenhouse">
                          {products.ca ? (
                            <div className="greenhouse-item">
                              <GoDot /> CA Greenhouse: {products.ca}
                            </div>
                          ) : (
                            ""
                          )}

                          {products.fl ? (
                            <div className="greenhouse-item">
                              <GoDot /> FL Greenhouse: {products.fl}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </Main>
  );
};

export default MainContent;
