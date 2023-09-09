import styled from "styled-components";

export const LastestNews = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  position: relative;
  .bs-row {
    display: flex;
    flex-direction: column;
    .news_module {
      .title {
        font-size: 35px;
        text-align: center;
        margin-top: 60px;
        color: #1d407d;
        font-family: sans-serif;
      }
      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        img {
          width: 14px;
          height: 14px;
          margin: 0px 10px;
        }
        .line {
          width: 80px;
          height: 2px;
          background-color: rgba(131, 151, 185);
        }
      }

      .main-content {
        max-width: 90%;
        margin: 0 auto;
        height: 310px;
        display: flex;
        margin-top: 75px;
        justify-content: center;
        margin-bottom: 62px;
        .content {
          width: 30%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
          .discription {
            position: absolute;
            background-color: #fff;
            width: 73%;
            height: 150px;
            bottom: -10px;
            .heading {
              display: flex;
              margin-top: 7px;
              margin-left: 20px;
              color: rgba(139, 158, 189);
              .clock {
                margin-right: 6px;
                margin-top: 3px;
              }
              .text {
                font-size: 11px;
                margin-right: 11px;
                font-family: sans-serif;
              }
              .block {
                margin-right: 15px;
              }
              .eye {
                margin-top: 2px;
                margin-right: 8px;
              }
              .view {
                font-size: 10px;
                margin-top: 2px;
              }
            }
            .text {
              font-size: 18px;
              margin-left: 15px;
              line-height: 22px;
              font-family: "OpenSans";
            }
            .button {
              display: flex;
              margin-left: 10px;
              margin-top: 17px;
              h4 {
                font-size: 12px;
                margin: 8px 10px 0px 4px; //top right bottom left
                font-family: sans-serif;
              }
              button {
                width: 32px;
                padding: 0;
                height: 32px;
                font-size: 11px;
                color: #fff;
                border: none;
                background-color: rgba(31, 211, 146);
              }
            }
            &:hover {
              box-shadow: 0px 0 40px rgb(131 151 185),
                0px 0px 0px rgb(131 151 185);
              .heading {
                .text {
                  color: rgba(139, 158, 189);
                }
              }
              .text {
                color: rgba(19, 97, 232);
              }
            }
          }
        }
      }
    }
    .news-img {
      position: absolute;
      z-index: -1;
      img {
        width: 71%;
        margin-top: -31px;
        margin-left: 139px;
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .bs-row {
      .news_module {
        .main-content {
          margin-top: 50px;
          .content {
            width: 100%;
            .discription {
              .heading {
                margin-left: 30px;
                .clock {
                  margin-right: -6px;
                }
              }
              .button {
                button {
                  font-size: 24px;
                  width: 35px;
                  height: 35px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          margin-top: 50px;
          gap: 10px;
          height: 100%;
          .content {
            width: 100%;
            height: 250px;
            img {
              max-width: 100%;
              height: 180px;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 80%;
              height: 140px;
              bottom: 0%;
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 25px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 5;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 87%;
              height: 130px;
              bottom: -35px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 20px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 5;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 87%;
              height: 130px;
              bottom: -50px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 480px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 20px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 5;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 87%;
              height: 130px;
              bottom: -50px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 425px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 20px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 5;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 87%;
              height: 130px;
              bottom: -50px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 20px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 0;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 87%;
              height: 130px;
              bottom: -50px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    height: 100%;
    margin-bottom: 30px;
    .bs-row {
      .news_module {
        max-width: 100%;
        .main-content {
          display: flex;
          flex-direction: column;
          margin-top: 22px;
          gap: 50px;
          height: 100%;
          .content {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
            z-index: 5;
            img {
              width: 100%;
              height: 100%;
            }
            .discription {
              position: absolute;
              background-color: #fff;
              width: 90%;
              height: 150px;
              bottom: -89px;
              box-shadow: 0 0 40px rgb(131 151 185), 0 0 0 rgb(131 151 185);
              .heading {
                margin-left: 10px;
                .clock {
                  margin-right: -5px;
                }
                .text {
                  margin-left: 10px;
                }
              }
              .text {
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
        }
        button {
          width: 150px;
          height: 40px;
          bottom: -32px;
          font-size: 14px;
        }
      }
      .news-img {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
`;
