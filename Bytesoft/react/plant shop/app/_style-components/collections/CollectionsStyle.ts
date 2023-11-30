import styled from "styled-components";

export const CollectionsStyle = styled.div`
  margin: 30px 0px 30px 0px;
  .shoptify-collection {
    display: flex;
    gap: 20px;

    .filter {
      width: 20%;
      h4 {
        font-size: 18px;
      }

      .filter-option {
        margin-top: 30px;
        .title {
          font-size: 18px;
          font-weight: 700;
        }

        form {
          margin-top: 10px;
          display: flex;
          gap: 10px;
          label {
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }

    .collections {
      width: 80%;
      .title {
        display: flex;
        align-items: center;
        gap: 5px;
        a {
          text-decoration: unset;
          color: #f8ba8c;
        }

        svg {
          font-size: 8px;
        }
      }

      h1 {
        font-size: 38px;
        margin: 20px 0px 20px 0px;
      }

      .filter-choice {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
        div {
          padding: 7px 15px 7px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          background-color: #f8ba8c;
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        button {
          border: unset;
          background-color: white;
          color: #f8ba8c;
          font-size: 14px;
          font-weight: 600;
        }
      }

      .sort {
        width: 100%;
        background-color: #f6f6f6;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        height: 52px;
        padding: 10px 15px 10px 15px;
        align-items: center;
        .sort-by {
          display: flex;
          gap: 20px;
          .title {
            font-size: 16px;
            font-weight: 600;
          }

          select {
            border: unset;
            background-color: #f6f6f6;
          }
        }

        .view {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          svg {
            font-size: 28px;
            color: #f8ba8c;
          }
        }
      }

      .sort-responsive {
        display: none;
      }

      .all-product {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-top: 30px;
        .product-item {
          border: 1px solid #0000002e;
          border-radius: 5px;
          padding: 15px;
          height: fit-content;
          img {
            width: 100%;
          }

          .stars {
            margin-top: 10px;
            svg {
              font-size: 20px;
              color: #00634b;
            }
          }

          .product-price {
            margin-top: 20px;
            font-size: 22px;
            color: #f8ba8c;
            font-weight: 600;
          }

          .owner {
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
          }

          .option {
            display: none;
          }
        }

        .product-item:hover {
          .option {
            display: block;
          }

          .option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation-duration: 3s;
            margin-top: 30px;
            button {
              height: 37px;
              padding: 0px 10px 0px 10px;
              cursor: pointer;
            }

            .quick-shop {
              background-color: white;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #0000002e;
            }

            .choose-option {
              background-color: #f8ba8c;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #f8ba8c;
            }
          }
        }
      }

      .quick-shop-pop-up {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #0000009c;
        .pop-up {
          background-color: white;
          width: 50%;
          height: 90%;
          overflow-y: scroll;
          margin: 0 auto;
          margin-top: 30px;
          margin-bottom: 30px;
          padding: 40px;
          position: relative;
          .product-image {
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-bottom: 20px;
            .main-img {
              width: 60%;
            }

            .more-img {
              width: 40%;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              justify-content: space-evenly;
            }
          }

          .content {
            display: flex;
            gap: 20px;
            .detail-information {
              width: 60%;
              ul {
                padding-left: 20px;
                li {
                  margin-bottom: 20px;
                  display: flex;
                  flex-wrap: wrap;
                  gap: 5px;
                  align-items: center;
                  font-size: 14px;
                  font-weight: 500;
                  svg {
                    font-size: 5px;
                    line-height: 10px;
                  }
                }
              }

              .covid {
                font-size: 14px;
                margin-bottom: 20px;
              }

              .share-contact {
                p {
                  margin-bottom: 10px;
                  font-size: 14px;
                  font-weight: 600;
                }

                .internet-contact {
                  display: flex;
                  gap: 7px;
                }
              }
            }

            .summary {
              width: 40%;
              .name {
                font-size: 32px;
                font-weight: 600;
                margin-bottom: 10px;
              }

              .price {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 10px;
              }

              .choose-size {
                margin-top: 10px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                }

                .button {
                  margin-bottom: 20px;
                  button {
                    padding: 5px 7px 5px 7px;
                    border-radius: 7px;
                    margin-top: 5px;
                    margin-right: 10px;
                    background-color: white;
                    border: 1px solid #00000029;
                  }

                  .active {
                    color: #f8ba8c;
                    border-color: #f8ba8c0f;
                    background-color: #f8ba8c0f;
                  }
                }
              }

              .choose-type {
                margin-bottom: 20px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                  margin-bottom: 5px;
                }

                .type {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 10px;
                  button {
                    padding: 5px 7px 5px 7px;
                    background-color: white;
                    border: 1px solid #00000029;
                    border-radius: 7px;
                  }

                  .active {
                    color: #f8ba8c;
                    border-color: #f8ba8c0f;
                    background-color: #f8ba8c0f;
                  }
                }
              }

              form {
                height: 40px;
                display: flex;
                gap: 5px;
                align-items: center;
                margin-bottom: 20px;
                input {
                  height: 100%;
                  padding-left: 10px;
                  font-size: 16px;
                }
              }
            }
          }

          .exit {
            position: absolute;
            top: 15px;
            right: 15px;
            svg {
              font-size: 28px;
              cursor: pointer;
            }
          }
        }
      }

      .choose-option-pop-up {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #0000009c;
        .choose-option {
          background-color: white;
          width: 35%;
          margin: 0 auto;
          margin-top: 30px;
          margin-bottom: 30px;
          padding: 40px;
          position: relative;
          .name {
            font-size: 32px;
            font-weight: 600;
          }

          .price {
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
          }

          .choose-size {
            margin-top: 20px;
            margin-bottom: 20px;
            .title {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 10px;
            }

            .button {
              display: flex;
              gap: 10px;
              button {
                padding: 5px 7px 5px 7px;
                border-radius: 7px;
                margin-top: 5px;
                background-color: white;
                border: 1px solid #00000029;
              }

              .active {
                color: #f8ba8c;
                border-color: #f8ba8c0f;
                background-color: #f8ba8c0f;
              }
            }
          }

          .choose-type {
            margin-bottom: 20px;
            .title {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 5px;
            }

            .type {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              button {
                padding: 5px 7px 5px 7px;
                background-color: white;
                border: 1px solid #00000029;
                border-radius: 7px;
              }

              .active {
                color: #f8ba8c;
                border-color: #f8ba8c0f;
                background-color: #f8ba8c0f;
              }
            }
          }

          form {
            height: 40px;
            display: flex;
            gap: 5px;
            align-items: center;
            margin-bottom: 20px;
            input {
              height: 100%;
              padding-left: 10px;
              font-size: 16px;
            }
          }

          .exit {
            position: absolute;
            top: 15px;
            right: 15px;
            svg {
              font-size: 28px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  /* @media only screen and (min-width: 320px) {
    .shoptify-collection {
      .filter {
        display: none;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .sort {
          display: none;
        }

        .sort-responsive {
          display: block;
        }

        .sort-responsive {
          width: 100%;
          background-color: #f6f6f6;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          height: 52px;
          padding: 10px 15px 10px 15px;
          align-items: center;
          .sort-by {
            display: flex;
            gap: 20px;
            color: #f8ba8c;
            .title {
              font-size: 16px;
              font-weight: 600;
            }

            svg {
              font-size: 24px;
            }
          }

          .view {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 16px;
            font-weight: 600;
            svg {
              font-size: 28px;
              color: #f8ba8c;
            }
          }
        }

        .sort-pop-up {
          position: fixed;
          background-color: #00000099;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          .pop-up {
            background-color: white;
            width: 90%;
            margin: 0 auto;
            height: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 20px;
            .side-bar {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 18px;
              font-weight: 600;
              svg {
                font-size: 24px;
              }
            }

            .option {
              .filter-option {
                margin-top: 20px;
                .title {
                  font-size: 18px;
                  font-weight: 600;
                }

                form {
                  margin-top: 10px;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  label {
                    font-size: 14px;
                    font-weight: 500;
                  }
                }
              }
            }
          }
        }
      }
    }
  } */
`;
