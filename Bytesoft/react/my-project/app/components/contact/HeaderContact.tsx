"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { AppDispatch, type RootState } from "@/app/GolbalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "@/app/GolbalRedux/Features/counter/counterSlice";

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
import { ContactTop } from "./header-contact-css/ContactTop";
import { ContactNav } from "./header-contact-css/ContactNav";
import { ContactBanner } from "./header-contact-css/ContactBanner";

const HeaderContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeFlag, setChangeFlag] = useState(coVietNam);
  const [display, setDisplay] = useState(false);

  const { entities } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <header id="header">
        <ContactTop>
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
        </ContactTop>

        <ContactNav>
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
                    <li className="menu-list__item">
                      <Link href="/news" className="menu-list__link">
                        {entities.new}
                      </Link>
                    </li>
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
                        {entities.recruitment}
                      </a>
                    </li>
                    <li className="menu-list__item list-active">
                      <Link href="/contact" className="menu-list__link">
                        <div className="active">{entities.contact}</div>
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
                          {entities.new}
                        </Link>
                      </li>
                      <li className="menu-list__item">
                        <a href="/" className="menu-list__link">
                          {entities.recruitment}
                        </a>
                      </li>
                      <li className="menu-list__item">
                        <Link href="/contact" className="menu-list__link">
                          <div className="active">{entities.contact}</div>
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
        </ContactNav>

        <ContactBanner>
          <div className="title">{entities.contactHeaderTitle}</div>
          <div className="description">{entities.contactHeaderDescription}</div>
          <div className="layout"></div>
        </ContactBanner>
      </header>
    </>
  );
};

export default HeaderContact;
