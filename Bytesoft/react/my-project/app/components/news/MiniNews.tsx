"use client";
import React from "react";
import { Container } from "../Container";
import { News } from "./news-css/News";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RootState } from "@/app/GolbalRedux/store";
import { useSelector } from "react-redux";

import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import detailNewsImg from "@/app/image/chitiettin-big.png";

const MiniNews = () => {
  const moduleTitle = useSelector(
    (state: RootState) => state.counter.moduleTitle
  );
  const mainContentText = useSelector(
    (state: RootState) => state.counter.mainContentText
  );
  const mainView = useSelector((state: RootState) => state.counter.mainView);
  const newHeading = useSelector(
    (state: RootState) => state.counter.newHeading
  );
  const moduleNews = useSelector(
    (state: RootState) => state.counter.moduleNews
  );
  const denote = useSelector((state: RootState) => state.counter.denote);
  const unpacked = useSelector((state: RootState) => state.counter.unpacked);
  const yourSelf = useSelector((state: RootState) => state.counter.yourSelf);
  const bodyMeet = useSelector((state: RootState) => state.counter.bodyMeet);
  const smilling = useSelector((state: RootState) => state.counter.smilling);

  return (
    <>
      <News>
        <Container>
          <div className="module module-index">
            <div className="module-header">
              <h2 className="title"></h2>
            </div>

            <div className="module-content">
              <div className="main-infor">
                <div className="item">
                  <div className="all">
                    <div className="title">{moduleTitle}</div>

                    <div className="about">
                      <div className="clock">
                        <FontAwesomeIcon
                          icon={faClock}
                          style={{
                            fontSize: 10,
                            color: "gray",
                          }}
                        />
                      </div>
                      <div className="day">{mainContentText}</div>
                      <div className="line">|</div>
                      <div className="eye">
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{
                            width: "11",
                            height: "10",
                            color: "gray",
                          }}
                        />
                      </div>
                      <div className="view">{mainView}</div>
                    </div>

                    <div className="content">
                      <Image
                        src={detailNewsImg}
                        width={668}
                        height={372}
                        alt=""
                      />
                      <div className="text">{denote}</div>
                      <div className="text">{unpacked}</div>
                      <div className="text">{yourSelf}</div>
                      <div className="text">{bodyMeet}</div>
                      <div className="text">{smilling}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="more-infor">
                <div className="item">
                  <div className="search">
                    <input type="text" placeholder="Tìm kiếm" />
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{
                        fontSize: 14,
                        position: "absolute",
                        right: 5,
                        top: 12,
                        color: "#1bc668",
                      }}
                    />
                  </div>

                  <div className="news">
                    <div className="heading">{newHeading}</div>
                    <div className="line"></div>
                    <div className="new">
                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{mainContentText}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{mainContentText}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{mainContentText}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{mainContentText}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
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
              </div>
            </div>
          </div>
        </Container>
      </News>
    </>
  );
};

export default MiniNews;
