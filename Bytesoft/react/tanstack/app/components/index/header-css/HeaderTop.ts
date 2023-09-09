import styled from "styled-components";

export const HeaderTop = styled.div`
  height: 33px;
  .main-content {
    width: 100%;
    display: flex;
    .head-left {
      width: 50%;
      display: flex;
      margin-top: 13px;
      .hotline {
        font-size: 10px;
        font-style: italic;
        color: #2c4d86;
        line-height: 9px;
      }
    }
    .head-right {
      width: 50%;
      position: relative;
      top: 13px;
      input {
        width: 160px;
        height: 20px;
        border-radius: 20px;
        left: 50%;
        position: absolute;
        background-color: #fff;
        color: #fff;
        transform: translateX(-19%);
        top: -6px;
        border: unset;
      }
      input::placeholder {
        padding-left: 5px;
        font-size: 10px;
        font-style: italic;
        color: #2c4d86;
      }
      .icon {
        position: absolute;
        right: 30%;
        top: -6px;
        width: 10px;
      }
      .country {
        width: 34px;
        height: 22px;
        background: white;
        position: absolute;
        right: 21%;
        top: -7px;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 11px;
          width: 15px;
          margin-top: 0px;
          padding-left: 0px;
        }
        .country-scoll {
          background: white;
          background: white;
          width: 34px;
          height: 40px;
          position: absolute;
          top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    .main-content {
      width: 100%;
      display: flex;
    }
  }

  @media only screen and (max-width: 1199px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          width: 147px;
          transform: translateX(45%);
        }
        .icon {
          right: 10%;
        }
        .country {
          right: -2%;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          transform: translateX(-32%);
        }
        .country {
          right: 12%;
        }
        .icon {
          right: 29%;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          transform: translateX(-55%);
        }
        .country {
          right: 6%;
        }
        .icon {
          right: 37%;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          width: 170px;
          transform: translateX(-70%);
        }
        .country {
          right: 17%;
        }
        .icon {
          right: 37%;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          width: 130px;
          transform: translateX(-76%);
          width: 125px;
        }
        .country {
          right: 17%;
        }
        .icon {
          right: 45%;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          transform: translateX(-83%);
          width: 120px;
        }
        .country {
          right: 17%;
        }
        .icon {
          right: 45%;
          font-size: 12px;
          top: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    background-color: #1d407d;
    .main-content {
      .head-left {
        .hotline {
          color: white;
          white-space: nowrap;
        }
      }
      .head-right {
        input {
          transform: translateX(-83%);
          width: 112px;
        }
        .country {
          right: 10%;
        }
        .icon {
          right: 45%;
        }
      }
    }
  }
`;
