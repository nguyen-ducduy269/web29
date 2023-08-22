import styled from "styled-components";

export const HeaderBanner = styled.div`
  .banner {
    width: 35%;
    margin-left: 10%;
    margin-top: 13%;
    .title {
      width: 100%;
      text-align: unset;
      padding-top: 35px;
      font-size: 50px;
      font-weight: 500;
      padding-left: 10px;
      line-height: 1;
      color: #1d407d;
      font-family: sans-serif;
    }
    .description {
      font-size: 19px;
      font-weight: 500;
      padding-left: 9px;
      word-spacing: 3px;
      margin-top: 28px;
      width: 100%;
      text-align: unset;
      word-spacing: 3.6px;
      color: #1d407d;
      font-family: sans-serif;
    }
    button {
      margin-top: 28px;
      margin-left: 14px;
      width: 124px;
      height: 34px;
      font-size: 12px;
      color: white;
      background-color: #1bcd8d;
      border: unset;
    }
  }

  @media only screen and (max-width: 1350px) {
    .banner {
      width: 30%;
      margin-left: 3%;
      margin-top: 13%;
      .title {
        font-size: 40px;
      }
      .description {
        font-size: 18px;
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .banner {
      width: 50%;
      margin-left: 33%;
      margin-top: 10%;
      .title {
        color: white;
      }
      .description {
        color: white;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .banner {
      width: 60%;
      margin-left: 33%;
      margin-top: 10%;
      .title {
        color: white;
      }
      .description {
        color: white;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner {
      width: 70%;
      margin-left: 22%;
      margin-top: 10%;
      .title {
        color: #fff;
        font-size: 35px;
      }
      .description {
        color: #fff;
      }
      button {
        width: 150px;
        height: 50px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .banner {
      width: 70%;
      margin-left: 22%;
      margin-top: 9%;
      .title {
        color: #fff;
        font-size: 35px;
      }
      .description {
        color: #fff;
      }
      button {
        width: 150px;
        height: 50px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .banner {
      width: 65%;
      margin-left: 23%;
      margin-top: -5px;
      .title {
        color: #fff;
        font-size: 28px;
      }
      .description {
        color: #fff;
        font-size: 16px;
      }
      button {
        width: 150px;
        height: 50px;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .banner {
      width: 70%;
      margin-left: 22%;
      margin-top: 5px;
      .title {
        color: #fff;
        font-size: 28px;
      }
      .description {
        font-size: 16px;
        color: #fff;
      }
      button {
        width: 120px;
        height: 50px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .banner {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: #1d407d;
        font-size: 27px;
        text-align: center;
      }
      .description {
        color: #1d407d;
        font-size: 14px;
      }
      button {
        width: 100px;
        height: 40px;
        font-size: 10px;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .banner {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: #1d407d;
        font-size: 24px;
        text-align: center;
      }
      .description {
        color: #1d407d;
        font-size: 14px;
      }
      button {
        width: 100px;
        height: 40px;
        font-size: 10px;
      }
    }
  }
`;
