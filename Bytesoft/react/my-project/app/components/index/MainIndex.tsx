"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

//// import components
import { AboutUs } from "./main-css/AboutUs";
import { Activity } from "./main-css/Activity";
import { Project } from "./main-css/Project";
import { Recruitment } from "./main-css/Recruitment";
import { LastestNews } from "./main-css/LastestNews";
import { Last } from "./main-css/Last";
import { Container } from "../Container";

//// about us images
import mayTrai from "@/app/image/maytrai.png";
import cauTruc1 from "@/app/image/cautruc1.png";
import cauTruc2 from "@/app/image/cautruc2.png";
import mayPhai from "@/app/image/mayphai.png";
import United1 from "@/app/image/Untitled-1.png";
import AboutUsImage from "@/app/image/Rectangle 247.png";

////// activity images
import rectangleImg from "@/app/image/Rectangle 247.png";
import number01 from "@/app/image/01.png";
import number02 from "@/app/image/02.png";
import number03 from "@/app/image/03.png";
import number04 from "@/app/image/04.png";
import mainround from "@/app/image/main_round.gif";
import mainpersonal1 from "@/app/image/main_personal2.gif";
import mainpersonal2 from "@/app/image/main_personal2_1.gif";
import mainpersonal3 from "@/app/image/main_personal3.gif";
import mainpersonal4 from "@/app/image/main_personal3_1.gif";
import mainpersonal5 from "@/app/image/main_personal4.gif";
import mainpersonal6 from "@/app/image/main_personal4_1.gif";
import maincenter from "@/app/image/main_center.gif";
import tower1 from "@/app/image/tower1.gif";
import tower2 from "@/app/image/tower2.gif";
import tower3 from "@/app/image/tower3.gif";
import main_personal from "@/app/image/main_personal.gif";
import homeImg from "@/app/image/home.gif";
import tree from "@/app/image/tree.gif";
import tree1 from "@/app/image/tree (1).gif";
import tree2 from "@/app/image/tree (2).gif";
import coin from "@/app/image/coin.gif";
import layer6 from "@/app/image/layer6.gif";
import layer5 from "@/app/image/layer5.gif";
import layer5_1 from "@/app/image/layer5_1.gif";
import line1 from "@/app/image/line1.gif";
import line2 from "@/app/image/line2.gif";
import line3 from "@/app/image/line3.gif";
import line4 from "@/app/image/line4.gif";
import layer1 from "@/app/image/layer1.gif";
import layer2 from "@/app/image/layer2.gif";
import layer3 from "@/app/image/layer3.gif";
import layer4 from "@/app/image/layer4.gif";

////// project image
import popupImage from "@/app/image/popup.png";
import leftImg from "@/app/image/Untitled-4.png";
import rightImg from "@/app/image/cautruc2.png";
import thuongmai from "@/app/image/building1.png";
import giaoduc from "@/app/image/building2.png";
import benhvien from "@/app/image/building3.png";
import thuongtru from "@/app/image/building2.png";
import vanphong from "@/app/image/building4.png";
import taithiet from "@/app/image/building5.png";

