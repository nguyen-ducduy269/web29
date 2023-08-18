import styled from "styled-components";

export const AboutUs = styled.section`
  position: relative;
  .module-index {
    display: flex;
    .about-img {
      img {
        width: 500px;
        height: 353px;
        margin-left: 114px;
        margin-top: 45px;
        position: relative;
        z-index: 1;
      }
    }
    .content {
      margin-top: 50px;
      .about-header {
        width: 100%;
        .title {
          font-size: 36px;
          padding-left: 32px;
          padding-top: 29px;
          color: #1d407d;
        }
        .more {
          width: 100%;
          display: flex;
          margin-left: 55px;
          margin-top: 18px;
          img {
            width: 11px;
            height: 11px;
          }
          .line {
            width: 79px;
            height: 2px;
            background-color: #8397b9;
            margin-left: 6px;
            margin-top: 5px;
          }
        }
        .other {
          display: none;
        }
      }

      .about-content {
        margin-top: 32px;
        margin-left: 36px;
        .text {
          font-size: 12px;
          width: 390px;
          line-height: 2;
          margin-bottom: 27px;
          color: #1d407d;
          font-style: italic;
        }
        button {
          width: 125px;
          height: 34px;
          margin-left: 3px;
          font-size: 12px;
          background-color: #1bcd8d;
          color: white;
          border: none;
        }
        h1 {
          margin-top: 4px;
          font-size: 74px;
          margin-bottom: unset;
          color: white;
          text-shadow: 1px 1px 1px green, 0px 0px green;
        }
        @keyframes nut {
          from {
            bottom: -67px;
          }
          to {
            bottom: -80px;
          }
        }
      }
    }
  }
  .outside {
    .maytrai {
      position: absolute;
      top: -312px;
      left: -100px;
      width: 315px;
      z-index: -1;
      animation: maytrai 4s infinite alternate;
    }
    @keyframes maytrai {
      from {
        left: -100px;
      }
      to {
        left: -30px;
      }
    }
    .cautruc1 {
      position: absolute;
      position: absolute;
      top: -100px;
      left: 36%;
      width: 428px;
      z-index: -1;
      height: 250px;
      animation: cautruc1 3s infinite alternate;
    }
    @keyframes cautruc1 {
      from {
        transform: rotate(3deg);
      }
      to {
        transform: rotate(-10deg);
      }
    }
    .cautruc2 {
      position: absolute;
      top: 193px;
      width: 300px;
      z-index: -1;
      left: 187px;
      animation: cautruc2 3s infinite alternate;
    }
    @keyframes cautruc2 {
      from {
        transform: rotate(-15deg);
      }
      to {
        transform: rotate(5deg);
      }
    }
    .mayphai {
      position: absolute;
      right: -150px;
      width: 403px;
      top: 62%;
      z-index: -1;
      animation: mayphai 4s infinite alternate;
    }
    @keyframes mayphai {
      from {
        right: -150px;
      }
      to {
        right: -100px;
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    .module-index {
      .content {
        .about-header {
          .other {
            display: none;
          }
        }
        .about-content {
          h1 {
            margin-left: -90px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .title {
            font-size: 45px;
            padding: 0;
          }
          .other {
            display: none;
          }
        }
        .about-content {
          margin-left: 0;
          .text {
            font-size: 16px;
          }
          button {
            width: 135px;
            height: 37px;
          }
          h1 {
            position: absolute;
            right: 20%;
            bottom: 50%;
            font-size: 55px;
          }
        }
      }
    }
    .outside {
      .cautruc1 {
        position: absolute;
        top: -90px;
        width: 428px;
        z-index: -1;
        height: 250px;
        left: 50%;
      }
      .cautruc2 {
        position: absolute;
        top: 160px;
        width: 300px;
        z-index: -1;
        left: 170px;
      }
      .mayphai {
        right: -100px;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 45px;
            padding: 0;
          }
        }
        .about-content {
          margin-left: 0;
          .text {
            font-size: 16px;
          }
          button {
            width: 135px;
            height: 37px;
          }
          h1 {
            position: absolute;
            right: 30%;
            bottom: 50%;
            font-size: 55px;
          }
        }
      }
    }
    .outside {
      .cautruc1 {
        position: absolute;
        top: -90px;
        width: 428px;
        z-index: -1;
        height: 250px;
        left: 40%;
      }
      .cautruc2 {
        position: absolute;
        top: 160px;
        width: 300px;
        z-index: -1;
        left: 70px;
      }
      .mayphai {
        display: none;
      }
      .maytrai {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 45px;
            padding: 0;
          }
        }
        .about-content {
          margin-left: 0;
          .text {
            font-size: 16px;
          }
          button {
            width: 135px;
            height: 37px;
          }
          h1 {
            position: absolute;
            right: 18%;
            bottom: 49%;
            font-size: 45px;
            @keyframes nut {
              from {
                bottom: 49%;
              }
              to {
                bottom: 52%;
              }
            }
          }
        }
      }
      .about-img {
        img {
          margin-left: unset;
        }
      }
    }
    .outside {
      .cautruc1 {
        position: absolute;
        top: -90px;
        width: 428px;
        z-index: -1;
        height: 250px;
        left: 26%;
      }
      .cautruc2 {
        position: absolute;
        top: 160px;
        width: 300px;
        z-index: -1;
        left: 70px;
      }
      .mayphai {
        display: none;
      }
      .maytrai {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 40px;
            padding: 0;
          }
        }
        .about-content {
          margin-left: 0;
          .text {
            font-size: 16px;
          }
          button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            display: none;
          }
        }
      }
      .about-img {
        img {
          margin-left: unset;
        }
      }
    }
    .outside {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 40px;
            padding: 0;
          }
        }
        .about-content {
          margin-left: 0;
          .text {
            font-size: 14px;
            text-align: center;
          }
          button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            display: none;
          }
        }
      }
      .about-img {
        img {
          margin-left: 0px;
          width: 390px;
          height: 300px;
        }
      }
    }
    .outside {
      display: none;
    }
  }

  @media only screen and (max-width: 425px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 35px;
            padding: 0;
          }
        }
        .about-content {
          width: 90%;
          margin-left: 0;
          .text {
            width: 100%;
            font-size: 14px;
            text-align: center;
          }
          button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            display: none;
          }
        }
      }
      .about-img {
        width: 100%;
        img {
          margin-left: 0px;
          width: 100%;
          height: 300px;
        }
      }
    }
    .outside {
      display: none;
    }
  }

  @media only screen and (max-width: 375px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 35px;
            padding: 0;
          }
        }
        .about-content {
          width: 90%;
          margin-left: 0;
          .text {
            width: 100%;
            font-size: 14px;
            text-align: center;
          }
          button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            display: none;
          }
        }
      }
      .about-img {
        width: 100%;
        img {
          margin-left: 0px;
          width: 100%;
          height: 300px;
        }
      }
    }
    .outside {
      display: none;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 50px;
    .module-index {
      display: flex;
      flex-direction: column-reverse;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        .about-header {
          width: unset;
          .more {
            display: none;
          }
          .other {
            display: block;
          }
          .other {
            display: flex;
            width: 230px;
            margin: 0 auto;
            img {
              margin: 0px 10px;
            }
            .line {
              width: 100px;
              height: 2px;
              background-color: #8397b9;
              margin-top: 8px;
            }
          }
          .title {
            font-size: 35px;
            padding: 0;
          }
        }
        .about-content {
          width: 90%;
          margin-left: 0;
          .text {
            width: 100%;
            font-size: 14px;
            text-align: center;
          }
          button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            display: none;
          }
        }
      }
      .about-img {
        width: 100%;
        img {
          margin-left: 0px;
          width: 100%;
          height: 300px;
        }
      }
    }
    .outside {
      display: none;
    }
  }
`;
