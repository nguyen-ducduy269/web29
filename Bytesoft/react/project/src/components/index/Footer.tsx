import { Container } from "../Container";
import { Foot } from "./footer-css/Foot";

export const Footer = () => {
  return (
    <>
      <Foot>
        <Container>
          <div className="bs-row">
            <div className="footer-module">
              <div className="left-content">
                <div className="item">
                  <div className="main-content">
                    <img src="../src/image/footer-main.png" alt="" />
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
                      <img src="../src/image/vingroup.png" alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="">
                      <img src="../src/image/lanmark.png" alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="">
                      <img src="../src/image/hancork.png" alt="" />
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
