"use client";
import React from "react";
import { Foot } from "./Foot";
import type { RootState } from "@/app/GolbalRedux/store";
import { useSelector } from "react-redux";

import Image from "next/image";
import footerImg from "@/app/image/footer-img.png";
import footImg from "@/app/image/footer.png";

const Footer = () => {
  const footerMainText = useSelector(
    (state: RootState) => state.counter.footerMainText
  );
  const serviceTitle = useSelector(
    (state: RootState) => state.counter.serviceTitle
  );
  const privacyPolicy = useSelector(
    (state: RootState) => state.counter.privacyPolicy
  );
  const termsAndConditions = useSelector(
    (state: RootState) => state.counter.termsAndConditions
  );
  const copyRightPolicy = useSelector(
    (state: RootState) => state.counter.copyRightPolicy
  );
  const codeOfConduct = useSelector(
    (state: RootState) => state.counter.codeOfConduct
  );
  const chemicalEngineeringProject = useSelector(
    (state: RootState) => state.counter.chemicalEngineeringProject
  );
  const miningEngineeringConstruction = useSelector(
    (state: RootState) => state.counter.miningEngineeringConstruction
  );
  const engineeringWeldingEngineering = useSelector(
    (state: RootState) => state.counter.engineeringWeldingEngineering
  );
  const weldingEngineering = useSelector(
    (state: RootState) => state.counter.weldingEngineering
  );
  const footerFinal = useSelector(
    (state: RootState) => state.counter.footerFinal
  );

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
                  <div className="text">{footerMainText}</div>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="item">
                <div className="bs-right">
                  <div className="service">
                    <div className="title">{serviceTitle}</div>
                    <div className="detail">
                      <div className="infor">{privacyPolicy}</div>
                      <div className="infor">{termsAndConditions}</div>
                      <div className="infor">{copyRightPolicy}</div>
                      <div className="infor">{codeOfConduct}</div>
                    </div>
                  </div>

                  <div className="services">
                    <div className="title">{serviceTitle}</div>
                    <div className="detail">
                      <div className="infor">{chemicalEngineeringProject}</div>
                      <div className="infor">
                        {miningEngineeringConstruction}
                      </div>
                      <div className="infor">
                        {engineeringWeldingEngineering}
                      </div>
                      <div className="infor">{weldingEngineering}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="final">{footerFinal}</div>
        </div>
      </Foot>
    </>
  );
};

export default Footer;
