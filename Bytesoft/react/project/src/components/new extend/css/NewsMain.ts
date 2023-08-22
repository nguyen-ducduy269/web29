import styled from "styled-components";

export const SectionIndex = styled.section`
  .module-index {
    .module-content {
      display: flex;
      .main-infor {
        width: 70%;
        .item {
          width: 100%;
          height: 975px;
          margin-top: 44px;
          .all {
            border: 1px solid #cdd3e9;
            height: 100%;
            padding-left: 20px;
            padding-right: 20px;
            margin-left: 130px;
            .title {
              font-size: 14px;
              padding-top: 23px;
              font-weight: 600;
              word-spacing: 7px;
              font-family: sans-serif;
              color: #2366e1;
            }
            .about {
              display: flex;
              padding-left: 20px;
              padding-top: 8px;
              align-items: center;
              .clock {
                padding-top: 2px;
              }
              .day {
                padding-left: 5px;
                font-size: 12px;
              }
              .line {
                padding-left: 9px;
                padding-right: 15px;
              }
              .eye {
                padding-right: 10px;
              }
            }
            .content {
              margin-top: 20px;
              img {
                max-width: 100%;
                height: 100%;
                margin-bottom: 24px;
              }
              .text {
                width: 100%;
                font-size: 12px;
                font-weight: 300;
                margin-bottom: 20px;
                line-height: 18px;
                color: #0000008f;
                font-family: sans-serif;
              }
            }
          }
        }
      }

      .more-infor {
        width: 30%;
        .item {
          width: 100%;
          height: 975px;
          margin-top: 44px;
          .search {
            width: 222px;
            position: relative;
            margin-left: 27px;
            input {
              width: 100%;
              height: 35px;
              background-color: #e9effa;
              border: none;
            }
            input::placeholder {
              font-size: 12px;
              font-style: italic;
              padding-left: 10px;
            }
            i {
              position: absolute;
              right: 5px;
              top: 12px;
              font-size: 14px;
              color: #1bc668;
            }
          }

          .news {
            width: 196px;
            height: 445px;
            background: #eff3fa;
            margin-left: 27px;
            padding-right: 15px;
            margin-top: 27px;
            padding-left: 15px;
            .heading {
              font-size: 14px;
              padding-top: 10px;
              font-weight: 500;
              font-family: sans-serif;
            }
            .line {
              width: 166px;
              height: 2px;
              background: #1bc668;
              margin-top: 6px;
            }
            .new {
              margin-top: 16px;
              .bs-row {
                display: flex;
                gap: 10px;
                margin-bottom: 26px;
                .img {
                  width: 40px;
                  height: 40px;
                  background-color: #1bc668;
                  border-radius: 5px;
                }
                .detail {
                  .title {
                    font-size: 12px;
                    font-weight: 400;
                  }
                  .more {
                    display: flex;
                    gap: 5px;
                    color: #a5b4cd;
                    align-items: center;
                    .clock {
                      i {
                        font-size: 10px;
                      }
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

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .module-index {
      .module-content {
        .main-infor {
          width: 70%;
          height: 100%;
          .item {
            height: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .module-index {
      .module-content {
        .main-infor {
          width: 67%;
          height: 100%;
          .item {
            height: 100%;
            .all {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    .module-index {
      .module-content {
        .main-infor {
          width: 70%;
          height: 100%;
          .item {
            height: 100%;
            .all {
              margin-left: -14%;
            }
          }
        }

        .more-infor {
          .item {
            .search {
              width: 100%;
            }

            .news {
              width: 100%;
              height: 445px;
              background: #eff3fa;
              margin-left: 27px;
              padding-right: 15px;
              margin-top: 27px;
              padding-left: 15px;
              .line {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 425px) {
    .module-index {
      .module-content {
        width: 100%;
        flex-direction: column-reverse;
        align-items: center;
        .main-infor {
          width: 95%;
          height: 100%;
          .item {
            height: 100%;
            .all {
              margin-left: 0%;
            }
          }
        }

        .more-infor {
          width: 90%;
          height: 100%;
          .item {
            height: 100%;
            .search {
              width: 100%;
              margin-left: 0;
            }

            .news {
              width: 95%;
              height: 100%;
              background: #eff3fa;
              margin: 0 auto;
              padding-right: 15px;
              margin-top: 27px;
              padding-left: 15px;
              .new {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 5px;
                .bs-row {
                  flex-direction: column;
                  align-items: center;
                  .detail {
                    .title {
                      text-align: center;
                    }

                    .more {
                      justify-content: center;
                    }
                  }
                }
              }
              .line {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    .module-index {
      .module-content {
        width: 100%;
        flex-direction: column-reverse;
        align-items: center;
        .main-infor {
          width: 95%;
          height: 100%;
          .item {
            height: 100%;
            .all {
              margin-left: 0%;
            }
          }
        }

        .more-infor {
          width: 90%;
          height: 100%;
          .item {
            height: 100%;
            .search {
              width: 100%;
              margin-left: 0;
            }

            .news {
              width: 95%;
              height: 100%;
              background: #eff3fa;
              margin: 0 auto;
              padding-right: 15px;
              margin-top: 27px;
              padding-left: 15px;
              .new {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 5px;
                .bs-row {
                  flex-direction: column;
                  align-items: center;
                  .detail {
                    .title {
                      text-align: center;
                    }

                    .more {
                      justify-content: center;
                    }
                  }
                }
              }
              .line {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    .module-index {
      .module-content {
        width: 100%;
        flex-direction: column-reverse;
        align-items: center;
        .main-infor {
          width: 95%;
          height: 100%;
          .item {
            height: 100%;
            .all {
              margin-left: 0%;
            }
          }
        }

        .more-infor {
          width: 90%;
          height: 100%;
          .item {
            height: 100%;
            .search {
              width: 100%;
              margin-left: 0;
            }

            .news {
              width: 95%;
              height: 100%;
              background: #eff3fa;
              margin: 0 auto;
              padding-right: 15px;
              margin-top: 27px;
              padding-left: 15px;
              .new {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5px;
                .bs-row {
                  flex-direction: column;
                  align-items: center;
                  .detail {
                    .title {
                      text-align: center;
                    }

                    .more {
                      justify-content: center;
                    }
                  }
                }
              }
              .line {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
