"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

////// import images
import logo from "@/public/images/logo.png";

///// import style
import { HeaderMain } from "../_style-components/Header";

const Header = () => {
  return (
    <>
      <HeaderMain>
        <div className="main-header container flex">
          <div className="logo">
            <Image src={logo} alt="" width={40} height={32} />
            <b>Flywere</b>
          </div>

          <div className="nav-link">
            <Link href="/service">Service</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="auth">
            <button
              style={{
                width: "120px",
                height: "32px",
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
                width: "120px",
                height: "32px",
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
        </div>
      </HeaderMain>
    </>
  );
};

export default Header;
