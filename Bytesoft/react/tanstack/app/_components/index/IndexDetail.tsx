"use client";
import React from "react";
import { Container } from "../Container";
import { News } from "../news/news-css/News";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

const IndexDetail = () => {
  const { data: indexDetail } = useFetchingData(
    "http://localhost:5000/lastest-new"
  );
  if (!indexDetail) return;

  const detailId: any = localStorage.getItem("content");
  const mainId = JSON.parse(detailId);
  const item = indexDetail.find((t: any) => t.id === mainId);

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
                    <div className="title">{item.detail.title}</div>

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
                      <div className="day">{item.mainContentText}</div>
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
                      <div className="view">{item.mainView}</div>
                    </div>

                    <div className="content">
                      <Image
                        src={item.detail.image}
                        width={668}
                        height={372}
                        alt=""
                      />
                      <div className="text">{item.detail.denote}</div>
                      <div className="text">{item.detail.unpacked}</div>
                      <div className="text">{item.detail.yourSelf}</div>
                      <div className="text">{item.detail.bodyMeet}</div>
                      <div className="text">{item.detail.smilling}</div>
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
                    <div className="heading">{item.newHeading}</div>
                    <div className="line"></div>
                    <div className="new">
                      {item.mainContent.map((i: any) => {
                        return (
                          <div className="bs-row" key={i.id}>
                            <div className="col-md-4">
                              <div className="img"></div>
                            </div>
                            <div className="col-md-8">
                              <div className="detail">
                                <div className="title">{i.moduleNews}</div>
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
                                    {item.mainContentText}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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

export default IndexDetail;
