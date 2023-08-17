import { useState } from "react";
// import images
import coVietNam from "../../image/icon-co-viet-nam.jpg";
import coMeo from "../../image/istockphoto-1144423641-612x612.jpg";

// import components
import { Container } from "../Container";
import { NewsTop } from "./css/NewsTop";
import { NewsNav } from "./css/NewsNav";
import { NewsBanner } from "./css/NewsBanner";

export const News = () => {
  const [changeFlag, setChangeFlag] = useState(coVietNam);
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <>
      <header id="header">
        <NewsTop>
          <Container>
            <div className="top">
              <div className="header-left">
                <i className="fa-solid fa-phone-flip"></i>
                <div className="hotline">HOTLINE:1900 2863</div>
              </div>
              <div className="header-right">
                <input type="search" placeholder="Search..." />
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="country">
                  <div className="change" onClick={() => setIsOpen(true)}>
                    <img src={changeFlag} alt="" />
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>

                  {isOpen ? (
                    <div className="country-scoll">
                      <div
                        onClick={() => {
                          setChangeFlag(coVietNam);
                          setIsOpen(false);
                        }}
                      >
                        <img src={coVietNam} alt="" />
                      </div>

                      <div
                        onClick={() => {
                          setChangeFlag(coMeo);
                          setIsOpen(false);
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
        </NewsTop>

        <NewsNav>
          <Container>
            <div className="nav-content clearfix">
              <div className="logo">
                <a href="#">
                  <img src="../src/image/logo.png" alt="" />
                </a>
              </div>

              <div className="nav">
                <div className="menu">
                  <ul className="menu-list clearfix">
                    <li className="menu-list__item">
                      <a href="/" className="menu-list__link">
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
                    <li className="menu-list__item list-active">
                      <a href="/news" className="menu-list__link active">
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
              </div>

              <div id="show-menu">
                <span className="show__menu" onClick={() => setDisplay(true)}>
                  <i className="fa-solid fa-bars"></i>
                </span>

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
        </NewsNav>

        <NewsBanner>
          <div className="title">TIN TỨC</div>
          <div className="description">Trang chủ / Tin tức</div>
          <div className="layout"></div>
        </NewsBanner>
      </header>
    </>
  );
};
