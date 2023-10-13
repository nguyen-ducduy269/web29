"use client";
import { Foot } from "./footer-css/Foot";
import { Container } from "../Container";
import Image from "next/image";

import {
  footerMainImg,
  vingroupImg,
  lanmarkImg,
  hancorkImg,
} from "../ImportImage";
import { useFetchingData } from "@/app/useFetchingData";
import Slider from "react-slick";

const FooterIndex = () => {
  const { data: entities } = useFetchingData("http://localhost:3001/data");
  if (!entities) return;

  function SampleArrow(props: any) {
    const { className, style } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
      />
    );
  }

  const contentSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Foot>
        <Container>
          <div className="bs-row">
            <div className="footer-module">
              <div className="left-content">
                <div className="item">
                  <div className="main-content">
                    <Image src={footerMainImg} alt="" />
                    <div className="text">
                      <i>{entities.footerMainText}</i>
                    </div>
                    <div className="note">{entities.footerNote}</div>
                  </div>
                </div>
              </div>
              <div className="middle-content">
                <div className="item">
                  <div className="service">
                    <div className="title">
                      <b>{entities.serviceTitle}</b>
                    </div>
                    <div className="noidung">{entities.privacyPolicy}</div>
                    <div className="noidung">{entities.termsAndConditions}</div>
                    <div className="noidung">{entities.copyRightPolicy}</div>
                    <div className="noidung">{entities.codeOfConduct}</div>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="item">
                  <div className="service2">
                    <div className="title">
                      <b>{entities.serviceTitle}</b>
                    </div>
                    <div className="noidung">
                      {entities.chemicalEngineeringProject}
                    </div>
                    <div className="noidung">
                      {entities.miningEngineeringConstruction}
                    </div>
                    <div className="noidung">
                      {entities.engineeringWeldingEngineering}
                    </div>
                    <div className="noidung">{entities.weldingEngineering}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-details">
              <div className="content">
                <div className="title">
                  <b>{entities.partnersCustomers}</b>
                </div>
                <div id="footer-details">
                  <Slider {...contentSettings}>
                    <Image src={vingroupImg} alt="" width={100} height={120} />

                    <Image src={lanmarkImg} alt="" width={100} height={120} />

                    <Image src={hancorkImg} alt="" width={100} height={120} />

                    <Image src={vingroupImg} alt="" width={100} height={120} />

                    <Image src={lanmarkImg} alt="" width={100} height={120} />

                    <Image src={hancorkImg} alt="" width={100} height={120} />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Foot>
    </>
  );
};

export default FooterIndex;
