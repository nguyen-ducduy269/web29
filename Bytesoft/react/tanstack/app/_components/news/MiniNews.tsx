"use client";
import React from "react";
import { Container } from "../Container";
import { News } from "./news-css/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

//// import icons
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

///// import images
import { detailNewsImg } from "../ImportImage";
import Image from "next/image";

const MiniNews = () => {
  const detailId: any = localStorage.getItem("newsContent");
  const mainId = JSON.parse(detailId);
  const { data: entities } = useFetchingData(
    `http://localhost:3001/newsDetail?id=${mainId}`
  );
  if (!entities) return;

  const data = entities[0];

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
                    <div className="title">
                      {data.mainTitle}, {data.moduleTitle}
                    </div>

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
                      <div className="day">{data.mainContentText}</div>
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
                      <div className="view">{data.mainView}</div>
                    </div>

                    <div className="content">
                      <Image
                        src={detailNewsImg}
                        width={668}
                        height={372}
                        alt=""
                      />
                      <div className="text">{data.denote}</div>
                      <div className="text">{data.unpacked}</div>
                      <div className="text">{data.yourSelf}</div>
                      <div className="text">{data.bodyMeet}</div>
                      <div className="text">{data.smilling}</div>
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
                    <div className="heading">TIN NỔI BẬT</div>
                    <div className="line"></div>
                    <div className="new">
                      <div className="bs-row">
                        <div className="col-md-4">
                          <div className="img"></div>
                        </div>
                        <div className="col-md-8">
                          <div className="detail">
                            <div className="title">{data.moduleNewText}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{data.mainContentText}</div>
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
                            <div className="title">{data.moduleNewText}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{data.mainContentText}</div>
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
                            <div className="title">{data.moduleNewText}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{data.mainContentText}</div>
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
                            <div className="title">{data.moduleNewText}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{data.mainContentText}</div>
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
                            <div className="title">{data.moduleNewText}</div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">{data.mainContentText}</div>
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
