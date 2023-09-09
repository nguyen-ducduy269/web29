"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  faPhoneFlip,
  faMagnifyingGlass,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// import images
import coVietNam from "@/app/image/icon-co-viet-nam.jpg";
import coMeo from "@/app/image/istockphoto-1144423641-612x612.jpg";
import LogoImage from "@/app/image/logo.png";

//// import components
import { Container } from "../Container";
import { NewsTop } from "./header-news-css/NewsTop";
import { NewsNav } from "./header-news-css/NewsNav";
import { NewsBanner } from "./header-news-css/NewsBanner";
import useFetchingData from "@/app/useFetchingData";

const HeaderNews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeFlag, setChangeFlag] = useState(coVietNam);
  const [display, setDisplay] = useState(false);

  const { data: entities } = useFetchingData();
  if (!entities) return;

  return (
    <>
      <header id="header">
        <NewsTop>
          <Container>
            <div className="top">
              <div className="header-left">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  style={{
                    fontSize: "8px",
                    color: "#1ac667",
                    marginLeft: "23%",
                    marginRight: "4px",
                  }}
                />
                <div className="hotline">{entities.hotline}</div>
              </div>
              <div className="header-right">
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
                  <div className="change" onClick={() => setIsOpen(true)}>
                    <Image src={changeFlag} alt="" />
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{
                        marginLeft: "0px",
                        fontSize: "9px",
                        color: "white",
                      }}
                    />
                  </div>

                  {isOpen ? (
                    <div className="country-scoll">
                      <div
                        onClick={() => {
                          setChangeFlag(coVietNam);
                          setIsOpen(false);
                        }}
                      >
                        <Image src={coVietNam} alt="" />
                      </div>

                      <div
                        onClick={() => {
                          setChangeFlag(coMeo);
                          setIsOpen(false);
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
        </NewsTop>

        <NewsNav>
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
                <div className="menu">
                  <ul className="menu-list clearfix">
                    <li className="menu-list__item">
                      <Link href="/" className="menu-list__link">
                        {entities.home}
                      </Link>
                    </li>
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        {entities.details}
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        {entities.area}
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        {entities.project}
                      </a>
                    </li>
                    <li className="menu-list__item list-active">
                      <Link href="/news" className="menu-list__link">
                        <div className="active">{entities.new}</div>
                      </Link>
                    </li>
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        {entities.recruitment}
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <Link href="/contact" className="menu-list__link">
                        {entities.contact}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="show-menu">
                <span className="show__menu" onClick={() => setDisplay(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </span>

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
                        <Link href="/" className="menu-list__link active">
                          {entities.home}
                        </Link>
                      </li>
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          {entities.details}
                        </a>
                      </li>
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          {entities.area}
                        </a>
                      </li>
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          {entities.project}
                        </a>
                      </li>
                      <li className="menu-list__item">
                        <Link href="/news" className="menu-list__link">
                          <div className="active">{entities.new}</div>
                        </Link>
                      </li>
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          {entities.recruitment}
                        </a>
                      </li>
                      <li className="menu-list__item">
                        <Link href="/contact" className="menu-list__link">
                          {entities.contact}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Container>
        </NewsNav>

        <NewsBanner>
          <div className="title">{entities.newsHeaderTitle}</div>
          <div className="description">{entities.newsHeaderDescription}</div>
          <div className="layout"></div>
        </NewsBanner>
      </header>
    </>
  );
};

export default HeaderNews;
