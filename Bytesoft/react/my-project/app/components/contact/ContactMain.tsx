"use client";
import React from "react";
import { Container } from "../Container";
import { SectionContact } from "./contact-css/SectionContact";
import { SectionInfor } from "./contact-css/SectionInfor";
import Image from "next/image";
import type { RootState } from "@/app/GolbalRedux/store";
import { useSelector } from "react-redux";

import locationImg from "@/app/image/location.png";
import callImg from "@/app/image/call.png";
import mailImg from "@/app/image/mail.png";
import point from "@/app/image/point.png";

const ContactMain = () => {
  const locationText = useSelector(
    (state: RootState) => state.counter.locationText
  );
  const callNumber = useSelector(
    (state: RootState) => state.counter.callNumber
  );
  const contactMail = useSelector(
    (state: RootState) => state.counter.contactMail
  );
  const help = useSelector((state: RootState) => state.counter.help);
  const contactHeaderTitle = useSelector(
    (state: RootState) => state.counter.contactHeaderTitle
  );

  return (
    <>
      <SectionContact>
        <Container>
          <div className="module-contact">
            <div className="contact">
              <a href="">
                <div className="location">
                  <div className="main-img">
                    <Image src={locationImg} width={22} height={22} alt="" />
                  </div>
                  <div className="text">{locationText}</div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="call">
                  <div className="main-img active">
                    <Image src={callImg} width={22} height={22} alt="" />
                  </div>
                  <div className="number">{callNumber}</div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="mail">
                  <div className="main-img">
                    <Image src={mailImg} width={22} height={18} alt="" />
                  </div>
                  <div className="gmail">{contactMail}</div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </SectionContact>

      <SectionInfor>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.9867388875784!2d105.7691157117331!3d21.03374719669541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550fe0328507%3A0x68af5d16b216cd6d!2zVMOyYSBuaMOgIFN1biBTcXVhcmU!5e0!3m2!1svi!2s!4v1677071794121!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
          <div className="point">
            <Image src={point} width={80} height={90} alt="" />
          </div>
        </div>

        <div className="contact-us">
          <div className="title">
            <b>{contactHeaderTitle}</b>
          </div>
          <div className="help">{help}</div>
          <div className="form">
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Tổ chức" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="content">
            <textarea name="" id="" placeholder="Nội dung..."></textarea>
          </div>
          <button>GỬI TIN</button>
        </div>
      </SectionInfor>
    </>
  );
};

export default ContactMain;
