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
        margin-bottom: 75px;
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

      .content {
        width: 100%;
        height: 310px;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        position: relative;
        img {
          width: 90%;
        }

        .discription {
          width: 60%;
          background-color: white;
          position: absolute;
          bottom: 3%;
          padding: 10px;
          .heading {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            color: rgba(139, 158, 189);
            font-family: "OpenSans";
          }

          .discription-text {
            font-size: 24px;
            font-family: "OpenSans";
          }

          .button {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            font-family: "OpenSans";
            button {
              width: 32px;
              height: 32px;
              background-color: rgba(31, 211, 146);
              color: white;
              border: none;
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

        :focus-visible {
          border: none;
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
        .content {
          .discription {
            .discription-text {
              font-size: 18px;
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

        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 18px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 16px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 16px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 14px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 18px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 16px;
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
        .content {
          .discription {
            width: 70%;
            .discription-text {
              font-size: 16px;
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
