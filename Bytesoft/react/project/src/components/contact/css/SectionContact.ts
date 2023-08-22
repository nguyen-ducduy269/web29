import styled from "styled-components";

export const SectionContact = styled.div`
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
          font-family: sans-serif;
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
          font-family: sans-serif;
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
          font-family: sans-serif;
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
