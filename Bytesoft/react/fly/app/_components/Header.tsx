"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

////// import images
import logo from "@/public/images/logo.png";

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
        <div className="outsite"></div>

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
            <button
              style={{
                border: "1px solid white",
                color: "white",
                backgroundColor: "#58A7FF",
                borderRadius: "20px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
            <button
              style={{
                border: "1px solid white",
                color: "#58A7FF",
                backgroundColor: "white",
                borderRadius: "20px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
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

              {/* <Menu
                mode="inline"
                onClick={() => setOpenMenu(false)}
                items={[
                  { label: "Service", key: "service" },
                  { label: "About Us", key: "about" },
                  { label: "Contact Us", key: "contact" },
                  { label: "Log In", key: "log-in" },
                  { label: "Sign In", key: "sign-in" },
                ]}
              ></Menu> */}
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

        <Container className="header-content">
          <h2 data-aos="fade-up" data-aos-duration="2500">
            Explore the Colourful World
          </h2>

          <div
            className="line"
            data-aos="fade-up"
            data-aos-duration="2500"
          ></div>

          <p data-aos="fade-up" data-aos-duration="2500">
            FIND YOUR IDEAL HOLIDAY
          </p>

          <Button type="primary" className="button">
            LEARN MORE
          </Button>
        </Container>
      </HeaderMain>
    </>
  );
};

export default Header;
