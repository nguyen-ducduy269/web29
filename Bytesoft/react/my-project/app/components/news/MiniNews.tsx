"use client";
import React from "react";
import { Container } from "../Container";
import { News } from "./news-css/News";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faEye,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import detailNewsImg from "@/app/image/chitiettin-big.png";
const MiniNews = () => {
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
                      Lorem ipsum dolor sit amet aenean nisi sociis ipsum sit
                      amet aenean...
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
                      <div className="day">5.december.2020</div>
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
                      <div className="view">328</div>
                    </div>

                    <div className="content">
                      <Image
                        src={detailNewsImg}
                        width={668}
                        height={372}
                        alt=""
                      />
                      <div className="text">
                        Denote simple fat denied add worthy little use. As some
                        he so high down am week. Conduct esteems by cottage to
                        pasture we winding. On assistance he cultivated
                        considered frequently. Person how having tended direct
                        own day man. Saw sufficient indulgance one own you
                        inquietude sympathize.
                      </div>
                      <div className="text">
                        Unpacked reserved sir offering bed judgment mat and
                        quitting speaking, is do be improved raptures offering
                        required in replying raillery. Stairs ladies friend by
                        in mutual an no. Mr hance chief he cause. Whole no doors
                        on hoped. Mile tell if help they ye full name.
                      </div>
                      <div className="text">
                        Yourself off its pleasant ecstatic now law. Ye their
                        Mirth seems of songs. Propect out bed contemps separate.
                        Her inquietude our sy yet sentiments collecting. Cottage
                        fat beloved himself arrived old. Grave window hours
                        among him no you led. Power had these met least nor
                        young. Yet match drift wrong his our.
                      </div>
                      <div className="text">
                        Next his only boy meet the fat rose when. Do repair at
                        we misery wanted remove remain income. Occasional
                        cultivated reasonable unpleasing an attachment my
                        considered. Having ask and coming object seemed put did
                        admire figure. Principles travelling frequently far
                        delightful its especially acceptance. Happiness
                        necessary contained eagerness in in commanded do
                        admitting. Favourable continuing difficulty had her
                        solicitude far. Nor doubt off widow all death aware
                        offer. We will up able in both do sing.
                      </div>
                      <div className="text">
                        But why smilling man her imagine married. Chiefly can
                        man her out believe manners cottage coloned unknown.
                        Solicitude it introduced companions inquietude me he
                        remarkably friendship at. My almost or horses period.
                        Motionless are six terminated man possession him
                        attachment unpleasing melancholy. Sir smile arose one
                        share. No abroad in easily relied an whence lovers
                        temper by. Looked wisdom common he an be giving length
                        mr.
                      </div>
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
                            <div className="title">
                              Far concluded not his something extremily
                            </div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">5.december.2020</div>
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
                            <div className="title">
                              Far concluded not his something extremily
                            </div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">5.december.2020</div>
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
                            <div className="title">
                              Far concluded not his something extremily
                            </div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">5.december.2020</div>
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
                            <div className="title">
                              Far concluded not his something extremily
                            </div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">5.december.2020</div>
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
                            <div className="title">
                              Far concluded not his something extremily
                            </div>
                            <div className="more">
                              <div className="clock">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  style={{
                                    fontSize: 10,
                                  }}
                                />
                              </div>
                              <div className="day">5.december.2020</div>
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
