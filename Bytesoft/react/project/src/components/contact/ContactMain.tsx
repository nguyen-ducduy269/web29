import styled from "styled-components";
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

const SectionContact = styled.div`
  .module-contact {
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .contact {
      width: 28%;
      height: 100%;
      a {
        text-decoration: none;
      }
      .location {
        width: 87%;
        display: flex;
        margin-left: 40px;
        margin-top: 8px;
        height: 80px;
        .main-img {
          width: 132px;
          margin-top: 4px;
          height: 76px;
          background: rgba(239, 243, 250);
          border-radius: 41px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          img {
            width: 22px;
            height: 22px;
          }
        }
        .text {
          color: rgba(17, 59, 94);
          padding-left: -18px;
          margin-top: 25px;
          font-size: 12px;
          width: 365px;
          padding-left: 11px;
          line-height: 16px;
        }
        &:hover {
          .main-img {
            background: rgba(27, 205, 141);
          }
        }
      }
      .call {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 33px;
        .main-img {
          width: 76px;
          margin-top: -1px;
          height: 72px;
          border-radius: 41px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          img {
            width: 22px;
            height: 22px;
          }
        }
        .active {
          background: rgba(27, 205, 141);
        }
        .number {
          font-size: 20px;
          padding-left: 10px;
          font-family: "OpenSans";
        }
        &:hover {
          .number {
            color: black;
          }
        }
      }
      .mail {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        margin-left: 25px;
        .main-img {
          width: 76px;
          margin-top: -1px;
          height: 72px;
          background: rgba(239, 243, 250);
          border-radius: 41px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          img {
            width: 22px;
            height: 18px;
          }
        }
        .gmail {
          font-family: "OpenSans";
          color: rgb(0, 45, 82);
          font-size: 14px;
          padding-left: 16px;
        }
        &:hover {
          .main-img {
            background: rgba(27, 205, 141);
          }
        }
      }
    }
  }
  .module-infor {
    width: 100%;
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .module-contact {
      .contact {
        .location {
          margin-left: 0;
          .main-img {
            width: 119px;
            margin-top: 19px;
            height: 60px;
          }
        }
        .call {
          .main-img {
            width: 52px;
            margin-top: 4px;
            height: 55px;
          }
        }
        .mail {
          .main-img {
            width: 87px;
            margin-top: -1px;
            height: 60px;
          }
          .gmail {
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .module-contact {
      .contact {
        width: 33%;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          .main-img {
            width: 128px;
            margin-top: 0;
            height: 52px;
          }
          .text {
            margin-top: 0;
          }
        }
        .call {
          height: 88px;
          .main-img {
            width: 48px;
            margin-top: 4px;
            height: 48px;
          }
          .number {
            font-size: 18px;
          }
        }
        .mail {
          margin-left: 0;
          .main-img {
            width: 87px;
            margin-top: -1px;
            height: 60px;
          }
          .gmail {
            font-size: 12px;
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 600px) {
    .module-contact {
      flex-wrap: wrap;
      height: 200px;
      .contact {
        width: 50%;
        height: 100px;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          .main-img {
            width: 115px;
            margin-top: 0;
            height: 75px;
          }
          .text {
            margin-top: 0;
          }
        }
        .call {
          height: 88px;
          .main-img {
            width: 70px;
            margin-top: 4px;
            height: 65px;
          }
          .number {
            font-size: 18px;
          }
        }
        .mail {
          margin-left: 0;
          .main-img {
            width: 75px;
            margin-top: -1px;
            height: 70px;
          }
          .gmail {
            font-size: 12px;
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    .module-contact {
      flex-wrap: wrap;
      height: 200px;
      .contact {
        width: 50%;
        height: 100px;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          .main-img {
            width: 115px;
            margin-top: 0;
            height: 75px;
          }
          .text {
            margin-top: 0;
          }
        }
        .call {
          height: 88px;
          .main-img {
            width: 70px;
            margin-top: 4px;
            height: 65px;
          }
          .number {
            font-size: 18px;
          }
        }
        .mail {
          margin-left: 0;
          .main-img {
            width: 75px;
            margin-top: -1px;
            height: 70px;
          }
          .gmail {
            font-size: 14px;
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 425px) {
    .module-contact {
      flex-wrap: wrap;
      height: 260px;
      margin-top: 30px;
      gap: 10px;
      .contact {
        width: 100%;
        height: 70px;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          margin-top: 0;
          .main-img {
            width: 80px;
            margin-top: 0px;
            height: 70px;
          }
          .text {
            font-size: 14px;
            margin-top: 0;
          }
        }
        .call {
          height: 100%;
          padding-left: 0;
          .main-img {
            width: 75px;
            margin-top: 0px;
            height: 70px;
          }
          .number {
            font-size: 18px;
          }
        }
        .mail {
          height: 70px;
          margin-left: 0;
          .main-img {
            width: 75px;
            margin-top: -1px;
            height: 70px;
          }
          .gmail {
            font-size: 14px;
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    .module-contact {
      flex-wrap: wrap;
      height: 260px;
      margin-top: 30px;
      gap: 10px;
      .contact {
        width: 100%;
        height: 70px;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          margin-top: 0;
          .main-img {
            width: 20%;
            margin-top: 0px;
            height: 70px;
          }
          .text {
            width: 80%;
            font-size: 14px;
            margin-top: 0;
          }
        }
        .call {
          width: 100%;
          height: 100%;
          padding-left: 0;
          .main-img {
            width: 20%;
            margin-top: 0px;
            height: 70px;
          }
          .number {
            width: 80%;
            font-size: 18px;
          }
        }
        .mail {
          width: 100%;
          height: 70px;
          margin-left: 0;
          .main-img {
            width: 20%;
            margin-top: -1px;
            height: 70px;
          }
          .gmail {
            width: 80%;
            font-size: 14px;
            padding-left: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    .module-contact {
      flex-wrap: wrap;
      height: 260px;
      margin-top: 30px;
      gap: 10px;
      .contact {
        width: 100%;
        height: 70px;
        .location {
          width: 100%;
          margin-left: 0;
          align-items: center;
          flex-direction: row;
          margin-top: 0;
          .main-img {
            width: 25%;
            margin-top: 0px;
            height: 70px;
          }
          .text {
            width: 75%;
            font-size: 14px;
            margin-top: 0;
          }
        }
        .call {
          width: 100%;
          height: 100%;
          padding-left: 0;
          .main-img {
            width: 25%;
            margin-top: 0px;
            height: 70px;
          }
          .number {
            width: 75%;
            font-size: 18px;
          }
        }
        .mail {
          width: 100%;
          height: 70px;
          margin-left: 0;
          .main-img {
            width: 25%;
            margin-top: -1px;
            height: 70px;
          }
          .gmail {
            width: 75%;
            font-size: 14px;
            padding-left: 6px;
          }
        }
      }
    }
  }
`;

