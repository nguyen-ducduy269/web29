"use client";
import { useState } from "react";

//// import components
import Bar from "@/app/_components/Bar";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import SiteHeader from "@/app/_components/SiteHeader";
import React from "react";

const Cart = () => {
  const [cardValue, setCardValue] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader cardValue={cardValue} selectedItem={selectedItem} />
      <Footer />
    </>
  );
};

export default Cart;
