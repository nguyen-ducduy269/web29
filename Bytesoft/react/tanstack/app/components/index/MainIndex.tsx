"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchingData, useFetchingProjectData } from "@/app/useFetchingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

//// import components
import { AboutUs } from "./main-css/AboutUs";
import { Activity } from "./main-css/Activity";
import { Project } from "./main-css/Project";
import { Recruitment } from "./main-css/Recruitment";
import { LastestNews } from "./main-css/LastestNews";
import { Last } from "./main-css/Last";
import { Container } from "../Container";
import MainContent from "./MainContent";

//// about us images
import {
  mayTrai,
  mayPhai,
  cauTruc1,
  cauTruc2,
  United1,
  AboutUsImage,
  rectangleImg,
  number01,
  number02,
  number03,
  number04,
  mainround,
  mainpersonal1,
  mainpersonal2,
  mainpersonal3,
  mainpersonal4,
  mainpersonal5,
  mainpersonal6,
  maincenter,
  tower1,
  tower2,
  tower3,
  main_personal,
  homeImg,
  tree,
  tree1,
  tree2,
  coin,
  layer6,
  layer5,
  layer5_1,
  line1,
  line2,
  line3,
  line4,
  layer1,
  layer2,
  layer3,
  layer4,
  popupImage,
  leftImg,
  rightImg,
  mainImg,
  mainPersonal,
  main_personal1,
  main_personal2,
  layer1_1,
  layer1_2,
  layer1_3,
  layer1_4,
  lay,
  layer1_5_1,
  layer1_5_2,
  layer1_5_3,
  layer1_5_4,
  one,
  two,
  broad,
  new1,
  new2,
  new3,
  new4,
  star1,
  star2,
  star3,
  star4,
  star5,
  layerMain,
  layer151,
  layer152,
  layer153,
  layer154,
  newsImg,
  thuongmai,
  thuongtru,
  giaoduc,
  benhvien,
  vanphong,
  taithiet,
} from "../ImportImage";
import Slider from "react-slick";

