"use client";
import React from "react";
import Image from "next/image";
import contentImg from "@/app/image/content-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import type { RootState } from "@/app/GolbalRedux/store";
import { useSelector } from "react-redux";

///// import components
import { Container } from "../Container";
import { Main } from "./main-news-css/Main";

const MainNews = () => {
  const mainContentText = useSelector(
    (state: RootState) => state.counter.mainContentText
  );
  const mainView = useSelector((state: RootState) => state.counter.mainView);
  const moduleTitle = useSelector(
    (state: RootState) => state.counter.moduleTitle
  );
  const moduleNewText = useSelector(
    (state: RootState) => state.counter.moduleNewText
  );
  const newHeading = useSelector(
    (state: RootState) => state.counter.newHeading
  );
  const newsTitle = useSelector((state: RootState) => state.counter.newsTitle);
  const switchOption = useSelector((state: RootState) => state.counter.switch);
  const page1 = useSelector((state: RootState) => state.counter.page1);
  const page2 = useSelector((state: RootState) => state.counter.page2);
  const page3 = useSelector((state: RootState) => state.counter.page3);
  const finalPage = useSelector((state: RootState) => state.counter.finalPage);
  const final = useSelector((state: RootState) => state.counter.final);

  return (
    <>
      <Main>
        <div className="section-new">
          <Container>
            <div className="bs-col">
              <div className="module-new">
                <div className="main-content">
                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>

                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>

                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>

                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>

                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>

                  <div className="content">
                    <Link href="/news/100">
                      <Image src={contentImg} width={330} height={253} alt="" />

                      <div className="more">
                        <div className="clock">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{
                              width: "10",
                              height: "10",
                            }}
                          />
                        </div>
                        <div className="date">{mainContentText}</div>
                        <div className="line">|</div>
                        <div className="eye">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              width: "11",
                              height: "15",
                            }}
                          />
                        </div>
                        <div className="view">{mainView}</div>
                      </div>

                      <div className="title">{moduleTitle}</div>

                      <div className="text">{moduleNewText}</div>
                    </Link>
                  </div>
                </div>

                <div className="outstand-new">
                  <div className="search">
                    <input type="text" placeholder="Tìm kiếm" />
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{
                        position: "absolute",
                        right: "21%",
                        fontSize: 14,
                        top: 15,
                        color: "rgba(26, 198, 103)",
                      }}
                    />
                  </div>

                  <div className="news">
                    <div className="heading">{newHeading}</div>
                    <div className="line"></div>
                    <div className="new">
                      <div className="content">
                        <div className="img"></div>
                        <div className="detail">
                          <div className="title">{newsTitle}</div>
                          <div className="more">
                            <div className="clock">
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                  fontSize: 12,
                                  marginRight: 7,
                                }}
                              />
                            </div>
                            <div className="day">{mainContentText}</div>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="img"></div>
                        <div className="detail">
                          <div className="title">{newsTitle}</div>
                          <div className="more">
                            <div className="clock">
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                  fontSize: 12,
                                  marginRight: 7,
                                }}
                              />
                            </div>
                            <div className="day">{mainContentText}</div>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="img"></div>
                        <div className="detail">
                          <div className="title">{newsTitle}</div>
                          <div className="more">
                            <div className="clock">
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                  fontSize: 12,
                                  marginRight: 7,
                                }}
                              />
                            </div>
                            <div className="day">{mainContentText}</div>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="img"></div>
                        <div className="detail">
                          <div className="title">{newsTitle}</div>
                          <div className="more">
                            <div className="clock">
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                  fontSize: 12,
                                  marginRight: 7,
                                }}
                              />
                            </div>
                            <div className="day">{mainContentText}</div>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="img"></div>
                        <div className="detail">
                          <div className="title">{newsTitle}</div>
                          <div className="more">
                            <div className="clock">
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                  fontSize: 12,
                                  marginRight: 7,
                                }}
                              />
                            </div>
                            <div className="day">{mainContentText}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="switch">
                <button className="prev">{switchOption}</button>
                <div className="page">
                  <a href="">{page1}</a>
                </div>
                <div className="page">
                  <a href="">{page2}</a>
                </div>
                <div className="page">
                  <a href="">{page3}</a>
                </div>
                <div className="page">
                  <a href="">{finalPage}</a>
                </div>
                <button className="next">{final}</button>
              </div>
            </div>
          </Container>
        </div>
      </Main>
    </>
  );
};

export default MainNews;
