"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

////// import images
import logo from "@/public/images/logo.png";
import background from "@/public/images/Bg.png";
import shape1 from "@/public/images/Shape1.png";
import shape2 from "@/public/images/Shape2.png";
import shape3 from "@/public/images/Shape3.png";
import shape4 from "@/public/images/Shape4.png";

///// import style
import { HeaderMain } from "../_style-components/Header";
import { Container } from "../_style-components/Container";

///// import icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImExit } from "react-icons/im";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <HeaderMain>
        <Container className="main-header flex">
          <Link href="/" className="logo">
            <Image src={logo} alt="" width={40} height={32} />
            <b>Flywere</b>
          </Link>

          <div className="nav-link">
            <Link href="/service">Service</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="auth">
            <div className="avatar">D</div>

            <p>Welcome, Duy Nguyen Duc</p>
          </div>

          <div
            className="drop-down"
            onClick={() => {
              setTimeout(handleOpenMenu, 1000);
            }}
          >
            <AiOutlineMenu />
          </div>

          {openMenu ? (
            <div className="menu">
              <div className="close" onClick={() => setOpenMenu(false)}>
                <AiOutlineClose />
              </div>

              <Menu
                mode="inline"
                items={[
                  { label: "Welcome, Nguyễn Đức Duy", key: "account" },
                  { label: "ducduy26092002@gmail.com", key: "email" },
                  { label: "Service", key: "service" },
                  { label: "About Us", key: "about" },
                  { label: "Contact Us", key: "contact" },
                  {
                    label: "Log Out",
                    key: "log-out",
                    danger: true,
                    icon: <ImExit />,
                  },
                ]}
              ></Menu>
            </div>
          ) : (
            ""
          )}
        </Container>

        <Container className="header-content"></Container>

        <Image src={shape1} className="shape1" alt="" />
        <Image src={shape2} className="shape2" alt="" />
        <Image src={shape3} className="shape3" alt="" />
        <Image src={shape4} className="shape4" alt="" />
      </HeaderMain>
    </>
  );
};

export default Header;
