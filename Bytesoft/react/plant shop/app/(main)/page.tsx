"use client";
import { useState } from "react";
import Bar from "../_components/Bar";
import FeatureProducts from "../_components/FeatureProducts";
import Flickity from "../_components/Flickity";
import Header from "../_components/Header";
import ShotifySection from "../_components/ShotifySection";
import SiteHeader from "../_components/SiteHeader";
import Promo from "../_components/Promo";
import Logoist from "../_components/Logoist";
import QuizKitContent from "../_components/QuizKitContent";
import LooReview from "../_components/LooReview";
import PromoInner from "../_components/PromoInner";
import Footer from "../_components/Footer";

export default function Home() {
  const [cardValue, setCardValue] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader cardValue={cardValue} selectedItem={selectedItem} />
      <Flickity />
      <ShotifySection />
      <FeatureProducts
        cardValue={cardValue}
        setCardValue={setCardValue}
        setSelectedItem={setSelectedItem}
      />
      <Promo />
      <Logoist />
      <QuizKitContent />
      <LooReview />
      <PromoInner />
      <Footer />
    </>
  );
}