//// recruitment image
import mainImg from "@/app/image/main.gif";
import mainPersonal from "@/app/image/main_personal (1).gif";
import main_personal1 from "@/app/image/main_personal_1.gif";
import main_personal2 from "@/app/image/main_personal_2.gif";
import layer1_1 from "@/app/image/layer1_1.gif";
import layer1_2 from "@/app/image/layer1_2.gif";
import layer1_3 from "@/app/image/layer1_3.gif";
import layer1_4 from "@/app/image/layer1_4.gif";
import lay from "@/app/image/layer1 (1).gif";
import layer1_5_1 from "@/app/image/layer1_5_1.gif";
import layer1_5_2 from "@/app/image/layer1_5_2.gif";
import layer1_5_3 from "@/app/image/layer1_5_3.gif";
import layer1_5_4 from "@/app/image/layer1_5_4.gif";
import one from "@/app/image/layer2_4 (1).gif";
import two from "@/app/image/layer2_4.gif";
import broad from "@/app/image/layer2 (1).gif";
import new1 from "@/app/image/layer2_3 (1).gif";
import new2 from "@/app/image/layer2_2.gif";
import new3 from "@/app/image/layer2_3.gif";
import new4 from "@/app/image/layer2_1.gif";
import star1 from "@/app/image/layer_2_star.gif";
import star2 from "@/app/image/layer_2_star1.gif";
import star3 from "@/app/image/layer_2_star2.gif";
import star4 from "@/app/image/layer_2_star3.gif";
import star5 from "@/app/image/layer_2_star4.gif";
import layerMain from "@/app/image/layer_main.gif";
import layer151 from "@/app/image/layer1_5_1.gif";
import layer152 from "@/app/image/layer1_5_2.gif";
import layer153 from "@/app/image/layer1_5_3.gif";
import layer154 from "@/app/image/layer1_5_4.gif";

///// lastest image
import contentImg from "@/app/image/news1.png";

