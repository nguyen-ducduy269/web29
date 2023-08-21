import styled from "styled-components";

export const Main = styled.div`
  a {
    text-decoration: none;
  }
  .section-new {
    .module-new {
      width: 90%;
      height: 1379px;
      position: relative;
      margin: 0 auto;
      margin-top: 50px;
      .main-content {
        width: 69%;
        position: absolute;
        left: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px;
        .content {
          width: 330px;
          height: 420px;
          margin-left: 10px;
          margin-top: 10px;
          img {
            width: 100%;
          }
          .more {
            display: flex;
            gap: 5px;
            margin-left: 7px;
            width: 50%;
            justify-content: space-between;
            margin-top: 4px;
            color: rgba(160, 175, 201);
          }
          .title {
            color: rgba(35, 102, 225);
            margin-left: 6px;
            font-size: 18px;
            margin-top: 8px;
            line-height: 22px;
          }
          .text {
            margin-left: 7px;
            margin-top: 11px;
            font-size: 12px;
            line-height: 20px;
            color: rgba(29, 64, 125);
          }
        }
      }

      .outstand-new {
        width: 25%;
        height: 100%;
        position: absolute;
        right: 0;
        .search {
          margin-top: 17px;
          position: relative;
          input {
            width: 81%;
            margin-left: 8px;
            border-radius: 2px;
            height: 39px;
            position: relative;
            border-color: #00000038;
          }
          input::placeholder {
            font-size: 12px;
            padding-left: 10px;
            font-style: italic;
          }
          i {
            position: absolute;
            right: 21%;
            font-size: 14px;
            top: 15px;
            color: rgba(26, 198, 103);
          }
        }
        .news {
          width: 207px;
          height: 421px;
          margin-top: 27px;
          margin-left: 10px;
          padding-left: 10px;
          background-color: rgba(239, 243, 250);
          .heading {
            font-size: 13px;
            margin-left: 4px;
            padding-top: 10px;
          }
          .line {
            width: 90%;
            height: 3px;
            background-color: rgba(26, 198, 103);
            margin-top: 8px;
            margin-left: 3px;
            margin-bottom: 15px;
          }
          .new {
            width: 190px;
            height: 375px;
            .content {
              width: 100%;
              height: 60px;
              display: flex;
              margin-bottom: 14px;
              .img {
                width: 100px;
                height: 60px;
                background-color: rgba(26, 198, 103);
                border-radius: 5px;
              }
              .detail {
                .title {
                  margin-left: 15px;
                  font-size: 12px;
                }
                .more {
                  margin-left: 15px;
                  display: flex;
                  margin-top: 3px;
                  color: rgba(131, 151, 185);
                  .clock {
                    font-size: 12px;
                    margin-right: 7px;
                  }
                  .day {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .switch {
      width: 48%;
      height: 50px;
      margin: 0 auto;
      margin-top: -52px;
      display: flex;
      .prev {
        width: 69px;
        height: 34px;
        margin-left: 17px;
        margin-top: 6px;
        border-radius: 20px;
        background-color: rgba(206, 208, 229);
        border: none;
      }
      .page {
        width: 32px;
        height: 35px;
        border: 1px solid black;
        margin-left: 10px;
        margin-top: 6px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          font-size: 14px;
          color: black;
        }
      }
      .next {
        margin-left: 8px;
        width: 68px;
        height: 34px;
        margin-top: 6px;
        border-radius: 20px;
        background-color: rgba(206, 208, 229);
        border: none;
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .section-new {
      .module-new {
        width: 100%;
        .main-content {
          width: 75%;
          left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .section-new {
      .module-new {
        width: 100%;
        .main-content {
          width: 70%;
          left: 0;
          .content {
            width: 260px;
          }
        }
        .outstand-new {
          width: 25%;
          .news {
            width: 90%;
            margin-left: 0;
            padding-left: 0;
            .new {
              .content {
                width: 85%;
                .img {
                  height: 45px;
                }
                .detail {
                  .title {
                    font-size: 11px;
                  }
                  .more {
                    .clock {
                      font-size: 10px;
                    }
                    .day {
                      font-size: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    .section-new {
      .module-new {
        height: 1545px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30%;
        .main-content {
          width: 100%;
          left: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          position: unset;
          gap: 0;
          .content {
            width: 90%;
          }
        }
        .outstand-new {
          width: 100%;
          position: unset;
          .search {
            input {
              width: 100%;
              margin-left: 0;
            }
            i {
              top: 15px;
              right: 0%;
            }
          }
          .news {
            width: 100%;
            height: unset;
            margin-left: 0;
            .heading {
              font-size: 20px;
            }
            .line {
              width: 20%;
            }
            .new {
              width: 100%;
              height: unset;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              .content {
                width: 100%;
                height: 106px;
                display: flex;
                margin-bottom: 14px;
                flex-direction: column;
                align-items: center;
                .img {
                  width: 60px;
                }
                .detail {
                  width: 90%;
                  padding-top: 5px;
                  .title {
                    margin-left: 0%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .switch {
        width: 50%;
        margin-top: -25px;
        height: 30px;
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    .section-new {
      .module-new {
        height: 1545px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30%;
        .main-content {
          width: 100%;
          left: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          position: unset;
          gap: 0;
          .content {
            width: 90%;
          }
        }
        .outstand-new {
          width: 95%;
          position: unset;
          margin: 0 auto;
          .search {
            input {
              width: 100%;
              margin-left: 0;
            }
            i {
              top: 15px;
              right: 0%;
            }
          }
          .news {
            width: 100%;
            height: unset;
            margin-left: 0;
            .heading {
              font-size: 20px;
            }
            .line {
              width: 20%;
            }
            .new {
              width: 100%;
              height: unset;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              .content {
                width: 100%;
                height: 106px;
                display: flex;
                margin-bottom: 14px;
                flex-direction: column;
                align-items: center;
                .img {
                  width: 60px;
                }
                .detail {
                  width: 90%;
                  padding-top: 5px;
                  .title {
                    margin-left: 0%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .switch {
        width: 68%;
        margin-top: -25px;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 500px) and (min-width: 425px) {
    .section-new {
      .module-new {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30%;
        .main-content {
          width: 100%;
          left: 0;
          display: grid;
          grid-template-columns: 1fr;
          position: unset;
          gap: 0;
          justify-items: center;
          .content {
            width: 90%;
            height: 100%;
            margin-left: 0;
            margin-top: 0;
          }
        }
        .outstand-new {
          width: 95%;
          position: unset;
          margin: 0 auto;
          .search {
            input {
              width: 100%;
              margin-left: 0;
            }
            i {
              top: 15px;
              right: 0%;
            }
          }
          .news {
            width: 100%;
            height: unset;
            margin-left: 0;
            .heading {
              font-size: 20px;
            }
            .line {
              width: 20%;
            }
            .new {
              width: 100%;
              height: unset;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              .content {
                width: 100%;
                height: 106px;
                display: flex;
                margin-bottom: 14px;
                flex-direction: column;
                align-items: center;
                .img {
                  width: 60px;
                }
                .detail {
                  width: 90%;
                  padding-top: 5px;
                  .title {
                    margin-left: 0%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .switch {
        width: 80%;
        margin-top: 5%;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 425px) and (min-width: 375px) {
    .section-new {
      .module-new {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30%;
        .main-content {
          width: 100%;
          left: 0;
          display: grid;
          grid-template-columns: 1fr;
          position: unset;
          gap: 0;
          justify-items: center;
          .content {
            width: 90%;
            height: 100%;
            margin-left: 0;
            margin-top: 0;
          }
        }
        .outstand-new {
          width: 95%;
          position: unset;
          margin: 0 auto;
          .search {
            input {
              width: 100%;
              margin-left: 0;
            }
            i {
              top: 15px;
              right: 0%;
            }
          }
          .news {
            width: 100%;
            height: unset;
            margin-left: 0;
            .heading {
              font-size: 20px;
            }
            .line {
              width: 20%;
            }
            .new {
              width: 100%;
              height: unset;
              display: grid;
              grid-template-columns: 1fr 1fr;
              .content {
                width: 100%;
                height: 106px;
                display: flex;
                margin-bottom: 14px;
                flex-direction: column;
                align-items: center;
                .img {
                  width: 60px;
                }
                .detail {
                  width: 90%;
                  padding-top: 5px;
                  .title {
                    margin-left: 0%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .switch {
        width: 80%;
        margin-top: 5%;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 375px) and (min-width: 320px) {
    .section-new {
      .module-new {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30%;
        .main-content {
          width: 100%;
          left: 0;
          display: grid;
          grid-template-columns: 1fr;
          position: unset;
          gap: 0;
          justify-items: center;
          .content {
            width: 90%;
            height: 100%;
            margin-left: 0;
            margin-top: 0;
          }
        }
        .outstand-new {
          width: 95%;
          position: unset;
          margin: 0 auto;
          .search {
            input {
              width: 100%;
              margin-left: 0;
            }
            i {
              top: 15px;
              right: 0%;
            }
          }
          .news {
            width: 100%;
            height: unset;
            margin-left: 0;
            .heading {
              font-size: 20px;
            }
            .line {
              width: 20%;
            }
            .new {
              width: 100%;
              height: unset;
              display: grid;
              grid-template-columns: 1fr 1fr;
              .content {
                width: 100%;
                height: 106px;
                display: flex;
                margin-bottom: 14px;
                flex-direction: column;
                align-items: center;
                .img {
                  width: 60px;
                }
                .detail {
                  width: 90%;
                  padding-top: 5px;
                  .title {
                    margin-left: 0%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .switch {
        width: 95%;
        margin-top: 5%;
        height: 100%;
      }
    }
  }
`;
