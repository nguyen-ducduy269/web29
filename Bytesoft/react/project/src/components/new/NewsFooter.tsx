import { Footer } from "./new-footer/Footer";

export const NewsFooter = () => {
  return (
    <>
      <Footer>
        <div className="img">
          <img src="../src/image/footer-img.png" alt="" />
        </div>

        <div className="layout"></div>

        <div className="content">
          <div className="bs-left">
            <div className="left-content">
              <div className="item">
                <div className="noidung">
                  <img src="../src/image/footer.png" alt="" />
                  <div className="text">
                    ACEFIC5 là Nhà thầu chính thi công tại các dự án lớn tại Hà
                    Nội, Đà Nẵng và nhiều tỉnh thành thành phố trên cả nước.
                    Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái Bình Dương luôn
                    đáp ứng được các yêu cầu khắt khe của các Chủ đầu tư, luôn
                    đem đến cho khách hàng và xã hội các sản phẩm với chất lượng
                    tốt nhất, tiến độ nhanh nhất mà vẫn đảm bảo tính an toàn và
                    hiệu quả đầu tư trên mỗi công trình....
                  </div>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="item">
                <div className="bs-right">
                  <div className="service">
                    <div className="title">DỊCH VỤ</div>
                    <div className="detail">
                      <div className="infor">Privacy Policy</div>
                      <div className="infor">Terms and Conditions</div>
                      <div className="infor">Copyright Policy</div>
                      <div className="infor">Code of Conduct</div>
                    </div>
                  </div>

                  <div className="services">
                    <div className="title">DỊCH VỤ</div>
                    <div className="detail">
                      <div className="infor">Chemical Engineering Projects</div>
                      <div className="infor">
                        Mining Engineering Construction
                      </div>
                      <div className="infor">
                        Engineering Welding Engineering
                      </div>
                      <div className="infor">Welding Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="final">
            Bản quyền © 2019 bởi Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái
            Bình Dương
          </div>
        </div>
      </Footer>
    </>
  );
};
