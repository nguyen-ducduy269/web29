import { useState } from "react";
import styled from "styled-components";

// import image
import coVietNam from "../src/image/icon-co-viet-nam.jpg";
import coMeo from "../src/image/istockphoto-1144423641-612x612.jpg";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(coVietNam);

  return (
    <>
      <Header id="header">
        <Container>
          <HeaderTop className="header-top">
            <HeaderLeft className="header-left">
              <i className="fa-solid fa-phone-flip"></i>
              <div className="hotline">HOTLINE:1900 2863</div>
            </HeaderLeft>

            <HeaderRight className="header-right">
              <div className="search">
                <input type="search" placeholder="Search..." />
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>

              <div className="country">
                <div className="option" onClick={() => setIsDisplay(true)}>
                  <a href="">
                    <img src={isOpen} alt="" />
                  </a>
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
            </HeaderRight>
          </HeaderTop>

          <HeaderNav className="header-nav">
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
                      <a href="index.html" className="menu-list__link">
                        <div className="active">TRANG CHỦ</div>
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="introduce.html" className="menu-list__link">
                        GIỚI THIỆU
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="service.html" className="menu-list__link">
                        LĨNH VỰC
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="product.html" className="menu-list__link">
                        DỰ ÁN
                      </a>
                    </li>
                    <li className="menu-list__item list-active">
                      <a href="new.html" className="menu-list__link active">
                        TIN TỨC
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="#" className="menu-list__link">
                        TUYỂN DỤNG
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="contact.html" className="menu-list__link">
                        LIÊN HỆ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="show-menu">
                <span className="show__menu">
                  <i className="fa-solid fa-bars"></i>
                </span>
                <div className="menu-respon">
                  <span className="close__menu">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                  <ul className="menu-list clearfix">
                    <li className="menu-list__item">
                      <a href="index.html" className="menu-list__link active">
                        TRANG CHỦ
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="introduce.html" className="menu-list__link">
                        GIỚI THIỆU
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="service.html" className="menu-list__link">
                        LĨNH VỰC
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="product.html" className="menu-list__link">
                        DỰ ÁN
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="new.html" className="menu-list__link">
                        TIN TỨC
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="#" className="menu-list__link">
                        TUYỂN DỤNG
                      </a>
                    </li>
                    <li className="menu-list__item">
                      <a href="contact.html" className="menu-list__link">
                        LIÊN HỆ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </HeaderNav>

          <div className="head-banner">
            <div className="bs-container">
              <div className="banner">
                <div className="title">FROM CONCEPT TO CREATION.</div>
                <div className="description">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </div>
                <button>XEM THÊM</button>
              </div>
            </div>
          </div>
        </Container>
      </Header>

      <Container>
        <main id="main">
          <AboutUs>
            <div className="outside">
              <img className="maytrai" src="../src/image//maytrai.png" alt="" />
              <img
                className="cautruc1"
                src="../src/image/cautruc1.png"
                alt=""
              />
              <img
                className="cautruc2"
                src="../src/image/cautruc2.png"
                alt=""
              />
              <img className="mayphai" src="../src/image/mayphai.png" alt="" />
            </div>
            <div className="bs-container">
              <div className="bs-row">
                <div className="bs-col">
                  <div className="module module-index">
                    <div className="about-img">
                      <a href="">
                        <img src="../src/image/Untitled-1.png" alt="" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="about-header">
                        <h2 className="title">
                          <b>VỀ CHÚNG TÔI</b>
                        </h2>
                        <div className="more">
                          <img src="../src/image/Rectangle 247.png" alt="" />
                          <div className="line"></div>
                        </div>
                        <div className="other">
                          <div className="line"></div>
                          <img src="../src/image/Rectangle 247.png" alt="" />
                          <div className="line"></div>
                        </div>
                      </div>
                      <div className="about-content">
                        <div className="text">
                          Scarcely on striking packages by so property in
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot. Any meant has cease
                          too the decay. Since party burst am it match. By or
                          blushes between besides offices noisier as. Sending do
                          brought windng compass in. Paid day till shed only
                          fact age its end.
                        </div>
                        <button>Xem thêm</button>
                        <h1>
                          <b>ABOUT US</b>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AboutUs>

          <Activity>
            <div className="bs-container">
              <div className="bs-row">
                <div className="bs-col">
                  <div className="module-activity">
                    <div className="act-title">
                      <h2>
                        <b>LĨNH VỰC HOẠT ĐỘNG</b>
                      </h2>
                      <div className="more">
                        <img src=".../src/image/Rectangle 247.png" alt="" />
                        <div className="line"></div>
                      </div>
                      <div className="other">
                        <div className="line"></div>
                        <img src="../src/image/Rectangle 247.png" alt="" />
                        <div className="line"></div>
                      </div>
                    </div>
                    <div className="act-content">
                      <div className="main-content">
                        <div className="design">
                          <img src="../src/image/01.png" alt="" />
                          <div className="title">
                            <b>THIẾT KẾ KIẾN TRÚC</b>
                          </div>
                          <div className="text">
                            <p>
                              <a href="">
                                Scarcely on striking packages by so property in
                                delicate. Up or well must less rent read walk so
                                be. Easy sold at do hour sing spot.
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="design">
                          <img src="../src/image/02.png" alt="" />
                          <div className="title">
                            <b>THIẾT KẾ KIẾN TRÚC</b>
                          </div>
                          <div className="text">
                            <p>
                              <a href="">
                                Scarcely on striking packages by so property in
                                delicate. Up or well must less rent read walk so
                                be. Easy sold at do hour sing spot.
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="design">
                          <img src="../src/image/03.png" alt="" />
                          <div className="title">
                            <b>THIẾT KẾ KIẾN TRÚC</b>
                          </div>
                          <div className="text">
                            <p>
                              <a href="">
                                Scarcely on striking packages by so property in
                                delicate. Up or well must less rent read walk so
                                be. Easy sold at do hour sing spot.
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="design">
                          <img src="../src/image/04.png" alt="" />
                          <div className="title">
                            <b>THIẾT KẾ KIẾN TRÚC</b>
                          </div>
                          <div className="text">
                            <p>
                              <a href="">
                                Scarcely on striking packages by so property in
                                delicate. Up or well must less rent read walk so
                                be. Easy sold at do hour sing spot.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="content-img">
                        <div className="activity-img">
                          <img
                            className="main-round"
                            src="../src/image/main_round.gif"
                            alt=""
                          />
                          <div className="layer layer1">
                            <div className="layer layer1-1">
                              <img
                                src="../src/image/main_personal2.gif"
                                alt=""
                              />
                            </div>
                            <div className="layer layer1-2">
                              <img
                                src="../src/image/main_personal2_1.gif"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="layer layer2">
                            <div className="layer layer2-1">
                              <img
                                src="../src/image/main_personal3.gif"
                                alt=""
                              />
                            </div>
                            <div className="layer layer2-2">
                              <img
                                src="../src/image/main_personal3_1.gif"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="layer layer3">
                            <div className="layer layer3-1">
                              <img
                                src="../src/image/main_personal4.gif"
                                alt=""
                              />
                            </div>
                            <div className="layer layer3-2">
                              <img
                                src="../src/image/main_personal4_1.gif"
                                alt=""
                              />
                            </div>
                            <div className="layer main-center">
                              <img src="../src/image/main_center.gif" alt="" />
                            </div>

                            <div className="tower1">
                              <img src="../src/image/tower1.gif" alt="" />
                            </div>

                            <div className="tower2">
                              <img src="../src/image/tower2.gif" alt="" />
                            </div>

                            <div className="tower3">
                              <img src="../src/image/tower3.gif" alt="" />
                            </div>

                            <img
                              src="../src/image/main_personal.gif"
                              alt=""
                              className="personal"
                            />

                            <div className="house">
                              <img src="../src/image/home.gif" alt="" />
                            </div>

                            <div className="tree">
                              <img src="../src/image/tree.gif" alt="" />
                            </div>

                            <div className="tree1">
                              <img src="../src/image/tree (1).gif" alt="" />
                            </div>

                            <div className="tree2">
                              <img src="../src/image/tree (2).gif" alt="" />
                            </div>

                            <div className="coint">
                              <img src="../src/image/coin.gif" alt="" />
                            </div>

                            <img
                              src="../src/image/layer6.gif"
                              alt=""
                              className="layer6"
                            />
                            <img
                              src="../src/image/layer5.gif"
                              alt=""
                              className="layer5"
                            />
                            <img
                              className="layer5_1"
                              src="../src/image/layer5_1.gif"
                              alt=""
                            />
                          </div>

                          <div className="layer layer4">
                            <img
                              className="line1"
                              src="../src/image/line1.gif"
                              alt=""
                            />
                            <img
                              className="line2"
                              src="../src/image/line2.gif"
                              alt=""
                            />
                            <img
                              className="line3"
                              src="../src/image/line3.gif"
                              alt=""
                            />
                            <img
                              className="line4"
                              src="../src/image/line4.gif"
                              alt=""
                            />
                          </div>

                          <div className="layer layer5">
                            <img
                              src="../src/image/layer1.gif"
                              alt=""
                              className="lay1"
                            />

                            <img
                              src="../src/image/layer2.gif"
                              alt=""
                              className="lay2"
                            />

                            <img
                              src="../src/image/layer3.gif"
                              alt=""
                              className="lay3"
                            />

                            <img
                              src="../src/image/layer4.gif"
                              alt=""
                              className="lay4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="act-bonus">
                      <b>MARKET</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Activity>

          <Project>
            <div className="bs-container">
              <div className="bs-tab tab-left">
                <div className="tab-container">
                  <div className="tab-control">
                    <h4>DỰ ÁN MỚI NHẤT</h4>
                    <h1>DỰ ÁN NỔI BẬT</h1>
                    <div className="more">
                      <img src="../src/image/Rectangle 247.png" alt="" />
                      <div className="line"></div>
                    </div>
                    <span className="control__show">TẤT CẢ</span>
                    <ul className="control-list">
                      <li
                        className="control-list__item active"
                        tab-show="#tatca"
                      >
                        TẤT CẢ
                      </li>
                      <li className="control-list__item" tab-show="#thuongmai">
                        THƯƠNG MẠI
                      </li>
                      <li className="control-list__item" tab-show="#giaoduc">
                        GIÁO DỤC
                      </li>
                      <li className="control-list__item" tab-show="#benhvien">
                        BỆNH VIỆN
                      </li>
                      <li className="control-list__item" tab-show="#thuongtru">
                        THƯỜNG TRÚ
                      </li>
                      <li className="control-list__item" tab-show="#vanphong">
                        VĂN PHÒNG
                      </li>
                      <li className="control-list__item" tab-show="#taithiet">
                        TÁI THIẾT
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-item active" id="tatca">
                      <div className="multiple-items owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building1.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Giáo dục</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Bệnh viện</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thường trú</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building4.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Văn phòng</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building5.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="thuongmai">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building1.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building4.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building5.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thương mại</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="giaoduc">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building1.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Giáo dục</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Giáo dục</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building4.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Giáo dục</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building5.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Giáo dục</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="benhvien">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Bệnh viện</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Bệnh viện</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Bệnh viện</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building4.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Bệnh viện</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="thuongtru">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thường trú</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Thường trú</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="vanphong">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building1.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Văn phòng</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building4.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Văn phòng</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building5.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Văn phòng</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-item" id="taithiet">
                      <div className="multiple-items">
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building5.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building1.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building2.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            className="project-img"
                            src="../src/image/building3.png"
                            alt=""
                          />
                          <div className="discription">
                            <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                            <div className="more">Tái thiết</div>
                            <button className="mutiple-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup">
                  <div className="main-pop">
                    <img src="../src/image/popup.png" alt="" />
                    <div className="title">
                      <b>DỰ ÁN N04B - NGOẠI GIAO ĐOÀN</b>
                    </div>
                    <div className="main-content">
                      <div className="content">
                        <div className="name">Tên dự án</div>
                        <div className="dis">
                          : Tổ hợp chung cư cao tầng N04B - Khu đoàn Ngoại giao
                          tại Hà Nội
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">Chủ đầu tư</div>
                        <div className="dis">
                          : Công ty Cổ phần Đầu tư Xây dựng Bất động sản Lanmak
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">Hạng mục</div>
                        <div className="dis">
                          : Phần kết cấu thân nhà/ Phần hoàn thiện kiến trúc
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">Địa điểm</div>
                        <div className="dis">
                          : Khu đoàn Ngoại giao, Xuân Tảo, Bắc Từ Liêm, Hà Nội
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">Loại công trình</div>
                        <div className="dis">: Dân dụng, căn hộ chung cư</div>
                      </div>
                      <div className="content">
                        <div className="name">Cấp công trình</div>
                        <div className="dis">: Cấp 1</div>
                      </div>
                      <div className="content">
                        <div className="name">Thời gian thực hiện</div>
                        <div className="dis">: 2013-2015</div>
                      </div>
                    </div>
                  </div>
                  <div className="layout"></div>
                  <div className="close-pop">
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                </div>
                <div className="button">
                  <div className="icon">
                    <a href="">
                      <i className="fa-solid fa-arrow-left"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bonus">
                <b>PROJECTS</b>
              </div>
              <div className="left-img">
                <img src="../src/image/Untitled-4.png" alt="" />
              </div>
              <div className="right-img">
                <img src="../src/image/cautruc2.png" alt="" />
              </div>
            </div>
          </Project>

          <Recruiment>
            <div className="bs-container">
              <div className="bs-col">
                <div className="bs-row">
                  <div className="main-img">
                    <div className="main">
                      <img src="../src/image/main.gif" alt="" />
                    </div>

                    <div className="layer-personal">
                      <div className="personal">
                        <img src="../src/image/main_personal (1).gif" alt="" />
                      </div>
                      <div className="personal1">
                        <img src="../src/image/main_personal_1.gif" alt="" />
                      </div>

                      <div className="personal2">
                        <img src="../src/image/main_personal_2.gif" alt="" />
                      </div>
                    </div>

                    <div className="layer1">
                      <div className="layer1_2">
                        <img src="../src/image/layer1_2.gif" alt="" />
                      </div>

                      <div className="layer1-1">
                        <img src="../src/image/layer1_1.gif" alt="" />
                      </div>

                      <div className="lay1">
                        <img src="../src/image/layer1 (1).gif" alt="" />
                      </div>

                      <div className="layer1_3">
                        <img src="../src/image/layer1_3.gif" alt="" />
                      </div>

                      <div className="layer1_4">
                        <img src="../src/image/layer1_4.gif" alt="" />
                      </div>

                      <div className="layway">
                        <div className="layer151">
                          <img src="../src/image/layer1_5_1.gif" alt="" />
                        </div>
                        <div className="layer152">
                          <img src="../src/image/layer1_5_2.gif" alt="" />
                        </div>
                        <div className="layer153">
                          <img src="../src/image/layer1_5_3.gif" alt="" />
                        </div>
                        <div className="layer154">
                          <img src="../src/image/layer1_5_4.gif" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="layer2">
                      <div className="background-layer">
                        <div className="one">
                          <img src="../src/image/layer2_4 (1).gif" alt="" />
                        </div>

                        <div className="two">
                          <img src="../src/image/layer2_4.gif" alt="" />
                        </div>

                        <div className="broad">
                          <img src="../src/image/layer2 (1).gif" alt="" />
                        </div>

                        <div className="broad-news">
                          <div className="new1">
                            <img src="../src/image/layer2_3 (1).gif" alt="" />
                          </div>
                          <div className="new2">
                            <img src="../src/image/layer2_2.gif" alt="" />
                          </div>
                          <div className="new3">
                            <img src="../src/image/layer2_3.gif" alt="" />
                          </div>

                          <div className="new4">
                            <img src="../src/image/layer2_1.gif" alt="" />
                          </div>
                        </div>

                        <div className="stars">
                          <div className="star1">
                            <img src="../src/image/layer_2_star.gif" alt="" />
                          </div>

                          <div className="star2">
                            <img src="../src/image/layer_2_star1.gif" alt="" />
                          </div>

                          <div className="star3">
                            <img src="../src/image/layer_2_star2.gif" alt="" />
                          </div>

                          <div className="star4">
                            <img src="../src/image/layer_2_star3.gif" alt="" />
                          </div>

                          <div className="star5">
                            <img src="../src/image/layer_2_star4.gif" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="layer3">
                      <div className="under1">
                        <img src="../src/image/layer_main.gif" alt="" />
                      </div>

                      <div className="under2">
                        <img src="../src/image/layer_main.gif" alt="" />
                      </div>

                      <div className="under3">
                        <img src="../src/image/layer_main.gif" alt="" />
                      </div>

                      <div className="under4">
                        <img src="../src/image/layer_main.gif" alt="" />
                      </div>

                      <div className="layway">
                        <div className="layer151">
                          <img src="../src/image/layer1_5_1.gif" alt="" />
                        </div>
                        <div className="layer152">
                          <img src="../src/image/layer1_5_2.gif" alt="" />
                        </div>
                        <div className="layer153">
                          <img src="../src/image/layer1_5_3.gif" alt="" />
                        </div>
                        <div className="layer154">
                          <img src="../src/image/layer1_5_4.gif" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h1>
                      <b>TUYỂN DỤNG</b>
                    </h1>
                    <div className="more">
                      <img src="../src/image/Rectangle 247.png" alt="" />
                      <div className="line"></div>
                    </div>
                    <div className="other">
                      <div className="line"></div>
                      <img src="../src/image/Rectangle 247.png" alt="" />
                      <div className="line"></div>
                    </div>
                    <div className="text">
                      Resources exquisite set arranging moonlight sem him
                      household had. Months had too ham cousin remove far
                      spirit. She procuring the why performed continual
                      improving.
                    </div>
                    <button>NỘP ĐƠN </button>
                    <div className="bonus">
                      <b>RECRUITMENT</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Recruiment>

          <LastestNew>
            <div className="bs-container">
              <div className="bs-col">
                <div className="bs-row">
                  <div className="news_module">
                    <div className="title">
                      <b>TIN MỚI NHẤT</b>
                    </div>
                    <div className="more">
                      <div className="line"></div>
                      <img src="../src/image/Rectangle 247.png" alt="" />
                      <div className="line"></div>
                    </div>
                    <div className="main-content">
                      <div className="content">
                        <img src="../src/image/news1.png" alt="" />
                        <div className="discription">
                          <div className="heading">
                            <div className="clock">
                              <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="text">5.december.2020</div>
                            <div className="block">|</div>
                            <div className="eye">
                              <i className="fa-regular fa-eye"></i>
                            </div>
                            <div className="view">328</div>
                          </div>
                          <div className="text">
                            Lorem ipsum dolor sit amet aenean nisi sociis
                            ipsum...
                          </div>
                          <div className="button">
                            <h4>Xem thêm</h4>
                            <button>+</button>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <img src="../src/image/news1.png" alt="" />
                        <div className="discription">
                          <div className="heading">
                            <div className="clock">
                              <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="text">5.december.2020</div>
                            <div className="block">|</div>
                            <div className="eye">
                              <i className="fa-regular fa-eye"></i>
                            </div>
                            <div className="view">328</div>
                          </div>
                          <div className="text">
                            Lorem ipsum dolor sit amet aenean nisi sociis
                            ipsum...
                          </div>
                          <div className="button">
                            <h4>Xem thêm</h4>
                            <button>+</button>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <img src="../src/image/news1.png" alt="" />
                        <div className="discription">
                          <div className="heading">
                            <div className="clock">
                              <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="text">5.december.2020</div>
                            <div className="block">|</div>
                            <div className="eye">
                              <i className="fa-regular fa-eye"></i>
                            </div>
                            <div className="view">328</div>
                          </div>
                          <div className="text">
                            Lorem ipsum dolor sit amet aenean nisi sociis
                            ipsum...
                          </div>
                          <div className="button">
                            <h4>Xem thêm</h4>
                            <button>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="news-img">
                    <img src="../src/image/world.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </LastestNew>

          <Last>
            <button className="xemthem">XEM TIẾP</button>
            <div className="bonus">
              <b>LATEST NEWS</b>
            </div>
          </Last>
        </main>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding-left: 7%;
`;

/////// Header
const Header = styled.div`
  min-height: 810px;
  background-image: url(../src/image/slide1.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

/// Header Top
const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  line-height: 33px;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  i {
    color: #1ac667;
    font-size: 8px;
  }
  .hotline {
    font-size: 11px;
    color: #1d3d82;
    font-style: italic;
  }
`;

const HeaderRight = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 14px;
  .search {
    margin-left: 10px;
    width: 47%;
    position: relative;
    input {
      border-color: unset;
      border-radius: 10px;
      width: 100%;
    }
    input::placeholder {
      padding-left: 10px;
      font-size: 10px;
      color: #1d3d82;
      font-style: italic;
    }
    .icon {
      position: absolute;
      top: 0;
      right: 5px;
      font-size: 8px;
      color: #1ac667;
    }
  }

  .country {
    width: 36px;
    height: 20px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white;
    img {
      width: 20px;
      height: 14px;
    }
    .option {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2px;
      i {
        font-size: 8px;
        color: #1d3d82;
      }
    }
    .country-scoll {
      padding-top: 4px;
      width: 36px;
      height: 40px;
      position: absolute;
      bottom: -46px;
      background-color: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;
      div {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

////// Header Nav
const HeaderNav = styled.div`
  height: 63px;
  .nav-content {
    display: flex;
    justify-content: space-between;
    .nav {
      .menu {
        .menu-list {
          display: flex;
          justify-content: space-between;
          list-style: none;
          gap: 10px;
          a {
            width: 81px;
            text-decoration: none;
            color: #fff;
            font-size: 11px;
            font-weight: 600;
            display: block;
            white-space: nowrap;
            height: 27px;
            line-height: 27px;
            text-align: center;
            .active {
              display: block;
              width: 81px;
              background-color: #1bcd8d;
              height: 27px;
              text-align: center;
              line-height: 27px;
            }
          }
        }
      }
    }
    #show-menu {
      display: none;
    }
  }
`;
/////////// Main
const AboutUs = styled.div`
  position: relative;
  .module-index {
    display: flex;
    .about-img {
      img {
        width: 500px;
        height: 353px;
        margin-left: 114px;
        margin-top: 45px;
        position: relative;
        z-index: 1;
      }
    }
    .content {
      margin-top: 50px;
      .about-header {
        width: 100%;
        .title {
          font-size: 36px;
          padding-left: 32px;
          padding-top: 29px;
          color: #1d407d;
        }
        .more {
          width: 100%;
          display: flex;
          margin-left: 55px;
          margin-top: 18px;
          img {
            width: 11px;
            height: 11px;
          }
          .line {
            width: 79px;
            height: 2px;
            background-color: #8397b9;
            margin-left: 6px;
            margin-top: 5px;
          }
        }
        .other {
          display: none;
        }
      }

      .about-content {
        margin-top: 32px;
        margin-left: 36px;
        .text {
          font-size: 12px;
          width: 390px;
          line-height: 2;
          margin-bottom: 27px;
          color: #1d407d;
          font-style: italic;
        }
        button {
          width: 125px;
          height: 34px;
          margin-left: 3px;
          font-size: 12px;
          background-color: #1bcd8d;
          color: white;
        }
        h1 {
          position: absolute;
          bottom: -67px;
          margin-top: 4px;
          font-size: 74px;
          margin-left: -18px;
          color: white;
          text-shadow: 1px 1px 1px green, 0px 0px green;
          animation: nut 2s infinite alternate;
        }
        @keyframes nut {
          from {
            bottom: -67px;
          }
          to {
            bottom: -80px;
          }
        }
      }
    }
  }
  .outside {
    .maytrai {
      position: absolute;
      top: -312px;
      left: -100px;
      width: 315px;
      z-index: -1;
      animation: maytrai 4s infinite alternate;
    }
    @keyframes maytrai {
      from {
        left: -100px;
      }
      to {
        left: -30px;
      }
    }
    .cautruc1 {
      position: absolute;
      position: absolute;
      top: -100px;
      left: 36%;
      width: 428px;
      z-index: -1;
      height: 250px;
      animation: cautruc1 3s infinite alternate;
    }
    @keyframes cautruc1 {
      from {
        transform: rotate(3deg);
      }
      to {
        transform: rotate(-10deg);
      }
    }
    .cautruc2 {
      position: absolute;
      top: 193px;
      width: 300px;
      z-index: -1;
      left: 187px;
      animation: cautruc2 3s infinite alternate;
    }
    @keyframes cautruc2 {
      from {
        transform: rotate(-15deg);
      }
      to {
        transform: rotate(5deg);
      }
    }
    .mayphai {
      position: absolute;
      right: -150px;
      width: 403px;
      top: 62%;
      z-index: -1;
      animation: mayphai 4s infinite alternate;
    }
    @keyframes mayphai {
      from {
        right: -150px;
      }
      to {
        right: -100px;
      }
    }
  }
`;

const Activity = styled.div`
  margin-top: 168px;
  height: 100%;
  width: 100%;
  height: 100%;
  .module-activity {
    .act-title {
      width: 100%;
      height: 100px;
      margin-top: 45px;
      margin-left: 120px;
      h2 {
        font-size: 36px;
        margin-bottom: 14px;
        word-spacing: -4px;
        color: #1d407d;
      }
      .more {
        display: flex;
        img {
          width: 12px;
          height: 12px;
          margin-left: 13px;
          margin-top: 4px;
          margin-right: 11px;
        }
        .line {
          width: 78px;
          height: 2px;
          background-color: #8397b9;
          margin-top: 9px;
        }
      }
      .other {
        display: none;
      }
    }

    .act-content {
      position: relative;
      display: flex;
      .main-content {
        .design {
          width: 380px;
          height: 59px;
          margin-left: 125px;
          position: relative;
          img {
            position: absolute;
            top: -12px;
            width: 37px;
            left: 14px;
            z-index: -1;
          }
          .title {
            margin-left: 42px;
            font-size: 14px;
            margin-top: 32px;
            word-spacing: -2px;
            color: #1d407d;
          }
          .text {
            margin-left: 34px;
            margin-top: 5px;
            height: 20px;
            padding-top: 3px;
            padding-left: 8px;
            font-size: 11px;
            border-top-left-radius: 3px;
            position: relative;
            background: linear-gradient(
              to right,
              rgba(42, 241, 158) 0,
              rgba(255, 255, 255) 60%
            );
            &::before {
              content: "";
              position: absolute;
              right: 0;
              left: 0px;
              top: 0px;
              height: 43px;
              width: 100%;
              border-radius: 5px;
              background: linear-gradient(
                to right,
                rgba(10, 178, 231) 0,
                rgba(255, 255, 255) 60%
              );
              z-index: -1;
            }
            &::after {
              content: "";
              position: absolute;
              right: 0px;
              left: 2px;
              bottom: -21px;
              height: 40px;
              width: 100%;
              background-color: #fff;
              border-top: none;
              border-radius: 5px;
              z-index: 0;
            }
            p {
              position: absolute;
              z-index: 1;
              a {
                text-decoration: none;
                color: #1d407d;
              }
            }
            &:hover {
              height: 43px;
              border-radius: 5px;
              position: relative;
              animation: mymove 1s infinite;
              background: linear-gradient(to right, #2af19e, #fff);
              @keyframes mymove {
                from {
                  left: 0px;
                }
                to {
                  left: -15px;
                }
              }
              &::before {
                height: 0;
              }
              &::after {
                height: 0;
              }
            }
          }
        }
      }
      .content-img {
        .activity-img {
          position: relative;
          width: 490px;
          height: 300px;
          margin-left: 58px;
          margin-top: 45px;
          .main-round {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .layer {
            position: absolute;
          }
          .layer1 {
            position: absolute;
            width: 37px;
            height: 58px;
            left: 35%;
            top: 64px;
            .layer1-1 {
              width: 100%;
              height: 100%;
              img {
                width: 53px;
                position: absolute;
                height: 100%;
                margin-left: 4px;
                animation: layer1-1 5s infinite alternate;
              }
              @keyframes layer1-1 {
                from {
                  top: 0px;
                }
                to {
                  top: 55px;
                }
              }
            }
            .layer1-2 {
              position: absolute;
              width: 8px;
              left: 28px;
              height: 47px;
              top: 18px;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                animation: layer1-2 5s infinite alternate;
              }
              @keyframes layer1-2 {
                from {
                  top: 0px;
                }
                to {
                  top: 30px;
                }
              }
            }
          }
          .layer2 {
            position: absolute;
            width: 76px;
            height: 69px;
            right: 29%;
            top: 87px;
            overflow: hidden;
            .layer2-1 {
              img {
                width: 64px;
                position: absolute;
                height: 42px;
                margin-left: 21px;
                top: 18px;
                animation: layer2-1 5s infinite alternate;
              }
              @keyframes layer2-1 {
                from {
                  top: 18px;
                }
                to {
                  top: 72px;
                }
              }
            }
            .layer2-2 {
              position: absolute;
              width: 32px;
              left: -23px;
              height: 10px;
              top: 48px;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 25px;
                animation: layer2-2 5s infinite alternate;
              }
              @keyframes layer2-2 {
                from {
                  top: 0px;
                }
                to {
                  top: 25px;
                }
              }
            }
          }
          .layer3 {
            position: absolute;
            width: 195px;
            height: 157px;
            right: 30%;
            top: 56px;
            .layer3-1 {
              width: 100%;
              height: 100%;
              img {
                width: 22px;
                position: absolute;
                height: 50px;
                top: -40px;
                right: 30px;
                animation: layer3-1 5s infinite alternate;
              }
              @keyframes layer3-1 {
                from {
                  top: -3px;
                }
                to {
                  top: -40px;
                }
              }
            }
            .layer3-2 {
              position: absolute;
              width: 100%;
              height: 100%;
              img {
                width: 23px;
                height: 59px;
                top: -33px;
                right: 33px;
                position: absolute;
              }
            }
            .main-center {
              position: absolute;
              width: 194px;
              height: 121px;
              left: -14px;
              top: 20px;
              z-index: 3;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .tower1 {
              position: absolute;
              width: 38px;
              height: 72px;
              top: -4px;
              left: 32%;
              z-index: 2;
              animation: tower1 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes tower1 {
              0%,
              22%,
              97%,
              100% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              25%,
              95% {
                transform: scale(1);
              }
            }
            .tower2 {
              position: absolute;
              width: 41px;
              height: 91px;
              top: -44px;
              left: 51%;
              animation: tower2 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes tower2 {
              0%,
              100%,
              32%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              35%,
              95% {
                transform: scale(1);
              }
            }
            .tower3 {
              position: absolute;
              width: 66px;
              height: 92px;
              top: 104px;
              right: 1px;
              overflow: hidden;
              img {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                animation: tower3 10s infinite alternate;
              }
              @keyframes tower3 {
                0%,
                100%,
                42%,
                97% {
                  transform: scale(0);
                  transform-origin: bottom center;
                }
                45%,
                95% {
                  transform: scale(1);
                }
              }
            }
            .personal {
              position: absolute;
              width: 50px;
              height: 50px;
              top: 64px;
              right: 46px;
              z-index: 3;
              animation: personal 10s infinite alternate;
            }
            @keyframes personal {
              0%,
              20% {
                opacity: 0;
              }
              21%,
              100% {
                opacity: 1;
              }
            }
            .house {
              position: absolute;
              width: 46px;
              height: 40px;
              right: 65%;
              top: 62px;
              z-index: 3;
              animation: house 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes house {
              0%,
              100%,
              15%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              20%,
              95% {
                transform: scale(1);
              }
            }
            .tree {
              position: absolute;
              height: 17px;
              width: 7px;
              left: 57px;
              top: 91px;
              z-index: 3;
              animation: tree 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree {
              0%,
              10%,
              100%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              15%,
              95% {
                transform: scale(1);
              }
            }
            .tree1 {
              position: absolute;
              height: 12px;
              width: 5px;
              left: 20px;
              top: 76px;
              z-index: 3;
              animation: tree1 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree1 {
              0%,
              100%,
              20%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              25%,
              95% {
                transform: scale(1);
              }
            }
            .tree2 {
              position: absolute;
              height: 12px;
              width: 5px;
              left: 14px;
              top: 76px;
              z-index: 3;
              animation: tree2 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree2 {
              0%,
              100%,
              25%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              30%,
              95% {
                transform: scale(1);
              }
            }
            .coint {
              position: absolute;
              width: 20px;
              height: 20px;
              left: 11px;
              top: 90px;
              animation: coint 11s infinite alternate;
              z-index: 3;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes coint {
              0%,
              100%,
              30%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              35%,
              95% {
                transform: scale(1);
              }
            }
            .layer6 {
              position: absolute;
              width: 35px;
              height: 35px;
              top: -23px;
              left: 27%;
            }
            .layer5 {
              position: absolute;
              width: 90px;
              left: -22px;
              height: 29px;
              top: 51px;
              z-index: 1;
            }
            .layer5_1 {
              position: absolute;
              width: 17px;
              left: -8px;
              height: 12px;
              top: 33%;
              z-index: 2;
            }
          }
          .layer4 {
            position: absolute;
            width: 490px;
            height: 100%;
            .line1 {
              position: absolute;
              top: 60px;
              right: 106px;
              z-index: -1;
            }
            .line2 {
              position: absolute;
              left: 115px;
              top: 58px;
              z-index: -1;
            }
            .line3 {
              position: absolute;
              left: 110px;
              bottom: 66px;
              z-index: -1;
            }
            .line4 {
              position: absolute;
              right: 107px;
              bottom: 73px;
              z-index: -1;
            }
          }
          .layer5 {
            position: absolute;
            width: 490px;
            height: 100%;
            .lay1 {
              position: absolute;
              bottom: 6%;
              left: 6%;
              width: 90px;
              height: 92px;
              animation: lay1 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay1 {
              0% {
                bottom: 6%;
                left: 6%;
              }
              2.5% {
                bottom: 13.2%;
                left: -0.2%;
              }

              5% {
                bottom: 20.4%;
                left: -4.4%;
              }

              7.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              10% {
                bottom: 34.8%;
                left: -8.7%;
              }

              12.5% {
                bottom: 42%;
                left: -9.1%;
              }

              15% {
                bottom: 49.2%;
                left: -8.4%;
              }

              17.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              20% {
                bottom: 63.6%;
                left: -3.7%;
              }

              22.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              25% {
                bottom: 78.5%;
                left: 6.3%;
              }
              27.5% {
                bottom: 83.5%;
                left: 12%;
              }

              30% {
                bottom: 86.7%;
                left: 17.7%;
              }

              32.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              35% {
                bottom: 90.2%;
                left: 29.1%;
              }

              37.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              40% {
                bottom: 91.9%;
                left: 40.5%;
              }

              42.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              45% {
                bottom: 89.1%;
                left: 51.9%;
              }

              47.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              50% {
                bottom: 85.9%;
                left: 62.3%;
              }
              52.5% {
                bottom: 80%;
                left: 70.6%;
              }

              55% {
                bottom: 66.1%;
                left: 83.4%;
              }

              57.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              60% {
                bottom: 48.3%;
                left: 90.4%;
              }

              62.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              65% {
                bottom: 34.5%;
                left: 89.4%;
              }

              67.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              70% {
                bottom: 20.7%;
                left: 85.4%;
              }

              72.5% {
                bottom: 13.8%;
                left: 80%;
              }

              75% {
                bottom: -0.1%;
                left: 65%;
              }
              77.5% {
                bottom: -2.3%;
                left: 59%;
              }

              80% {
                bottom: -3.8%;
                left: 53%;
              }

              82.5% {
                bottom: -5.7%;
                left: 47%;
              }

              85% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              87.5% {
                bottom: -8%;
                left: 35%;
              }

              90% {
                bottom: -7.7%;
                left: 29%;
              }

              92.5% {
                bottom: -6.4%;
                left: 23%;
              }

              95% {
                bottom: -3.7%;
                left: 17%;
              }

              97.5% {
                bottom: 0.2%;
                left: 11%;
              }
              100% {
                bottom: 6%;
                left: 6%;
              }
            }
            .lay2 {
              position: absolute;
              bottom: 13.8%;
              left: 80%;
              width: 90px;
              height: 92px;
              animation: lay2 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay2 {
              0% {
                bottom: 13.8%;
                left: 80%;
              }

              2.5% {
                bottom: -0.1%;
                left: 65%;
              }
              5% {
                bottom: -2.3%;
                left: 59%;
              }

              7.5% {
                bottom: -3.8%;
                left: 53%;
              }

              10% {
                bottom: -5.7%;
                left: 47%;
              }

              12.5% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              15% {
                bottom: -8%;
                left: 35%;
              }

              17.5% {
                bottom: -7.7%;
                left: 29%;
              }

              20% {
                bottom: -6.4%;
                left: 23%;
              }

              22.5% {
                bottom: -3.7%;
                left: 17%;
              }

              25% {
                bottom: 0.2%;
                left: 11%;
              }
              27.5% {
                bottom: 6%;
                left: 6%;
              }
              30% {
                bottom: 6%;
                left: 6%;
              }
              32.5% {
                bottom: 13.2%;
                left: -0.2%;
              }

              35% {
                bottom: 20.4%;
                left: -4.4%;
              }

              37.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              40% {
                bottom: 34.8%;
                left: -8.7%;
              }

              42.5% {
                bottom: 42%;
                left: -9.1%;
              }

              45% {
                bottom: 49.2%;
                left: -8.4%;
              }

              47.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              50% {
                bottom: 63.6%;
                left: -3.7%;
              }

              52.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              55% {
                bottom: 78.5%;
                left: 6.3%;
              }
              57.5% {
                bottom: 83.5%;
                left: 12%;
              }

              60% {
                bottom: 86.7%;
                left: 17.7%;
              }

              62.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              65% {
                bottom: 90.2%;
                left: 29.1%;
              }

              67.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              70% {
                bottom: 91.9%;
                left: 40.5%;
              }

              72.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              75% {
                bottom: 89.1%;
                left: 51.9%;
              }

              77.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              80% {
                bottom: 85.9%;
                left: 62.3%;
              }
              82.5% {
                bottom: 80%;
                left: 72.6%;
              }

              85% {
                bottom: 62.1%;
                left: 85.4%;
              }

              87.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              90% {
                bottom: 48.3%;
                left: 90.4%;
              }

              92.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              95% {
                bottom: 34.5%;
                left: 89.4%;
              }

              97.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              100% {
                bottom: 20.7%;
                left: 85.4%;
              }
            }

            .lay3 {
              position: absolute;
              width: 90px;
              height: 100px;
              bottom: 80%;
              left: 72.6%;
              animation: lay3 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay3 {
              0% {
                bottom: 80%;
                left: 72.6%;
              }

              2.5% {
                bottom: 62.1%;
                left: 85.4%;
              }

              5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              7.5% {
                bottom: 48.3%;
                left: 90.4%;
              }

              10% {
                bottom: 41.4%;
                left: 91.4%;
              }

              12.5% {
                bottom: 34.5%;
                left: 89.4%;
              }

              15% {
                bottom: 27.6%;
                left: 88.4%;
              }

              17.5% {
                bottom: 20.7%;
                left: 85.4%;
              }

              20% {
                bottom: 13.8%;
                left: 80%;
              }

              22.5% {
                bottom: -0.1%;
                left: 65%;
              }
              25% {
                bottom: -2.3%;
                left: 59%;
              }

              27.5% {
                bottom: -3.8%;
                left: 53%;
              }

              30% {
                bottom: -5.7%;
                left: 47%;
              }

              32.5% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              35% {
                bottom: -8%;
                left: 35%;
              }

              37.5% {
                bottom: -7.7%;
                left: 29%;
              }

              40% {
                bottom: -6.4%;
                left: 23%;
              }

              42.5% {
                bottom: -3.7%;
                left: 17%;
              }

              45% {
                bottom: 0.2%;
                left: 11%;
              }
              47.5% {
                bottom: 6%;
                left: 6%;
              }

              50% {
                bottom: 13.2%;
                left: -0.2%;
              }

              55% {
                bottom: 20.4%;
                left: -4.4%;
              }

              57.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              60% {
                bottom: 34.8%;
                left: -8.7%;
              }

              62.5% {
                bottom: 42%;
                left: -9.1%;
              }

              65% {
                bottom: 49.2%;
                left: -8.4%;
              }

              67.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              70% {
                bottom: 63.6%;
                left: -3.7%;
              }

              72.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              75% {
                bottom: 78.5%;
                left: 6.3%;
              }
              77.5% {
                bottom: 83.5%;
                left: 12%;
              }

              80% {
                bottom: 86.7%;
                left: 17.7%;
              }

              82.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              85% {
                bottom: 90.2%;
                left: 29.1%;
              }

              87.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              90% {
                bottom: 91.9%;
                left: 40.5%;
              }

              92.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              95% {
                bottom: 89.1%;
                left: 51.9%;
              }

              97.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              100% {
                bottom: 85.9%;
                left: 62.3%;
              }
            }
            .lay4 {
              position: absolute;
              width: 92px;
              height: 104px;
              bottom: 78.5%;
              left: 6.3%;
              animation: lay4 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay4 {
              0% {
                bottom: 78.5%;
                left: 6.3%;
              }
              2.5% {
                bottom: 83.5%;
                left: 12%;
              }

              5% {
                bottom: 86.7%;
                left: 17.7%;
              }

              7.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              10% {
                bottom: 90.2%;
                left: 29.1%;
              }

              12.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              15% {
                bottom: 91.9%;
                left: 40.5%;
              }

              17.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              20% {
                bottom: 89.1%;
                left: 51.9%;
              }

              22.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              25% {
                bottom: 85.9%;
                left: 62.3%;
              }
              27.5% {
                bottom: 80%;
                left: 72.6%;
              }

              30% {
                bottom: 62.1%;
                left: 85.4%;
              }

              32.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              35% {
                bottom: 48.3%;
                left: 90.4%;
              }

              37.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              40% {
                bottom: 34.5%;
                left: 89.4%;
              }

              42.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              45% {
                bottom: 20.7%;
                left: 85.4%;
              }

              47.5% {
                bottom: 13.8%;
                left: 80%;
              }

              50% {
                bottom: -0.1%;
                left: 65%;
              }
              52.5% {
                bottom: -2.3%;
                left: 59%;
              }

              55% {
                bottom: -3.8%;
                left: 53%;
              }

              57.5% {
                bottom: -5.7%;
                left: 47%;
              }

              60% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              62.5% {
                bottom: -8%;
                left: 35%;
              }

              65% {
                bottom: -7.7%;
                left: 29%;
              }

              67.5% {
                bottom: -6.4%;
                left: 23%;
              }

              70% {
                bottom: -3.7%;
                left: 17%;
              }

              72.5% {
                bottom: 0.2%;
                left: 11%;
              }
              75% {
                bottom: 6%;
                left: 6%;
              }
              75.5% {
                bottom: 6%;
                left: 6%;
              }
              80% {
                bottom: 13.2%;
                left: -0.2%;
              }

              82.5% {
                bottom: 20.4%;
                left: -4.4%;
              }

              85% {
                bottom: 27.6%;
                left: -7.2%;
              }

              87.5% {
                bottom: 34.8%;
                left: -8.7%;
              }

              90% {
                bottom: 42%;
                left: -9.1%;
              }

              92.5% {
                bottom: 49.2%;
                left: -8.4%;
              }

              95% {
                bottom: 56.4%;
                left: -6.6%;
              }

              97.5% {
                bottom: 63.6%;
                left: -3.7%;
              }

              100% {
                bottom: 70.8%;
                left: 0.9%;
              }
            }
          }
        }
      }
    }

    .act-bonus {
      font-size: 67px;
      color: #fff;
      text-shadow: 1px 1px 2px green;
      position: relative;
      left: 43%;
      top: 20px;
      transform: translateX(-16%);
      animation: bonus 3s infinite alternate;
    }
    @keyframes bonus {
      from {
        top: 20px;
      }
      to {
        top: 50px;
      }
    }
  }
`;

const Project = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: -159px;
  .bs-tab {
    .tab-control {
      .control-list {
        .control-list__item {
          border-top-left-radius: unset;
        }
        .active {
          background: linear-gradient(
            to right,
            rgba(106, 226, 182),
            rgba(255, 255, 255)
          );
          border: unset;
          box-shadow: unset;
          color: rgba(29, 64, 125);
        }
      }
    }
    .tab-container {
      width: 813px;
      height: 100%;
      position: relative;
      margin-top: 30%;
      display: flex;
      .tab-control {
        width: 25%;
        border-right: none;
        h4 {
          font-size: 16px;
          font-family: OpenSans;
          color: rgba(106, 226, 182);
        }
        h1 {
          font-size: 35px;
          width: 69%;
          margin-bottom: 15px;
          line-height: 46px;
          color: rgba(29, 64, 125);
        }

        .more {
          display: flex;
          img {
            width: 14px;
            height: 14px;
            margin-left: 4px;
          }
          .line {
            width: 79px;
            height: 3px;
            margin-left: 10px;
            margin-top: 6px;
            background-color: rgba(131, 151, 185);
          }
        }
        .control-list {
          margin-top: 56px;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .control-list__item {
            width: 90%;
            font-family: OpenSans;
            height: 46px;
            margin-bottom: 8px;
            font-size: 18px;
            padding-left: 24px;
            white-space: nowrap;
            line-height: 40px;
            font-weight: 500;
            text-align: left;
            border-top-right-radius: unset;
            border-bottom-left-radius: unset;
            color: #1d407d;
          }
        }
      }
    }
    .tab-content {
      width: 100%;
      height: 100%;
      .multiple-items {
        margin-top: 72px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        .item {
          position: relative;
          width: 78%;
          height: 233px;
          margin-bottom: 60px;
          overflow: hidden;
          .project-img {
            position: absolute;
            height: 266px;
            width: 237px;
            left: -17px;
            top: -12px;
            z-index: 0;
          }
          .discription {
            position: absolute;
            width: 95%;
            height: 40px;
            background-color: #fff;
            z-index: 1;
            bottom: 5px;
            left: -190px;
            .title {
              position: absolute;
              left: 9px;
              font-size: 12px;
              top: 5px;
              color: #72dcb6;
              width: unset;
              height: unset;
            }
            .more {
              position: absolute;
              bottom: 4px;
              left: 11px;
            }
            button {
              position: absolute;
              right: 9px;
              top: 9px;
              width: 24px;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              height: 24px;
              font-size: 15px;
              background-color: #72dcb6;
              color: white;
            }
          }
          &:hover {
            transform: translateY(-10px);
            .discription {
              left: 5px;
            }
          }
        }
      }
      // .multiple-items{
      //   position: relative;
      //   .owl-dots{
      //     display: none;
      //   }
      //   .owl-nav{
      //     position: absolute;
      //     right: 11%;
      //     top: -6%;
      //     display: flex;
      //     gap: 10px;
      //     .owl-prev{
      //       width: 28px;
      //       height: 28px;
      //       display: flex;
      //       justify-content: center;
      //       background-color: rgba(31, 211, 146);
      //       border-radius: 100%;
      //       color: white;
      //       span{
      //         font-size: 17px;
      //       }
      //     }
      //     .owl-next{
      //       width: 28px;
      //       height: 28px;
      //       display: flex;
      //       justify-content: center;
      //       background-color: rgba(31, 211, 146);
      //       border-radius: 100%;
      //       color: white;
      //       span{
      //         font-size: 17px;
      //       }
      //     }
      //   }
      // }
    }
    .button {
      position: absolute;
      right: -84px;
      display: flex;
      top: 6%;
      gap: 8px;
      .icon {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background-color: rgba(31, 211, 146);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a {
          color: #fff;
        }
      }
    }
    .popup {
      display: none;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      .main-pop {
        position: relative;
        width: 646px;
        height: 600px;
        left: 51%;
        transform: translateX(-50%);
        background-color: #fff;
        margin-top: 50px;
        z-index: 10;
        img {
          width: 575px;
          height: 409px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 18px;
        }
        .title {
          width: 80%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: white;
          height: 50px;
          text-align: center;
          top: 65%;
          z-index: 1;
          border-radius: 10px;
          line-height: 64px;
          font-size: 21px;
          color: rgba(12, 96, 162);
        }
        .main-content {
          position: relative;
          width: 90%;
          margin: 0 auto;
          margin-top: 30px;
          .content {
            display: flex;
            justify-content: space-around;
            font-family: "OpenSans";
            font-size: 12px;
            .name {
              font-weight: bold;
              width: 30%;
            }
            .dis {
              width: 70%;
            }
          }
        }
      }
      .layout {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
      }
      .close-pop {
        position: absolute;
        top: 15px;
        right: 25%;
        z-index: 10;
        i {
          font-size: 40px;
          color: white;
        }
      }
    }
  }
  .bonus {
    position: absolute;
    bottom: -65px;
    font-size: 72px;
    left: -11%;
    letter-spacing: 4.2px;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(46 214 153), 0 0 3px rgb(46 214 153);
    animation: bons 3s infinite alternate;
    @keyframes bons {
      from {
        bottom: -65px;
      }
      to {
        bottom: -116px;
      }
    }
  }
  .left-img {
    position: absolute;
    left: -50%;
    top: -135%;
    transform: rotate(0deg);
    width: 100%;
    z-index: -1;
    animation: lef 3s infinite alternate;
    img {
      width: 700px;
      height: 1920px;
    }
    @keyframes lef {
      from {
        transform: rotate(5deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }
  .right-img {
    position: absolute;
    right: -53%;
    bottom: -27%;
    z-index: -1;
    animation: righ 3s infinite alternate;
    img {
      width: 513px;
      height: 440px;
    }
    @keyframes righ {
      from {
        transform: rotate(7deg);
      }
      to {
        transform: rotate(-2deg);
      }
    }
  }
`;

const Recruiment = styled.div`
  width: 100%;
  height: 454px;
  margin-top: 204px;
  .main-img {
    width: 50%;
    height: 410px;
    position: relative;
    .main {
      position: absolute;
      width: 239px;
      height: 127px;
      bottom: -11px;
      right: 74px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .layer-personal {
      position: absolute;
      bottom: 13%;
      right: 30%;
      width: 95px;
      height: 253px;
      z-index: 5;
      animation: layerpersonal 3s infinite alternate;
      .personal {
        position: absolute;
        width: 83px;
        height: 185px;
        bottom: 10%;
        right: 7px;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .personal1 {
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 100px;
        height: 59px;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .personal2 {
        position: absolute;
        width: 36px;
        height: 38px;
        left: 31%;
        top: 2px;
        animation: personal2 5s infinite linear;
        img {
          width: 100%;
          height: 100%;
        }
      }
      @keyframes personal2 {
        0%,
        50% {
          opacity: 0;
        }
        51%,
        100% {
          opacity: 1;
        }
      }
      @keyframes layerpersonal {
        from {
          bottom: 13%;
        }
        to {
          bottom: 15%;
        }
      }
    }

    .layer1 {
      position: absolute;
      right: 12%;
      bottom: 13%;
      width: 85px;
      height: 241px;
      .layer1_2 {
        position: absolute;
        bottom: 0;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .layer1-1 {
        position: absolute;
        bottom: 7px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        width: 85%;
        height: 57px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .lay1 {
        position: absolute;
        bottom: 3px;
        left: 4px;
        width: 87%;
        height: 157px;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .layer1_3 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 31%;
        bottom: 37%;
        animation: layer13 3s infinite alternate;
        img {
          width: 100%;
          height: 100%;
        }
      }
      @keyframes layer13 {
        from {
          bottom: 37%;
        }
        to {
          bottom: 40%;
        }
      }
      .layer1_4 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 31%;
        bottom: 54%;
        animation: layer14 3s infinite alternate;
        img {
          width: 100%;
          height: 100%;
        }
      }
      @keyframes layer14 {
        from {
          bottom: 54%;
        }
        to {
          bottom: 60%;
        }
      }
      .layway {
        display: flex;
        flex-direction: column-reverse;
        width: 80px;
        height: 70px;
        position: relative;
        .layer151 {
          position: absolute;
          bottom: 4px;
          right: 22px;
          width: 35px;
          animation: layer151 2s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer151 {
          0%,
          20% {
            opacity: 0;
          }
          21%,
          100% {
            opacity: 1;
          }
        }
        .layer152 {
          position: absolute;
          bottom: 11px;
          right: 11px;
          width: 45px;
          animation: layer152 2s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer152 {
          0%,
          40% {
            opacity: 0;
          }
          41%,
          100% {
            opacity: 1;
          }
        }
        .layer153 {
          position: absolute;
          width: 54px;
          right: 0px;
          bottom: 18px;
          animation: layer153 2s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer153 {
          0%,
          60% {
            opacity: 0;
          }
          61%,
          100% {
            opacity: 1;
          }
        }
        .layer154 {
          position: absolute;
          width: 16px;
          top: 3px;
          left: 28px;
          animation: layer154 2s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer154 {
          0%,
          80% {
            opacity: 0;
          }
          81%,
          100% {
            opacity: 1;
          }
        }
      }
    }

    .layer2 {
      position: absolute;
      .background-layer {
        position: relative;
        top: -13px;
        left: 8%;
        .one {
          position: absolute;
          z-index: 1;
          left: 52%;
          top: 8%;
          width: 210px;
          height: 260px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .two {
          position: relative;
          z-index: 1;
          left: 49%;
          width: 244px;
          height: 297px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .broad {
          position: absolute;
          top: 3%;
          left: 56%;
          width: 249px;
          height: 312px;
          z-index: 3;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .broad-news {
          position: absolute;
          width: 250px;
          height: 254px;
          top: 15%;
          left: 56%;
          z-index: 4;
          .new1 {
            position: absolute;
            top: 40%;
            left: 14%;
            width: 54px;
            height: 118px;
            animation: new1 3s infinite alternate;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes new1 {
            from {
              top: 37%;
            }
            to {
              top: 43%;
            }
          }

          .new2 {
            position: absolute;
            width: 70px;
            height: 148px;
            left: 40%;
            top: 14%;
            z-index: 5;
            animation: new2 10s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes new2 {
            0%,
            33% {
              left: 40%;
              top: 14%;
            }
            34%,
            66% {
              left: 43%;
              top: 15%;
            }
            67%,
            100% {
              left: 46%;
              top: 19%;
            }
          }

          .new3 {
            position: absolute;
            width: 58px;
            height: 118px;
            right: 9%;
            top: 12%;
            animation: new3 3s infinite alternate;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes new3 {
            from {
              top: 6%;
            }
            to {
              top: 14%;
            }
          }

          .new4 {
            position: absolute;
            bottom: -2%;
            z-index: 5;
            width: 76px;
            height: 92px;
            left: 40%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .stars {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 0;
          left: 82%;
          .star1 {
            position: absolute;
            width: 17px;
            height: 24px;
            bottom: 26%;
            animation: star1 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes star1 {
            0%,
            15% {
              opacity: 0;
            }
            16%,
            100% {
              opacity: 1;
            }
          }

          .star2 {
            position: absolute;
            width: 17px;
            height: 24px;
            left: 20%;
            top: 38%;
            animation: star2 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes star2 {
            0%,
            32% {
              opacity: 0;
            }
            33%,
            100% {
              opacity: 1;
            }
          }

          .star3 {
            position: absolute;
            width: 17px;
            height: 24px;
            left: 40%;
            top: 27%;
            animation: star3 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes star3 {
            0%,
            48% {
              opacity: 0;
            }
            49%,
            100% {
              opacity: 1;
            }
          }

          .star4 {
            position: absolute;
            width: 17px;
            height: 24px;
            right: 23%;
            top: 15%;
            animation: star4 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes star4 {
            0%,
            64% {
              opacity: 0;
            }
            65%,
            100% {
              opacity: 1;
            }
          }

          .star5 {
            position: absolute;
            width: 17px;
            height: 24px;
            right: 3%;
            top: 4%;
            animation: star5 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes star5 {
            0%,
            80% {
              opacity: 0;
            }
            81%,
            100% {
              opacity: 1;
            }
          }
        }
      }
    }

    .layer3 {
      position: absolute;
      width: 290px;
      height: 134px;
      bottom: 0;
      left: 25%;
      .under1 {
        position: absolute;
        right: 6%;
        z-index: 2;
        width: 79px;
        bottom: 27%;
        height: 48px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .under2 {
        position: absolute;
        z-index: 1;
        width: 91px;
        height: 52px;
        right: 1%;
        bottom: 16%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .under3 {
        position: absolute;
        width: 64px;
        height: 35px;
        left: 40%;
        top: 32%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .under4 {
        position: absolute;
        width: 36px;
        height: 23px;
        left: 28%;
        top: 42%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .layway {
        position: absolute;
        width: 69px;
        height: 65px;
        left: 8%;
        .layer151 {
          position: absolute;
          bottom: 0;
          transform: rotate(120deg);
          right: 0;
          width: 35px;
          animation: layer151 3s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer151 {
          0%,
          20% {
            opacity: 0;
          }
          21%,
          100% {
            opacity: 1;
          }
        }

        .layer152 {
          position: absolute;
          bottom: 12%;
          width: 47px;
          transform: rotate(120deg);
          right: 0;
          animation: layer152 3s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer152 {
          0%,
          40% {
            opacity: 0;
          }
          41%,
          100% {
            opacity: 1;
          }
        }

        .layer153 {
          position: absolute;
          bottom: 23%;
          transform: rotate(120deg);
          width: 56px;
          right: 0;
          animation: layer153 3s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer153 {
          0%,
          60% {
            opacity: 0;
          }
          61%,
          100% {
            opacity: 1;
          }
        }

        .layer154 {
          position: absolute;
          right: 0;
          width: 18px;
          transform: rotate(120deg);
          animation: layer154 3s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer154 {
          0%,
          80% {
            opacity: 0;
          }
          81%,
          100% {
            opacity: 1;
          }
        }
      }
    }
  }
  .content {
    width: 50%;
    position: relative;
    left: 70px;
    top: 60px;
    h1 {
      font-size: 35px;
      margin-left: 2px;
      margin-top: 18px;
      word-spacing: -7.8px;
      color: rgba(29, 64, 125);
    }
    .more {
      display: flex;
      margin-top: 19px;
      margin-left: 14px;
      margin-bottom: 30px;
      img {
        width: 13px;
        height: 13px;
      }
      .line {
        width: 80px;
        height: 2px;
        background-color: rgba(131, 151, 185);
        margin-left: 10px;
        margin-top: 6px;
      }
    }
    .other {
      display: none;
    }
    .text {
      font-size: 12px;
      font-family: "OpenSans";
      color: #1d619f;
      margin-left: 15px;
      width: 65%;
      line-height: 20px;
      margin-bottom: 20px;
    }
    button {
      margin-left: 17px;
      width: 143px;
      height: 50px;
      font-size: 12px;
      color: #fff;
      border-radius: 20px;
      font-family: "OpenSans";
      background-color: rgba(31, 211, 146);
      box-shadow: 15px 10px 35px rgba(31, 211, 146, 0.45);
    }
    .bonus {
      font-size: 67px;
      position: absolute;
      bottom: 0px;
      left: -131px;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(31, 211, 146),
        0px 1px 0px rgba(31, 211, 146);
      animation: nus 3s infinite alternate;
      @keyframes nus {
        from {
          bottom: 0px;
        }
        to {
          bottom: 20px;
        }
      }
    }
  }
`;

const LastestNew = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  position: relative;
  .bs-row {
    display: flex;
    flex-direction: column;
    .news_module {
      .title {
        font-size: 35px;
        text-align: center;
        margin-top: 60px;
        color: #1d407d;
      }
      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        img {
          width: 14px;
          height: 14px;
          margin: 0px 10px;
        }
        .line {
          width: 80px;
          height: 2px;
          background-color: rgba(131, 151, 185);
        }
      }
      .main-content {
        max-width: 90%;
        margin: 0 auto;
        height: 310px;
        display: flex;
        margin-top: 75px;
        justify-content: center;
        margin-bottom: 62px;
        .content {
          width: 30%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 287px;
            height: 234px;
          }
          .discription {
            position: absolute;
            background-color: #fff;
            width: 73%;
            height: 150px;
            bottom: -10px;
            .heading {
              display: flex;
              margin-top: 7px;
              margin-left: 20px;
              color: rgba(139, 158, 189);
              .clock {
                margin-right: 6px;
                margin-top: 3px;
              }
              .text {
                font-size: 11px;
                margin-right: 11px;
              }
              .block {
                margin-right: 15px;
              }
              .eye {
                margin-top: 2px;
                margin-right: 8px;
              }
              .view {
                font-size: 10px;
                margin-top: 2px;
              }
            }
            .text {
              font-size: 18px;
              margin-left: 15px;
              line-height: 22px;
              font-family: "OpenSans";
            }
            .button {
              display: flex;
              margin-left: 10px;
              margin-top: 17px;
              h4 {
                font-size: 12px;
                margin: 8px 10px 0px 4px; //top right bottom left
              }
              button {
                width: 32px;
                padding: 0;
                height: 32px;
                font-size: 11px;
                color: #fff;
                background-color: rgba(31, 211, 146);
              }
            }
            &:hover {
              box-shadow: 0px 0 40px rgb(131 151 185),
                0px 0px 0px rgb(131 151 185);
              .heading {
                .text {
                  color: rgba(139, 158, 189);
                }
              }
              .text {
                color: rgba(19, 97, 232);
              }
            }
          }
        }
      }
    }
    .news-img {
      position: absolute;
      img {
        width: 71%;
        margin-top: -31px;
        margin-left: 139px;
      }
    }
  }
`;

const Last = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .xemthem {
    width: 125px;
    height: 33px;
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    line-height: 22px;
    color: #fff;
    font-family: "OpenSans";
    background-color: rgba(27, 205, 141);
  }
  .bonus {
    position: absolute;
    right: 214px;
    bottom: -51px;
    font-size: 64px;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(31 211 146), 1px 0 1px rgb(31 211 146);
    animation: latest 3s infinite alternate;
  }
  @keyframes latest {
    from {
      bottom: -40px;
    }
    to {
      bottom: -80px;
    }
  }
`;
