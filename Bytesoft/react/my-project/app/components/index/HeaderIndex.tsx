"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faMagnifyingGlass,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// import image/
import coVietNam from "@/app/image/icon-co-viet-nam.jpg";
import coMeo from "@/app/image/istockphoto-1144423641-612x612.jpg";
import LogoImage from "@/app/image/logo.png";
import img from "@/app/image/slide1.png";
const styling = {
  backgroundImage: `url('${img.src}')`,
};

// import components
import { Head } from "./header-css/Head";
import { HeaderTop } from "./header-css/HeaderTop";
import { HeaderNav } from "./header-css/HeaderNav";
import { HeaderBanner } from "./header-css/HeaderBanner";
import { Container } from "../Container";

const HeaderIndex = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(coVietNam);
  const [display, setDisplay] = useState(false);
  const [newValue, setNewValue] = useState("");

  const addText = () => {
    setNewValue(
      newValue + "Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
    );
  };

  return (
    <>
      <Head style={styling}>
        <HeaderTop>
          <Container>
            <div className="main-content">
              <div className="head-left">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    fontSize: "8px",
                    color: "#1ac667",
                    marginLeft: "23%",
                    marginRight: "4px",
                  }}
                />
                <div className="hotline">HOTLINE:1900 2863</div>
              </div>
              <div className="head-right">
                <input type="search" placeholder="Search..." />
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{
                      marginLeft: "0",
                      marginRight: "0",
                      color: "#1ac667",
                      fontSize: "12px",
                    }}
                  />
                </div>

                <div className="country">
                  <div onClick={() => setIsDisplay(true)}>
                    <Image src={isOpen} alt="" />
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{
                        marginLeft: "0px",
                        fontSize: "9px",
                        color: "black",
                      }}
                    />
                  </div>

                  {isDisplay ? (
                    <div className="country-scoll">
                      <div
                        onClick={() => {
                          setIsOpen(coVietNam);
                          setIsDisplay(false);
                        }}
                      >
                        <Image src={coVietNam} alt="" />
                      </div>

                      <div
                        onClick={() => {
                          setIsOpen(coMeo);
                          setIsDisplay(false);
                        }}
                      >
                        <Image src={coMeo} alt="" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Container>
        </HeaderTop>

        <HeaderNav>
          <Container>
            <div className="nav-content clearfix">
              <div className="logo">
                <a href="#">
                  <Image
                    src={LogoImage}
                    width={188}
                    height={46}
                    alt="logo header"
                  />
                </a>
              </div>

              <div className="nav">
                <span className="show__menu" onClick={() => setDisplay(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </span>

                <div className="menu">
                  <ul className="menu-list clearfix">
                    <li className="menu-list__item list-active">
                      <a href="/" className="menu-list__link">
                        <div className="active">TRANG CHỦ</div>
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        GIỚI THIỆU
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        LĨNH VỰC
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        DỰ ÁN
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/news" className="menu-list__link">
                        TIN TỨC
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        TUYỂN DỤNG
                      </a>
                    </li>

                    <li className="menu-list__item">
                      <a href="/contact" className="menu-list__link">
                        LIÊN HỆ
                      </a>
                    </li>
                  </ul>
                </div>

                {display ? (
                  <div className="menu-respon">
                    <span
                      className="close__menu"
                      onClick={() => setDisplay(false)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </span>

                    <ul className="menu-list clearfix">
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link active">
                          TRANG CHỦ
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          GIỚI THIỆU
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          LĨNH VỰC
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          DỰ ÁN
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/news" className="menu-list__link">
                          TIN TỨC
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          TUYỂN DỤNG
                        </a>
                      </li>

                      <li className="menu-list__item">
                        <a href="/contact" className="menu-list__link">
                          LIÊN HỆ
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Container>
        </HeaderNav>

        <HeaderBanner>
          <Container>
            <div className="banner">
              <div className="title">FROM CONCEPT TO CREATION.</div>
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable content. {newValue}
              </div>
              <button onClick={() => addText()}>XEM THÊM</button>
            </div>
          </Container>
        </HeaderBanner>
      </Head>
    </>
  );
};

export default HeaderIndex;
