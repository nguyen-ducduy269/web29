import styled from "styled-components";

export const Foot = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 336px;
  position: relative;
  .img {
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 0;
    }
  }
  .layout {
    width: 100%;
    height: 100%;
    background-color: #17305cd1;
    position: absolute;
    z-index: 1;
  }
  .content {
    width: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    .bs-left {
      width: 60%;
      margin: 0 auto;
      display: flex;
      .left-content {
        width: 50%;
        height: 290px;
        .item {
          width: 100%;
          height: 100%;
          .noidung {
            width: 81%;
            img {
              margin-top: 30px;
              margin-left: 16px;
              margin-bottom: 28px;
            }
            .text {
              font-size: 14px;
              color: #fff;
              line-height: 19px;
              font-family: sans-serif;
            }
          }
        }
      }

      .right-content {
        width: 50%;
        height: 290px;
        .item {
          width: 100%;
          height: 100%;
          .bs-right {
            width: 100%;
            display: flex;
            justify-content: center;
            .service {
              margin-top: 63px;
              .title {
                font-size: 20px;
                font-weight: 600;
                color: white;
                font-family: sans-serif;
              }
              .detail {
                margin-top: 25px;
                .infor {
                  font-size: 14px;
                  margin-bottom: 13px;
                  color: white;
                  font-family: sans-serif;
                }
              }
            }

            .services {
              margin-top: 63px;
              margin-left: 30px;
              .title {
                font-size: 20px;
                font-weight: 600;
                color: white;
                font-family: sans-serif;
              }
              .detail {
                margin-top: 25px;
                .infor {
                  font-size: 12px;
                  margin-bottom: 13px;
                  color: white;
                  font-family: sans-serif;
                }
              }
            }
          }
        }
      }
    }

    .final {
      width: 60%;
      height: 46px;
      background-color: #1d407d;
      margin: 0 auto;
      text-align: center;
      font-size: 12px;
      line-height: 41px;
      color: white;
      font-family: sans-serif;
    }
  }

  @media only screen and (max-width: 1350px) and (min-width: 1199px) {
    height: 354px;
    .content {
      .left-content {
        .item {
          height: 308px;
        }
      }
      .right-content {
        .item {
          height: 308px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .content {
      .bs-left {
        width: 70%;
        .left-content {
          .item {
            .noidung {
              width: 100%;
              img {
                margin-top: 45px;
                width: 180px;
                margin-left: 50px;
                margin-bottom: 28px;
              }
              .text {
                font-size: 12px;
              }
            }
          }
        }

        .right-content {
          .item {
            .bs-right {
              .service {
                margin-top: 75px;
                .title {
                  font-size: 16px;
                  font-weight: 600;
                  color: #fff;
                  white-space: nowrap;
                }
                .detail {
                  .infor {
                    font-size: 12px;
                    white-space: nowrap;
                  }
                }
              }
              .services {
                margin-top: 75px;
                .title {
                  font-size: 16px;
                  font-weight: 600;
                  color: #fff;
                  white-space: nowrap;
                }
                .detail {
                  .infor {
                    font-size: 12px;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
        }
      }

      .final {
        width: 70%;
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    height: 545px;
    .content {
      .bs-left {
        width: 70%;
        flex-direction: column;
        .left-content {
          width: 100%;
          height: 100%;
          .item {
            .noidung {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                margin-top: 45px;
                width: 180px;
                margin-left: 0px;
                margin-bottom: 28px;
              }
              .text {
                font-size: 14px;
                text-align: center;
              }
            }
          }
        }

        .right-content {
          width: 100%;
          height: 270px;
          .item {
            .bs-right {
              justify-content: space-between;
              .service {
                margin-top: 75px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                  color: #fff;
                  white-space: nowrap;
                }
                .detail {
                  .infor {
                    font-size: 12px;
                    white-space: nowrap;
                  }
                }
              }
              .services {
                margin-top: 75px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                  color: #fff;
                  white-space: nowrap;
                }
                .detail {
                  .infor {
                    font-size: 12px;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
        }
      }

      .final {
        width: 70%;
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 425px) {
    height: 350px;
    .content {
      .bs-left {
        width: 90%;
        flex-direction: column;
        .left-content {
          width: 100%;
          height: 100%;
          .item {
            .noidung {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                margin-top: 45px;
                width: 180px;
                margin-left: 0px;
                margin-bottom: 28px;
              }
              .text {
                font-size: 14px;
                text-align: center;
              }
            }
          }
        }

        .right-content {
          display: none;
        }
      }

      .final {
        width: 90%;
        margin-top: 30px;
        font-size: 10px;
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    height: 350px;
    .content {
      .bs-left {
        width: 90%;
        flex-direction: column;
        .left-content {
          width: 100%;
          height: 100%;
          .item {
            .noidung {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                margin-top: 45px;
                width: 180px;
                margin-left: 0px;
                margin-bottom: 28px;
              }
              .text {
                font-size: 12px;
                text-align: center;
              }
            }
          }
        }

        .right-content {
          display: none;
        }
      }

      .final {
        width: 95%;
        margin-top: 30px;
        font-size: 10px;
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    height: 370px;
    .content {
      .bs-left {
        width: 90%;
        flex-direction: column;
        .left-content {
          width: 100%;
          height: 100%;
          .item {
            .noidung {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                margin-top: 45px;
                width: 180px;
                margin-left: 0px;
                margin-bottom: 28px;
              }
              .text {
                font-size: 12px;
                text-align: center;
              }
            }
          }
        }

        .right-content {
          display: none;
        }
      }

      .final {
        width: 95%;
        margin-top: 30px;
        font-size: 8px;
      }
    }
  }
`;
