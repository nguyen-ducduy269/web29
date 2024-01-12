import React from "react";
import Link from "next/link";

import { Container } from "@/app/_style-components/home-page-css/Container";

import { CiShoppingBasket } from "react-icons/ci";

const CheckHead = () => {
  return (
    <div className="check">
      <Container>
        <div className="check-head">
          <Link href={"/"}>
            <img
              src="https://cdn.shopify.com/s/files/1/2528/3612/files/HPS-social-proile-pic_copy_x320.png?v=1614304532"
              alt=""
            />
          </Link>

          <Link href={"/all-product"}>
            <CiShoppingBasket />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CheckHead;
