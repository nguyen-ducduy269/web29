"use client";
import { Foot } from "./footer-css/Foot";
import { Container } from "../Container";
import Image from "next/image";
import type { RootState } from "@/app/GolbalRedux/store";
import { useSelector } from "react-redux";

import footerMainImg from "@/app/image/footer-main.png";
import vingroupImg from "@/app/image/vingroup.png";
import lanmarkImg from "@/app/image/lanmark.png";
import hancorkImg from "@/app/image/hancork.png";

const FooterIndex = () => {
  const footerMainText = useSelector(
    (state: RootState) => state.counter.footerMainText
  );
  const footerNote = useSelector(
    (state: RootState) => state.counter.footerNote
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
  const partnersCustomers = useSelector(
    (state: RootState) => state.counter.partnersCustomers
  );

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
                      <i>{footerMainText}</i>
                    </div>
                    <div className="note">{footerNote}</div>
                  </div>
                </div>
              </div>
              <div className="middle-content">
                <div className="item">
                  <div className="service">
                    <div className="title">
                      <b>{serviceTitle}</b>
                    </div>
                    <div className="noidung">{privacyPolicy}</div>
                    <div className="noidung">{termsAndConditions}</div>
                    <div className="noidung">{copyRightPolicy}</div>
                    <div className="noidung">{codeOfConduct}</div>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="item">
                  <div className="service2">
                    <div className="title">
                      <b>{serviceTitle}</b>
                    </div>
                    <div className="noidung">{chemicalEngineeringProject}</div>
                    <div className="noidung">
                      {miningEngineeringConstruction}
                    </div>
                    <div className="noidung">
                      {engineeringWeldingEngineering}
                    </div>
                    <div className="noidung">{weldingEngineering}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-details">
              <div className="content">
                <div className="title">
                  <b>{partnersCustomers}</b>
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
