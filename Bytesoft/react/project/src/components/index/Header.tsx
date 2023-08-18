import { useState } from "react";

// import image
import coVietNam from "../../image/icon-co-viet-nam.jpg";
import coMeo from "../../image/istockphoto-1144423641-612x612.jpg";

// import components
import { Container } from "../Container";
import { Head } from "./header-css/Head";
import { HeaderTop } from "./header-css/HeaderTop";
import { HeaderNav } from "./header-css/HeaderNav";
import { HeaderBanner } from "./header-css/HeaderBanner";

export const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(coVietNam);
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Head>
        <HeaderTop>
          <Container>
            <div className="main-content">
              <div className="head-left">
                <i className="fa-solid fa-phone-flip"></i>
                <div className="hotline">HOTLINE:1900 2863</div>
              </div>
              <div className="head-right">
                <input type="search" placeholder="Search..." />
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="country">
                  <div onClick={() => setIsDisplay(true)}>
                    <img src={isOpen} alt="" />
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>

                  {isDisplay ? (
                    <div className="country-scoll">
                      <div
                        onClick={() => {
                          setIsOpen(coVietNam);
                          setIsDisplay(false);
                        }}
                      >
                        <img src={coVietNam} alt="" />
                      </div>

                      <div
                        onClick={() => {
                          setIsOpen(coMeo);
                          setIsDisplay(false);
                        }}
                      >
                        <img src={coMeo} alt="" />
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
                  <img src="../src/image/logo.png" alt="" />
                </a>
              </div>

              <div className="nav">
                <span className="show__menu" onClick={() => setDisplay(true)}>
                  <i className="fa-solid fa-bars"></i>
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
                      <i className="fa-solid fa-xmark"></i>
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
                by the readable content.
              </div>
              <button>XEM THÊM</button>
            </div>
          </Container>
        </HeaderBanner>
      </Head>
    </>
  );
};
