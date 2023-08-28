"use client";
import { Foot } from "./footer-css/Foot";
import { Container } from "../Container";
import Image from "next/image";

import footerMainImg from "@/app/image/footer-main.png";
import vingroupImg from "@/app/image/vingroup.png";
import lanmarkImg from "@/app/image/lanmark.png";
import hancorkImg from "@/app/image/hancork.png";

const FooterIndex = () => {
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
                      <i>
                        ACEFIC5 là Nhà thầu chính thi công tại các dự án lớn tại
                        Hà Nội, Đà Nẵng và nhiều tỉnh thành thành phố trên cả
                        nước. Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái Bình
                        Dương luôn đáp ứng được các yêu cầu khắt khe của các Chủ
                        đầu tư, luôn đem đến cho khách hàng và xã hội các sản
                        phẩm với chất lượng tốt nhất, tiến độ nhanh nhất mà vẫn
                        đảm bảo tính an toàn và hiệu quả đầu tư trên mỗi công
                        trình.....
                      </i>
                    </div>
                    <div className="note">
                      Copyright 2019 Acefic5. All Rights Reserved
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-content">
                <div className="item">
                  <div className="service">
                    <div className="title">
                      <b>DỊCH VỤ</b>
                    </div>
                    <div className="noidung">Privacy Policy</div>
                    <div className="noidung">Terms and Conditions</div>
                    <div className="noidung">Copyright Policy</div>
                    <div className="noidung">Code of Conduct</div>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="item">
                  <div className="service2">
                    <div className="title">
                      <b>DỊCH VỤ</b>
                    </div>
                    <div className="noidung">Chemical Engineering Projects</div>
                    <div className="noidung">
                      Mining Engineering Construction
                    </div>
                    <div className="noidung">
                      Engineering Welding Engineering
                    </div>
                    <div className="noidung">Welding Engineering</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-details">
              <div className="content">
                <div className="title">
                  <b>ĐỐI TÁC KHÁCH HÀNG</b>
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
