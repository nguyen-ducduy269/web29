"use client";
import { Foot } from "./footer-css/Foot";
import { Container } from "../Container";
import Image from "next/image";
// import useFetchData from "@/app/useFetchData";
import { useFetch } from "@/app/core/useFetch";

import footerMainImg from "@/app/image/footer-main.png";
import vingroupImg from "@/app/image/vingroup.png";
import lanmarkImg from "@/app/image/lanmark.png";
import hancorkImg from "@/app/image/hancork.png";

const FooterIndex = () => {
  // const entitiesItem = useFetchData();
  // const entities = entitiesItem.entities;

  let entities: any = {};
  entities = useFetch();

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
                  <div className="item">
                    <a href="">
                      <Image src={vingroupImg} alt="" width={160} height={90} />
                    </a>
                  </div>
                  <div className="item">
                    <a href="">
                      <Image src={lanmarkImg} alt="" width={160} height={90} />
                    </a>
                  </div>
                  <div className="item">
                    <a href="">
                      <Image src={hancorkImg} alt="" width={160} height={90} />
                    </a>
                  </div>
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
