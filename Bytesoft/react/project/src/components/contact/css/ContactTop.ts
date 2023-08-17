import styled from "styled-components";

export const ContactTop = styled.div`
  background-color: rgb(29, 64, 125);
  height: 33px;
  .top {
    display: flex;
    height: 34px;
    .header-left {
      width: 50%;
      display: flex;
      padding-top: 12px;
      i {
        font-size: 10px;
        color: #1ac667;
        margin-left: 21%;
        margin-right: 4px;
      }
      .hotline {
        font-size: 11px;
        font-style: italic;
        color: #d2d9e5;
        line-height: 9px;
      }
    }
    .header-right {
      width: 50%;
      display: flex;
      position: relative;
      input {
        width: 137px;
        height: 20px;
        border-radius: 20px;
        background-color: #4a6697;
        position: absolute;
        right: 31%;
        top: 6px;
        border: unset;
        color: #fff;
      }
      input::placeholder {
        font-size: 10px;
        font-style: italic;
        padding-left: 10px;
        color: white;
      }
      .icon {
        position: absolute;
        right: 32%;
        top: 8px;
        i {
          color: #1ac667;
          font-size: 12px;
        }
      }
      .country {
        width: 34px;
        height: 20px;
        background: #4a6697;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 22%;
        top: 5px;
        img {
          height: 18px;
          width: 20px;
        }
        i {
          font-size: 9px;
          color: white;
        }

        .change {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .country-scoll {
          position: absolute;
          background: #4a6697;
          width: 34px;
          height: 54px;
          bottom: -57px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
      }
      .header-right {
        input {
          right: 19%;
        }
        .country {
          right: 10%;
        }
        .icon {
          right: 22%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
      }
      .header-right {
        input {
          right: 22%;
        }
        .country {
          right: 10%;
        }
        .icon {
          right: 25%;
          i {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
      }
      .header-right {
        input {
          right: 27%;
        }
        .country {
          right: 10%;
        }
        .icon {
          right: 30%;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
      }
      .header-right {
        input {
          right: 30%;
        }
        .country {
          right: 10%;
        }
        .icon {
          right: 35%;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
      }
      .header-right {
        input {
          right: 30%;
        }
        .country {
          right: 8%;
        }
        .icon {
          right: 35%;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .top {
      .header-left {
        i {
          margin-left: 8%;
        }
        .hotline {
          font-size: 10px;
        }
      }
      .header-right {
        input {
          width: 110px;
          right: 30%;
        }
        .country {
          right: 5%;
        }
        .icon {
          right: 35%;
        }
      }
    }
  }
`;
