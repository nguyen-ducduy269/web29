"use client";
import React, { useState } from "react";

///// import components
import Collections from "@/app/_components/collections/Collections";
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";

const Shop = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const item = "all_product";
  const title = "All Plants";

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <Collections
        item={item}
        title={title}
        setSelectedItem={setSelectedItem}
      />
      <Footer />
    </>
  );
};

export default Shop;
