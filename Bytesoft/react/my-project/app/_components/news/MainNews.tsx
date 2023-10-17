"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

///// import components
import { Container } from "../Container";
import { Main } from "./main-news-css/Main";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

const MainNews = () => {
  const { data: entities } = useFetchingData("http://localhost:3001/data");
  if (!entities) return;

  return (
    <>
      <Main>
        <div className="section-new">
          <Container>
            <div className="bs-col">
              <div className="module-new">
                <div className="main-content">
                  {entities.mainContent.map((item: any) => {
                    return (
                      <div className="content" key={item.id}>
                        <Link href={`/news/${item.id}`}>
                          <Image
                            src={item.image}
                            width={330}
                            height={253}
                            alt=""
                          />

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
                            <div className="date">{item.mainContentText}</div>
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
                            <div className="view">{item.mainView}</div>
                          </div>

                          <div className="title">{item.moduleTitle}</div>

                          <div className="text">{item.moduleNewText}</div>
                        </Link>
                      </div>
                    );
                  })}
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
                    <div className="heading">{entities.newHeading}</div>
                    <div className="line"></div>
                    <div className="new">
                      {entities.mainNew.map((a: any) => {
                        return (
                          <div className="content" key={a.id}>
                            <div className="img"></div>
                            <div className="detail">
                              <div className="title">{a.moduleNews}</div>
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
                                <div className="day">
                                  {entities.mainContentText}
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

              <div className="switch">
                <button className="prev">{entities.switch}</button>
                <div className="page">
                  <a href="">{entities.page1}</a>
                </div>
                <div className="page">
                  <a href="">{entities.page2}</a>
                </div>
                <div className="page">
                  <a href="">{entities.page3}</a>
                </div>
                <div className="page">
                  <a href="">{entities.finalPage}</a>
                </div>
                <button className="next">{entities.final}</button>
              </div>
            </div>
          </Container>
        </div>
      </Main>
    </>
  );
};

export default MainNews;