const MainIndex = () => {
  const [openItem, setOpenItem] = useState(false);
  const [newValue, setNewValue] = useState("");

  const addText = () => {
    setNewValue(
      newValue +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore, ea recusandae, porro aliquid inventore eos fugiat voluptate laborum corporis doloremque sed suscipit, delectus nulla perferendis vero nostrum blanditiis aspernatur."
    );
  };
  return (
    <>
      <main id="main">
        <AboutUs>
          <div className="outside">
            <Image
              className="maytrai"
              src={mayTrai}
              width={315}
              height={454}
              alt=""
            />
            <Image className="cautruc1" src={cauTruc1} alt="" />
            <Image className="cautruc2" src={cauTruc2} alt="" />
            <Image className="mayphai" src={mayPhai} alt="" />
          </div>

          <Container>
            <div className="module module-index">
              <div className="about-img">
                <a href="">
                  <Image src={United1} width={500} height={353} alt="" />
                </a>
              </div>
              <div className="content">
                <div className="about-header">
                  <h2 className="title">VỀ CHÚNG TÔI</h2>
                  <div className="more">
                    <Image src={AboutUsImage} width={11} height={11} alt="" />
                    <div className="line"></div>
                  </div>
                  <div className="other">
                    <div className="line"></div>
                    <Image src={AboutUsImage} width={11} height={11} alt="" />
                    <div className="line"></div>
                  </div>
                </div>
                <div className="about-content">
                  <div className="text">
                    Scarcely on striking packages by so property in delicate. Up
                    or well must less rent read walk so be. Easy sold at do hour
                    sing spot. Any meant has cease too the decay. Since party
                    burst am it match. By or blushes between besides offices
                    noisier as. Sending do brought windng compass in. Paid day
                    till shed only fact age its end. {newValue}
                  </div>
                  <button onClick={() => addText()}>Xem thêm</button>
                  <h1>
                    <b>ABOUT US</b>
                  </h1>
                </div>
              </div>
            </div>
          </Container>
        </AboutUs>

        <Activity>
          <Container>
            <div className="module-activity">
              <div className="act-title">
                <h2>
                  <b>LĨNH VỰC HOẠT ĐỘNG</b>
                </h2>
                <div className="more">
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>

                <div className="other">
                  <div className="line"></div>
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>
              </div>
              <div className="act-content">
                <div className="main-content">
                  <div className="design">
                    <Image src={number01} alt="" width={32} height={32} />
                    <div className="title">
                      <b>THIẾT KẾ KIẾN TRÚC</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">
                          Scarcely on striking packages by so property in
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number02} alt="" width={32} height={32} />
                    <div className="title">
                      <b>THIẾT KẾ KIẾN TRÚC</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">
                          Scarcely on striking packages by so property in
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number03} alt="" width={32} height={32} />
                    <div className="title">
                      <b>THIẾT KẾ KIẾN TRÚC</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">
                          Scarcely on striking packages by so property in
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number04} alt="" width={32} height={32} />
                    <div className="title">
                      <b>THIẾT KẾ KIẾN TRÚC</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">
                          Scarcely on striking packages by so property in
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content-img">
                  <div className="activity-img">
                    <Image className="main-round" src={mainround} alt="" />
                    <div className="layer layer1">
                      <div className="layer layer1-1">
                        <Image src={mainpersonal1} alt="" width={53} />
                      </div>
                      <div className="layer layer1-2">
                        <Image
                          src={mainpersonal2}
                          alt=""
                          width={8}
                          height={47}
                        />
                      </div>
                    </div>

                    <div className="layer layer2">
                      <div className="layer layer2-1">
                        <Image
                          src={mainpersonal3}
                          alt=""
                          width={64}
                          height={42}
                        />
                      </div>
                      <div className="layer layer2-2">
                        <Image
                          src={mainpersonal4}
                          alt=""
                          width={32}
                          height={-23}
                        />
                      </div>
                    </div>

                    <div className="layer layer3">
                      <div className="layer layer3-1">
                        <Image
                          src={mainpersonal5}
                          alt=""
                          width={22}
                          height={50}
                        />
                      </div>
                      <div className="layer layer3-2">
                        <Image
                          src={mainpersonal6}
                          alt=""
                          width={23}
                          height={59}
                        />
                      </div>
                      <div className="layer main-center">
                        <Image
                          src={maincenter}
                          alt=""
                          width={194}
                          height={121}
                        />
                      </div>

                      <div className="tower1">
                        <Image src={tower1} alt="" width={38} height={72} />
                      </div>

                      <div className="tower2">
                        <Image src={tower2} alt="" width={41} height={91} />
                      </div>

                      <div className="tower3">
                        <Image src={tower3} alt="" width={66} height={92} />
                      </div>

                      <Image
                        src={main_personal}
                        alt=""
                        className="personal"
                        width={50}
                        height={50}
                      />

                      <div className="house">
                        <Image src={homeImg} alt="" width={46} height={40} />
                      </div>

                      <div className="tree">
                        <Image src={tree} alt="" width={7} height={17} />
                      </div>

                      <div className="tree1">
                        <Image src={tree1} alt="" width={5} height={12} />
                      </div>

                      <div className="tree2">
                        <Image src={tree2} alt="" width={5} height={12} />
                      </div>

                      <div className="coint">
                        <Image src={coin} alt="" width={20} height={20} />
                      </div>

                      <Image
                        src={layer6}
                        alt=""
                        className="layer6"
                        width={35}
                        height={35}
                      />
                      <Image
                        src={layer5}
                        alt=""
                        className="layer5"
                        width={90}
                        height={29}
                      />
                      <Image
                        className="layer5_1"
                        src={layer5_1}
                        alt=""
                        width={17}
                        height={12}
                      />
                    </div>

                    <div className="layer layer4">
                      <Image className="line1" src={line1} alt="" />
                      <Image className="line2" src={line2} alt="" />
                      <Image className="line3" src={line3} alt="" />
                      <Image className="line4" src={line4} alt="" />
                    </div>

                    <div className="layer layer5">
                      <Image
                        src={layer1}
                        alt=""
                        className="lay1"
                        width={90}
                        height={92}
                      />

                      <Image
                        src={layer2}
                        alt=""
                        className="lay2"
                        width={90}
                        height={92}
                      />

                      <Image
                        src={layer3}
                        alt=""
                        className="lay3"
                        width={90}
                        height={100}
                      />

                      <Image
                        src={layer4}
                        alt=""
                        className="lay4"
                        width={90}
                        height={104}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="act-bonus">
                <b>MARKET</b>
              </div>
            </div>
          </Container>
        </Activity>

        <Project>
          <Container>
            <div className="bs-tab tab-left">
              <div className="tab-container">
                <div className="tab-control">
                  <h4>DỰ ÁN MỚI NHẤT</h4>
                  <h1>DỰ ÁN NỔI BẬT</h1>
                  <div className="more">
                    <Image src={rectangleImg} alt="" />
                    <div className="line"></div>
                  </div>
                  <span className="control__show">TẤT CẢ</span>
                  <ul className="control-list">
                    <li className="control-list__item">TẤT CẢ</li>

                    <li className="control-list__item">THƯƠNG MẠI</li>

                    <li className="control-list__item">GIÁO DỤC</li>

                    <li className="control-list__item">BỆNH VIỆN</li>

                    <li className="control-list__item">THƯỜNG TRÚ</li>

                    <li className="control-list__item">VĂN PHÒNG</li>

                    <li className="control-list__item">TÁI THIẾT</li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-item">
                    <div className="multiple-items">
                      <div className="item">
                        <Image
                          className="project-img"
                          src={thuongmai}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Thương mại</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item">
                        <Image
                          className="project-img"
                          src={giaoduc}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Giáo dục</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item">
                        <Image
                          className="project-img"
                          src={benhvien}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Bệnh viện</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item">
                        <Image
                          className="project-img"
                          src={thuongtru}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Thường trú</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item">
                        <Image
                          className="project-img"
                          src={vanphong}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Văn phòng</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item">
                        <Image
                          className="project-img"
                          src={taithiet}
                          alt=""
                          width={237}
                          height={266}
                        />
                        <div className="discription">
                          <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                          <div className="more">Tái thiết</div>
                          <button
                            className="mutiple-button"
                            onClick={() => setOpenItem(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {openItem ? (
                <div className="popup">
                  <div className="main-pop">
                    <Image src={popupImage} alt="" />
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
                  <div className="close-pop" onClick={() => setOpenItem(false)}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      style={{ fontSize: 40, color: "white" }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="button">
                <div className="icon">
                  <a href="">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ color: "#fff" }}
                    />
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#fff" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="bonus">
              <b>PROJECTS</b>
            </div>

            <div className="left-img">
              <Image src={leftImg} alt="" />
            </div>
            <div className="right-img">
              <Image src={rightImg} alt="" />
            </div>
          </Container>
        </Project>

        <Recruitment>
          <Container>
            <div className="bs-row">
              <div className="main-img">
                <div className="main">
                  <Image src={mainImg} alt="" />
                </div>

                <div className="layer-personal">
                  <div className="personal">
                    <Image src={mainPersonal} alt="" />
                  </div>
                  <div className="personal1">
                    <Image src={main_personal1} alt="" />
                  </div>

                  <div className="personal2">
                    <Image src={main_personal2} alt="" />
                  </div>
                </div>

                <div className="layer1">
                  <div className="layer1_2">
                    <Image src={layer1_2} alt="" />
                  </div>

                  <div className="layer1-1">
                    <Image src={layer1_1} alt="" />
                  </div>

                  <div className="lay1">
                    <Image src={lay} alt="" />
                  </div>

                  <div className="layer1_3">
                    <Image src={layer1_3} alt="" />
                  </div>

                  <div className="layer1_4">
                    <Image src={layer1_4} alt="" />
                  </div>

                  <div className="layway">
                    <div className="layer151">
                      <Image src={layer1_5_1} alt="" />
                    </div>
                    <div className="layer152">
                      <Image src={layer1_5_2} alt="" />
                    </div>
                    <div className="layer153">
                      <Image src={layer1_5_3} alt="" />
                    </div>
                    <div className="layer154">
                      <Image src={layer1_5_4} alt="" />
                    </div>
                  </div>
                </div>

                <div className="layer2">
                  <div className="background-layer">
                    <div className="one">
                      <Image src={one} alt="" />
                    </div>

                    <div className="two">
                      <Image src={two} alt="" />
                    </div>

                    <div className="broad">
                      <Image src={broad} alt="" />
                    </div>

                    <div className="broad-news">
                      <div className="new1">
                        <Image src={new1} alt="" />
                      </div>
                      <div className="new2">
                        <Image src={new2} alt="" />
                      </div>
                      <div className="new3">
                        <Image src={new3} alt="" />
                      </div>

                      <div className="new4">
                        <Image src={new4} alt="" />
                      </div>
                    </div>

                    <div className="stars">
                      <div className="star1">
                        <Image src={star1} alt="" />
                      </div>

                      <div className="star2">
                        <Image src={star2} alt="" />
                      </div>

                      <div className="star3">
                        <Image src={star3} alt="" />
                      </div>

                      <div className="star4">
                        <Image src={star4} alt="" />
                      </div>

                      <div className="star5">
                        <Image src={star5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="layer3">
                  <div className="under1">
                    <Image src={layerMain} alt="" />
                  </div>

                  <div className="under2">
                    <Image src={layerMain} alt="" />
                  </div>

                  <div className="under3">
                    <Image src={layerMain} alt="" />
                  </div>

                  <div className="under4">
                    <Image src={layerMain} alt="" />
                  </div>

                  <div className="layway">
                    <div className="layer151">
                      <Image src={layer151} alt="" />
                    </div>
                    <div className="layer152">
                      <Image src={layer152} alt="" />
                    </div>
                    <div className="layer153">
                      <Image src={layer153} alt="" />
                    </div>
                    <div className="layer154">
                      <Image src={layer154} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <h1>
                  <b>TUYỂN DỤNG</b>
                </h1>
                <div className="more">
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>
                <div className="other">
                  <div className="line"></div>
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>
                <div className="text">
                  Resources exquisite set arranging moonlight sem him household
                  had. Months had too ham cousin remove far spirit. She
                  procuring the why performed continual improving.
                </div>
                <button>NỘP ĐƠN</button>
                <div className="bonus">
                  <b>RECRUITMENT</b>
                </div>
              </div>
            </div>
          </Container>
        </Recruitment>

        <LastestNews>
          <Container>
            <div className="bs-row">
              <div className="news_module">
                <div className="title">
                  <b>TIN MỚI NHẤT</b>
                </div>
                <div className="more">
                  <div className="line"></div>
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>
                <div className="main-content">
                  <div className="content">
                    <Image src={contentImg} alt="" width={287} height={234} />
                    <div className="discription">
                      <div className="heading">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ width: 10, height: 10 }}
                          />
                        </div>
                        <div className="text">5.december.2020</div>
                        <div className="block">|</div>
                        <div className="eye">
                          <i className="fa-regular fa-eye"></i>
                        </div>
                        <div className="view">328</div>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet aenean nisi sociis ipsum...
                      </div>
                      <div className="button">
                        <h4>Xem thêm</h4>
                        <button>+</button>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <Image src={contentImg} alt="" width={287} height={234} />
                    <div className="discription">
                      <div className="heading">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ width: 10, height: 10 }}
                          />
                        </div>
                        <div className="text">5.december.2020</div>
                        <div className="block">|</div>
                        <div className="eye">
                          <i className="fa-regular fa-eye"></i>
                        </div>
                        <div className="view">328</div>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet aenean nisi sociis ipsum...
                      </div>
                      <div className="button">
                        <h4>Xem thêm</h4>
                        <button>+</button>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <Image src={contentImg} alt="" width={287} height={234} />
                    <div className="discription">
                      <div className="heading">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ width: 10, height: 10 }}
                          />
                        </div>
                        <div className="text">5.december.2020</div>
                        <div className="block">|</div>
                        <div className="eye">
                          <i className="fa-regular fa-eye"></i>
                        </div>
                        <div className="view">328</div>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet aenean nisi sociis ipsum...
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
                <img src="@/app/image/world.png" alt="" />
              </div>
            </div>
          </Container>
        </LastestNews>

        <Last>
          <button className="xemthem">XEM TIẾP</button>
          <div className="bonus">
            <b>LATEST NEWS</b>
          </div>
        </Last>
      </main>
    </>
  );
};

export default MainIndex;
