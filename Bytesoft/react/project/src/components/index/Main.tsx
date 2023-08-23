import { useState } from "react";

///// import components
import { Container } from "../Container";
import { AboutUs } from "./main-css/AboutUs";
import { Activity } from "./main-css/Activity";
import { Project } from "./main-css/Project";
import { Recruitment } from "./main-css/Recruitment";
import { LastestNews } from "./main-css/LastestNews";
import { Last } from "./main-css/Last";

const products = [
  {
    id: 1,
    image: "../src/image/building1.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Thương mại",
  },
  {
    id: 2,
    image: "../src/image/building2.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Giáo dục",
  },
  {
    id: 3,
    image: "../src/image/building3.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Bệnh viện",
  },
  {
    id: 4,
    image: "../src/image/building2.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Thường trú",
  },
  {
    id: 5,
    image: "../src/image/building4.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Văn phòng",
  },
  {
    id: 6,
    image: "../src/image/building5.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Tái thiết",
  },
];

const items = [
  {
    id: 1,
    image: "../src/image/building2.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Giáo dục",
  },
  {
    id: 2,
    image: "../src/image/building3.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Bệnh viện",
  },
  {
    id: 3,
    image: "../src/image/building2.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Thường trú",
  },
  {
    id: 4,
    image: "../src/image/building4.png",
    title: "TÒA NHÀ THÀNH PHỐ",
    name: "Văn phòng",
  },
];

export const Main = () => {
  const [openItem, setOpenItem] = useState(false);
  const [allProducts, setAllProducts] = useState(true);
  const [status, setStatus] = useState(false);

  return (
    <>
      <main id="main">
        <AboutUs>
          <div className="outside">
            <img className="maytrai" src="../src/image/maytrai.png" alt="" />
            <img className="cautruc1" src="../src/image/cautruc1.png" alt="" />
            <img className="cautruc2" src="../src/image/cautruc2.png" alt="" />
            <img className="mayphai" src="../src/image/mayphai.png" alt="" />
          </div>

          <Container>
            <div className="module module-index">
              <div className="about-img">
                <a href="">
                  <img src="../src/image/Untitled-1.png" alt="" />
                </a>
              </div>
              <div className="content">
                <div className="about-header">
                  <h2 className="title">VỀ CHÚNG TÔI</h2>
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
                    Scarcely on striking packages by so property in delicate. Up
                    or well must less rent read walk so be. Easy sold at do hour
                    sing spot. Any meant has cease too the decay. Since party
                    burst am it match. By or blushes between besides offices
                    noisier as. Sending do brought windng compass in. Paid day
                    till shed only fact age its end.
                  </div>
                  <button>Xem thêm</button>
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
                  <img src="../src/image/Rectangle 247.png" alt="" />
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
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
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
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
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
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
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
                          delicate. Up or well must less rent read walk so be.
                          Easy sold at do hour sing spot.
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
                        <img src="../src/image/main_personal2.gif" alt="" />
                      </div>
                      <div className="layer layer1-2">
                        <img src="../src/image/main_personal2_1.gif" alt="" />
                      </div>
                    </div>

                    <div className="layer layer2">
                      <div className="layer layer2-1">
                        <img src="../src/image/main_personal3.gif" alt="" />
                      </div>
                      <div className="layer layer2-2">
                        <img src="../src/image/main_personal3_1.gif" alt="" />
                      </div>
                    </div>

                    <div className="layer layer3">
                      <div className="layer layer3-1">
                        <img src="../src/image/main_personal4.gif" alt="" />
                      </div>
                      <div className="layer layer3-2">
                        <img src="../src/image/main_personal4_1.gif" alt="" />
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
                    <img src="../src/image/Rectangle 247.png" alt="" />
                    <div className="line"></div>
                  </div>
                  <span className="control__show">TẤT CẢ</span>
                  <ul className="control-list">
                    {status ? (
                      <li
                        className="control-list__item active"
                        onClick={() => {
                          setAllProducts(true);
                          setStatus(true);
                        }}
                      >
                        TẤT CẢ
                      </li>
                    ) : (
                      <li
                        className="control-list__item"
                        onClick={() => {
                          setAllProducts(true);
                          setStatus(false);
                        }}
                      >
                        TẤT CẢ
                      </li>
                    )}

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(false)}
                    >
                      THƯƠNG MẠI
                    </li>

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(true)}
                    >
                      GIÁO DỤC
                    </li>

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(false)}
                    >
                      BỆNH VIỆN
                    </li>

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(true)}
                    >
                      THƯỜNG TRÚ
                    </li>

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(false)}
                    >
                      VĂN PHÒNG
                    </li>

                    <li
                      className="control-list__item"
                      onClick={() => setAllProducts(true)}
                    >
                      TÁI THIẾT
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-item">
                    <div className="multiple-items">
                      {allProducts
                        ? products.map((item: any) => {
                            return (
                              <div className="item">
                                <img
                                  className="project-img"
                                  src={item.image}
                                  alt=""
                                />
                                <div className="discription">
                                  <div className="title">{item.title}</div>
                                  <div className="more">{item.name}</div>
                                  <button
                                    className="mutiple-button"
                                    onClick={() => setOpenItem(true)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            );
                          })
                        : items.map((item: any) => {
                            return (
                              <div className="item">
                                <img
                                  className="project-img"
                                  src={item.image}
                                  alt=""
                                />
                                <div className="discription">
                                  <div className="title">{item.title}</div>
                                  <div className="more">{item.name}</div>
                                  <button
                                    className="mutiple-button"
                                    onClick={() => setOpenItem(true)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                </div>
              </div>

              {openItem ? (
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
                  <div className="close-pop" onClick={() => setOpenItem(false)}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                </div>
              ) : (
                ""
              )}

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
          </Container>
        </Project>

        <Recruitment>
          <Container>
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
                        Lorem ipsum dolor sit amet aenean nisi sociis ipsum...
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
                        Lorem ipsum dolor sit amet aenean nisi sociis ipsum...
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
                <img src="../src/image/world.png" alt="" />
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