const MainIndex = () => {
  const [openItem, setOpenItem] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [toggleTab, setToggleTab] = useState(false);

  // const [dataModal, setDataModal] = useState(null);
  // const [openModal, setOpenModal] = useState(false);
  // const [dataProject, setdataProject] = useState([]);

  // const openModalFunc = (item: any) => {
  //   setDataModal(item);
  //   setOpenModal(true);
  // };

  function SampleArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(31, 211, 146)",
          top: "3%",
          color: "white",
          borderRadius: "100%",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  const { data: entities } = useFetchingData();
  if (!entities) return;

  // const { project: projectData } = useFetchingProjectData();
  // if (!projectData) return;
  // console.log(projectData);

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
            <Image
              className="cautruc1"
              src={cauTruc1}
              width={428}
              height={250}
              alt=""
            />
            <Image
              className="cautruc2"
              src={cauTruc2}
              width={300}
              height={255}
              alt=""
            />
            <Image
              className="mayphai"
              src={mayPhai}
              width={403}
              height={772}
              alt=""
            />
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
                  <h2 className="title">{entities.aboutUsTitle}</h2>
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
                    {entities.aboutContent} {newValue}
                  </div>
                  <button onClick={() => addText()}>
                    {entities.xemThemBtn}
                  </button>
                  <h1>
                    <b>{entities.aboutH1}</b>
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
                  <b>{entities.actTitle}</b>
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
                      <b>{entities.designTitle}</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">{entities.designText}</a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number02} alt="" width={32} height={32} />
                    <div className="title">
                      <b>{entities.designTitle}</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">{entities.designText}</a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number03} alt="" width={32} height={32} />
                    <div className="title">
                      <b>{entities.designTitle}</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">{entities.designText}</a>
                      </p>
                    </div>
                  </div>

                  <div className="design">
                    <Image src={number04} alt="" width={32} height={32} />
                    <div className="title">
                      <b>{entities.designTitle}</b>
                    </div>
                    <div className="text">
                      <p>
                        <a href="">{entities.designText}</a>
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
                <b>{entities.actBonusBtn}</b>
              </div>
            </div>
          </Container>
        </Activity>

        <Project>
          <Container>
            <div className="bs-tab tab-left">
              <div className="tab-container">
                <div className="tab-control">
                  <h4>{entities.projectH4}</h4>
                  <h1>{entities.projectH1}</h1>
                  <div className="more">
                    <Image src={rectangleImg} alt="" />
                    <div className="line"></div>
                  </div>
                  <span className="control__show">{entities.all}</span>
                  <ul className="control-list">
                    <li className="control-list__item active">
                      {entities.all}
                    </li>
                    <li className="control-list__item">{entities.commerce}</li>

                    <li className="control-list__item">{entities.education}</li>

                    <li className="control-list__item">{entities.hospital}</li>

                    <li className="control-list__item">{entities.resident}</li>

                    <li className="control-list__item">{entities.offical}</li>

                    <li className="control-list__item">
                      {entities.reconstruction}
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-item">
                    <Slider {...settings}>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disCommerce}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disEducation}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disHospital}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disResident}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disOffical}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">
                              {entities.disReconstruction}
                            </div>
                            <button
                              className="mutiple-button"
                              onClick={() => setOpenItem(true)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disCommerce}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disEducation}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disHospital}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disResident}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">{entities.disOffical}</div>
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
                            <div className="title">
                              {entities.discriptionTitle}
                            </div>
                            <div className="more">
                              {entities.disReconstruction}
                            </div>
                            <button
                              className="mutiple-button"
                              onClick={() => setOpenItem(true)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              {openItem ? (
                <div className="popup">
                  <div className="main-pop">
                    <Image src={popupImage} alt="" />
                    <div className="title">
                      <b>{entities.popUpTitle}</b>
                    </div>
                    <div className="main-content">
                      <div className="content">
                        <div className="name">{entities.nameProject}</div>
                        <div className="dis">{entities.disProject1}</div>
                      </div>
                      <div className="content">
                        <div className="name">{entities.investor}</div>
                        <div className="dis">{entities.disProject2}</div>
                      </div>
                      <div className="content">
                        <div className="name">{entities.category}</div>
                        <div className="dis">{entities.disProject3}</div>
                      </div>
                      <div className="content">
                        <div className="name">{entities.location}</div>
                        <div className="dis">{entities.disProject4}</div>
                      </div>
                      <div className="content">
                        <div className="name">
                          {entities.typeOfConstruction}
                        </div>
                        <div className="dis">{entities.disProject5}</div>
                      </div>
                      <div className="content">
                        <div className="name">
                          {entities.levelOfConstruction}
                        </div>
                        <div className="dis">{entities.disProject6}</div>
                      </div>
                      <div className="content">
                        <div className="name">{entities.executionTime}</div>
                        <div className="dis">{entities.time}</div>
                      </div>
                    </div>
                  </div>
                  <div className="layout"></div>ư
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
            </div>

            <div className="bonus">
              <b>{entities.projectBonus}</b>
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
                  <b>{entities.recruitmentContent}</b>
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
                <div className="text">{entities.recruitmentText}</div>
                <button>{entities.recruitmentBtn}</button>
                <div className="bonus">
                  <b>{entities.recruitmentBonus}</b>
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
                  <b>{entities.lastestNewsTitle}</b>
                </div>

                <div className="more">
                  <div className="line"></div>
                  <Image src={rectangleImg} alt="" width={12} height={12} />
                  <div className="line"></div>
                </div>

                <MainContent />
              </div>
              <div className="news-img">
                <Image src={newsImg} width={880} height={535} alt="" />
              </div>
            </div>
          </Container>
        </LastestNews>

        <Last>
          <button className="xemthem">{entities.lastBtn}</button>
          <div className="bonus">
            <b>{entities.lastBonus}</b>
          </div>
        </Last>
      </main>
    </>
  );
};

export default MainIndex;

const ModalData = ({ item }: { item: any }) => {
  const [dataDetails, setDataDetails] = useState<any>(null);
  useEffect(() => {
    // get data item from id
  });
  return (
    <div className="popup">
      <div className="main-pop">
        <Image src={dataDetails?.imagine} width={575} height={409} alt="" />
        <div className="title">
          <b>{dataDetails?.popUp.title}</b>
        </div>
        <div className="main-content">
          <div className="content">
            <div className="name">Type: </div>
            <div className="dis">{dataDetails?.title}</div>
          </div>
          <div className="content">
            <div className="name">Discription: </div>
            <div className="dis">{dataDetails?.popUp.disscriptionText}</div>
          </div>
          <div className="content">
            <div className="name">{dataDetails?.executionTime}</div>
            <div className="dis">{dataDetails?.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
