"use client";
import React from "react";
import { Container } from "../Container";
import { SectionContact } from "./contact-css/SectionContact";
import { SectionInfor } from "./contact-css/SectionInfor";
import Image from "next/image";

import { locationImg, callImg, mailImg, point } from "../ImportImage";
import { useFetchingData } from "@/app/useFetchingData";

const ContactMain = () => {
  const { data: entities } = useFetchingData();
  if (!entities) return;

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
                  <div className="text">{entities.locationText}</div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="call">
                  <div className="main-img active">
                    <Image src={callImg} width={22} height={22} alt="" />
                  </div>
                  <div className="number">{entities.callNumber}</div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="mail">
                  <div className="main-img">
                    <Image src={mailImg} width={22} height={18} alt="" />
                  </div>
                  <div className="gmail">{entities.contactMail}</div>
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
            <b>{entities.contactHeaderTitle}</b>
          </div>
          <div className="help">{entities.help}</div>
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
