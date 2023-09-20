"use client";
import React from "react";
import { Container } from "../Container";
import { News } from "./news-css/News";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { detailNewsImg } from "../ImportImage";
import useFetchingData from "@/app/useFetchingData";

const MiniNews = () => {
  const { data: entities } = useFetchingData();
  if (!entities) return;

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
                    <div className="title">{entities.moduleTitle}</div>

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
                      <div className="day">{entities.mainContentText}</div>
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
                      <div className="view">{entities.mainView}</div>
                    </div>

                    <div className="content">
                      <Image
                        src={detailNewsImg}
                        width={668}
                        height={372}
                        alt=""
                      />
                      <div className="text">{entities.denote}</div>
                      <div className="text">{entities.unpacked}</div>
                      <div className="text">{entities.yourSelf}</div>
                      <div className="text">{entities.bodyMeet}</div>
                      <div className="text">{entities.smilling}</div>
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
                    <div className="heading">{entities.newHeading}</div>
                    <div className="line"></div>
                    <div className="new">
                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{entities.moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">
                                {entities.mainContentText}
                              </div>
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
                            <div className="title">{entities.moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">
                                {entities.mainContentText}
                              </div>
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
                            <div className="title">{entities.moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">
                                {entities.mainContentText}
                              </div>
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
                            <div className="title">{entities.moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">
                                {entities.mainContentText}
                              </div>
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
                            <div className="title">{entities.moduleNews}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">
                                {entities.mainContentText}
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
          </div>
        </Container>
      </News>
    </>
  );
};

export default MiniNews;
