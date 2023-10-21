import HeaderNews from "@/app/_components/news/HeaderNews";
import MiniNews from "@/app/_components/news/MiniNews";
import React from "react";

const DetailNew = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <HeaderNews />
      <MiniNews params={params.slug} />
    </>
  );
};

export default DetailNew;
