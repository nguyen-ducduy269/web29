import styled from "styled-components";

export const Foot = styled.div`
  width: 100%;
  height: 340px;
  margin-top: 246px;
  background-color: rgba(23, 48, 92);
  position: relative;
  .footer-module {
    width: 100%;
    height: 100%;
    display: flex;
    .left-content {
      width: 50%;
      .item {
        width: 100%;
        height: 300px;
        margin-top: 37px;
        .main-content {
          width: 70%;
          height: 100%;
          margin: 0 auto;
          img {
            width: 250px;
            height: 73px;
            margin-top: 25px;
            margin-left: 59px;
          }
          .text {
            margin-top: 16px;
            margin-left: 44px;
            font-size: 11px;
            width: 317px;
            color: #fff;
          }
          .note {
            margin-left: 47px;
            margin-top: 26px;
            font-size: 12px;
            color: #fff;
          }
        }
      }
    }

    .middle-content {
      width: 20%;
      .item {
        width: 100%;
        height: 300px;
        margin-top: 37px;
        .service {
          width: 100%;
          height: 100%;
          margin-left: 30px;
          .title {
            font-size: 20px;
            padding-top: 44px;
            padding-left: 5px;
            text-decoration: underline;
            margin-bottom: 29px;
            color: #fff;
          }
          .noidung {
            margin-top: 15px;
            font-size: 12px;
            color: #fff;
            margin-left: 4px;
          }
        }
      }
    }

    .right-content {
      width: 30%;
      .item {
        width: 100%;
        height: 300px;
        margin-top: 37px;
        .service2 {
          width: 100%;
          height: 100%;
          margin-left: 64px;
          .title {
            font-size: 20px;
            padding-top: 44px;
            text-decoration: underline;
            margin-bottom: 29px;
            color: #fff;
          }
          .noidung {
            margin-top: 15px;
            font-size: 12px;
            color: #fff;
          }
        }
      }
    }
  }

  .footer-details {
    width: 804px;
    height: 172px;
    position: absolute;
    left: 51%;
    transform: translateX(-50%);
    top: -137px;
    background: linear-gradient(
      to bottom,
      rgba(43, 241, 159),
      rgba(168, 232, 224),
      rgba(168, 232, 224),
      rgba(43, 241, 159)
    );
    border-radius: 10px;
    z-index: 0;
    display: flex;
    &::before {
      content: "";
      position: absolute;
      right: 0px;
      left: 3px;
      top: 3px;
      height: 167px;
      background: #fff;
      border-radius: 10px;
      width: 797px;
      z-index: 0;
    }
    .content {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      .title {
        width: 100%;
        text-align: center;
        font-size: 19px;
        margin-left: -16px;
        margin-top: 20px;
        color: rgba(80, 80, 99);
      }
      #footer-details {
        overflow-x: hidden;
        display: flex;
        justify-content: space-around;
        .owl-stage-outer {
          width: 690px;
          margin: 0 auto;
          height: 70px;
          margin-top: 25px;
          .owl-item {
            .item {
              width: 160px;
              height: 90px;
              background-color: #fff;
              box-shadow: 10px 1px 10px rgb(23 48 92 / 20%),
                0px 0px 8px rgb(23 48 92 / 20%);

              img {
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
        .owl-nav {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    margin-top: 30%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 50%;
        .item {
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
            }
          }
        }
      }
      .right-content {
        width: 50%;
        .item {
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
          }
        }
      }
    }
    .footer-details {
      width: 730px;
      &::before {
        width: 725px;
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 600px) {
    margin-top: 30%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 50%;
        .item {
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
            }
          }
        }
      }
      .right-content {
        width: 50%;
        .item {
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
          }
        }
      }
    }
    .footer-details {
      animation: unset;
      width: 570px;
      left: 50%;
      &::before {
        width: 565px;
      }

      #footer-details {
        .item {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    margin-top: 40%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 50%;
        .item {
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
            }
          }
        }
      }
      .right-content {
        width: 50%;
        .item {
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
          }
        }
      }
    }
    .footer-details {
      animation: unset;
      width: 450px;
      left: 50%;
      &::before {
        width: 445px;
      }

      #footer-details {
        .item {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 425px) {
    margin-top: 45%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 50%;
        .item {
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
            }
          }
        }
      }
      .right-content {
        width: 50%;
        .item {
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              padding-top: 0;
            }
          }
        }
      }
    }
    .footer-details {
      animation: unset;
      width: 400px;
      left: 50%;
      &::before {
        width: 395px;
      }

      #footer-details {
        .item {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    margin-top: 70%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        margin-top: 25%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              font-size: 16px;
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 100%;
        .item {
          height: 250px;
          margin-top: 40px;
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              font-size: 24px;
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
              font-size: 14px;
            }
          }
        }
      }
      .right-content {
        width: 100%;
        .item {
          height: 250px;
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              font-size: 24px;
              padding-top: 0;
            }
            .noidung {
              font-size: 14px;
            }
          }
        }
      }
    }
    .footer-details {
      animation: unset;
      width: 350px;
      height: 270px;
      left: 50%;
      top: -125px;
      &::before {
        width: 344px;
        height: 264px;
      }

      #footer-details {
        flex-wrap: wrap;
        .item {
          width: 50%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    margin-top: 70%;
    height: 100%;
    .footer-module {
      flex-wrap: wrap;
      .left-content {
        width: 100%;
        margin-top: 30%;
        .item {
          .main-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-left: 0;
            }
            .text {
              width: 90%;
              font-size: 16px;
              margin-left: 0;
            }
            .note {
              margin-left: 0;
            }
          }
        }
      }
      .middle-content {
        width: 100%;
        margin-top: 40px;
        .item {
          height: 250px;
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              font-size: 24px;
              padding-top: 0;
            }
            .noidung {
              white-space: nowrap;
              font-size: 14px;
            }
          }
        }
      }
      .right-content {
        width: 100%;
        .item {
          height: 250px;
          .service2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            .title {
              font-size: 24px;
              padding-top: 0;
            }
            .noidung {
              font-size: 14px;
            }
          }
        }
      }
    }
    .footer-details {
      animation: unset;
      width: 300px;
      height: 245px;
      left: 50%;
      top: -115px;
      &::before {
        width: 294px;
        height: 239px;
      }

      #footer-details {
        flex-wrap: wrap;
        .item {
          width: 50%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
