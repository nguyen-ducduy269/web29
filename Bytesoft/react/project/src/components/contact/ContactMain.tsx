import { SectionContact } from "./css/SectionContact";
import { SectionInfor } from "./css/SectionInfor";
import { Container } from "../Container";

export const ContactMain = () => {
  return (
    <>
      <SectionContact>
        <Container>
          <div className="module-contact">
            <div className="contact">
              <a href="">
                <div className="location">
                  <div className="main-img">
                    <img src="../src/image/location.png" alt="" />
                  </div>
                  <div className="text">
                    Tầng 2, Lô 8 + 15 NV, Khu HH1 Ô16 Tây Hồ Tây, P.Xuân La,
                    Q.Tây Hồ, TP.Hà Nội.
                  </div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="call">
                  <div className="main-img active">
                    <img src="../src/image/call.png" alt="" />
                  </div>
                  <div className="number">024.6666.7069</div>
                </div>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <div className="mail">
                  <div className="main-img">
                    <img src="../src/image/mail.png" alt="" />
                  </div>
                  <div className="gmail">vanphongace5.ace@gmail.com</div>
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
            <img src="../src/image/point.png" alt="" />
          </div>
        </div>

        <div className="contact-us">
          <div className="title">
            <b>LIÊN HỆ</b>
          </div>
          <div className="help">
            Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn
          </div>
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