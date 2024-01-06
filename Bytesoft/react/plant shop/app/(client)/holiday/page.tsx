"use client";
import React, { useState } from "react";

///// import components
import Collections from "@/app/_components/collections/Collections";
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";

const Holiday = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const item = "holiday_plant";
  const title = "Holiday Plants";

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

export default Holiday;
