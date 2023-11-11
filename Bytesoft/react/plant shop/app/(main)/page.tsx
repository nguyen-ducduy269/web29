"use client";
import Bar from "../_components/Bar";
import FeatureProducts from "../_components/FeatureProducts";
import Flickity from "../_components/Flickity";
import Header from "../_components/Header";
import ShotifySection from "../_components/ShotifySection";
import SiteHeader from "../_components/SiteHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Bar />
      <SiteHeader />
      <Flickity />
      <ShotifySection />
      <FeatureProducts />
    </>
  );
}
