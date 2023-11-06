"use client";
import Bar from "../_components/Bar";
import Flickity from "../_components/Flickity";
import Header from "../_components/Header";
import SiteHeader from "../_components/SiteHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Bar />
      <SiteHeader />
      <Flickity />
    </>
  );
}
