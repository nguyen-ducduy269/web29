"use client";
import React from "react";
import { Foot } from "./Foot";

///// import hooks
import { useGetDataData } from "@/app/_hooks/useGetDataData";

import Image from "next/image";
import { footerImg, footImg } from "../ImportImage";

const Footer = () => {
  const { data: entities } = useGetDataData();
  if (!entities) return;

  return (
    <>
      <Foot>
        <div className="img">
          <Image src={footerImg} alt="" />
        </div>

        <div className="layout"></div>

        <div className="content">
          <div className="bs-left">
            <div className="left-content">
              <div className="item">
                <div className="noidung">
                  <Image src={footImg} width={233} height={59} alt="" />
                  <div className="text">{entities.footerMainText}</div>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="item">
                <div className="bs-right">
                  <div className="service">
                    <div className="title">{entities.serviceTitle}</div>
                    <div className="detail">
                      <div className="infor">{entities.privacyPolicy}</div>
                      <div className="infor">{entities.termsAndConditions}</div>
                      <div className="infor">{entities.copyRightPolicy}</div>
                      <div className="infor">{entities.codeOfConduct}</div>
                    </div>
                  </div>

                  <div className="services">
                    <div className="title">{entities.serviceTitle}</div>
                    <div className="detail">
                      <div className="infor">
                        {entities.chemicalEngineeringProject}
                      </div>
                      <div className="infor">
                        {entities.miningEngineeringConstruction}
                      </div>
                      <div className="infor">
                        {entities.engineeringWeldingEngineering}
                      </div>
                      <div className="infor">{entities.weldingEngineering}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="final">{entities.footerFinal}</div>
        </div>
      </Foot>
    </>
  );
};

export default Footer;