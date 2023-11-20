import { Main } from "@/app/_style-components/card-css/Main";
import { Container } from "@/app/_style-components/home-page-css/Container";
import React from "react";
import Link from "next/link";

////// import icons
import { SlArrowRight } from "react-icons/sl";
import { BsCartPlusFill } from "react-icons/bs";

const MainContent = () => {
  return (
    <Main>
      <Container>
        <div className="main-content">
          <div className="title">
            <h1>Your Cart</h1>

            <Link href={"/shop"}>
              Continue shopping <SlArrowRight />
            </Link>
          </div>

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
        </div>
      </Container>
    </Main>
  );
};

export default MainContent;