const SectionInfor = styled.div`
  width: 100%;
  height: 368px;
  margin-top: 30px;
  display: flex;
  position: relative;
  .map {
    position: absolute;
    width: 65%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
    .point {
      position: absolute;
      top: 83px;
      left: 47%;
      img {
        width: 80px;
        height: 90px;
      }
    }
  }
  .contact-us {
    position: absolute;
    width: 44%;
    right: 0;
    height: 100%;
    background-color: rgba(27, 205, 141);
    z-index: 2;
    .title {
      margin-top: 23px;
      font-size: 21px;
      color: #fff;
      margin-left: 21px;
    }
    .help {
      color: #fff;
      width: 100%;
      margin-top: 2px;
      margin-left: 23px;
      font-size: 12px;
      margin-bottom: 20px;
    }
    .form {
      width: 55%;
      margin-left: 18px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 8px;
      input {
        background-color: rgba(86, 216, 171);
        color: white;
        font-size: 12px;
        height: 35px;
        border-radius: 5px;
        border: none;
      }
      input::placeholder {
        font-style: normal;
        color: white;
        padding-left: 10px;
      }
    }
    .content {
      width: 55%;
      height: 100px;
      margin-top: 10px;
      margin-left: 18px;
      textarea {
        width: 100%;
        height: 100%;
        background-color: rgba(86, 216, 171);
        font-size: 12px;
        color: white;
        border-radius: 5px;
        border: none;
      }
      textarea::placeholder {
        font-style: normal;
        color: white;
        font-size: 12px;
        padding-left: 10px;
      }
    }
    button {
      margin-top: 10px;
      width: 55%;
      height: 33px;
      margin-left: 19px;
      font-size: 12px;
      background-color: white;
      border: none;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0px;
      width: 154px;
      left: -153px;
      right: 0;
      height: 100%;
      background: rgba(27, 205, 141);
      clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .map {
      .point {
        left: 45%;
      }
    }
    .contact-us {
      .form {
        width: 80%;
      }
      .content {
        width: 80%;
      }
      button {
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .map {
      .point {
        left: 44%;
      }
    }
    .contact-us {
      .form {
        width: 94%;
        margin-left: 0;
      }
      .content {
        width: 94%;
        margin-left: 0;
      }
      button {
        width: 94%;
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 600px) {
    height: 400px;
    margin-top: 0;
    .map {
      .point {
        left: 44%;
      }
    }
    .contact-us {
      .form {
        width: 85%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 85%;
        height: 90px;
      }
      button {
        width: 85%;
      }
      .help {
        width: 85%;
        margin-bottom: 10px;
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    height: 400px;
    margin-top: 0;
    .map {
      width: 56%;
      .point {
        left: 39%;
        top: 93px;
      }
    }
    .contact-us {
      .form {
        width: 85%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 85%;
        height: 90px;
      }
      button {
        width: 85%;
      }
      .help {
        width: 85%;
        margin-bottom: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 120px;
        left: -118px;
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 425px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 43%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 50%;
      .form {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 43%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 50%;
      .form {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 40%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 100%;
      .form {
        width: 90%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }
`;
