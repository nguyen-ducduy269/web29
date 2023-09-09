import styled from "styled-components";

export const Recruitment = styled.section`
  width: 100%;
  height: 454px;
  margin-top: 204px;
  .bs-row {
    display: flex;
    .main-img {
      width: 50%;
      height: 410px;
      position: relative;
      .main {
        position: absolute;
        width: 239px;
        height: 127px;
        bottom: -11px;
        right: 74px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .layer-personal {
        position: absolute;
        bottom: 13%;
        right: 30%;
        width: 95px;
        height: 253px;
        z-index: 5;
        animation: layerpersonal 3s infinite alternate;
        .personal {
          position: absolute;
          width: 83px;
          height: 185px;
          bottom: 10%;
          right: 7px;
          z-index: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .personal1 {
          position: absolute;
          bottom: 0;
          left: 15px;
          width: 100px;
          height: 59px;
          z-index: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .personal2 {
          position: absolute;
          width: 36px;
          height: 38px;
          left: 31%;
          top: 2px;
          animation: personal2 5s infinite linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes personal2 {
          0%,
          50% {
            opacity: 0;
          }
          51%,
          100% {
            opacity: 1;
          }
        }
        @keyframes layerpersonal {
          from {
            bottom: 13%;
          }
          to {
            bottom: 15%;
          }
        }
      }

      .layer1 {
        position: absolute;
        right: 12%;
        bottom: 13%;
        width: 85px;
        height: 241px;
        .layer1_2 {
          position: absolute;
          bottom: 0;
          z-index: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer1-1 {
          position: absolute;
          bottom: 7px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          width: 85%;
          height: 57px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .lay1 {
          position: absolute;
          bottom: 3px;
          left: 4px;
          width: 87%;
          height: 157px;
          z-index: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer1_3 {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 31%;
          bottom: 37%;
          animation: layer13 3s infinite alternate;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer13 {
          from {
            bottom: 37%;
          }
          to {
            bottom: 40%;
          }
        }
        .layer1_4 {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 31%;
          bottom: 54%;
          animation: layer14 3s infinite alternate;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes layer14 {
          from {
            bottom: 54%;
          }
          to {
            bottom: 60%;
          }
        }
        .layway {
          display: flex;
          flex-direction: column-reverse;
          width: 80px;
          height: 70px;
          position: relative;
          .layer151 {
            position: absolute;
            bottom: 4px;
            right: 22px;
            width: 35px;
            animation: layer151 2s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer151 {
            0%,
            20% {
              opacity: 0;
            }
            21%,
            100% {
              opacity: 1;
            }
          }
          .layer152 {
            position: absolute;
            bottom: 11px;
            right: 11px;
            width: 45px;
            animation: layer152 2s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer152 {
            0%,
            40% {
              opacity: 0;
            }
            41%,
            100% {
              opacity: 1;
            }
          }
          .layer153 {
            position: absolute;
            width: 54px;
            right: 0px;
            bottom: 18px;
            animation: layer153 2s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer153 {
            0%,
            60% {
              opacity: 0;
            }
            61%,
            100% {
              opacity: 1;
            }
          }
          .layer154 {
            position: absolute;
            width: 16px;
            top: 3px;
            left: 28px;
            animation: layer154 2s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer154 {
            0%,
            80% {
              opacity: 0;
            }
            81%,
            100% {
              opacity: 1;
            }
          }
        }
      }

      .layer2 {
        position: absolute;
        .background-layer {
          position: relative;
          top: -13px;
          left: 8%;
          .one {
            position: absolute;
            z-index: 1;
            left: 52%;
            top: 8%;
            width: 210px;
            height: 260px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .two {
            position: relative;
            z-index: 1;
            left: 49%;
            width: 244px;
            height: 297px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .broad {
            position: absolute;
            top: 3%;
            left: 56%;
            width: 249px;
            height: 312px;
            z-index: 3;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .broad-news {
            position: absolute;
            width: 250px;
            height: 254px;
            top: 15%;
            left: 56%;
            z-index: 4;
            .new1 {
              position: absolute;
              top: 40%;
              left: 14%;
              width: 54px;
              height: 118px;
              animation: new1 3s infinite alternate;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes new1 {
              from {
                top: 37%;
              }
              to {
                top: 43%;
              }
            }

            .new2 {
              position: absolute;
              width: 70px;
              height: 148px;
              left: 40%;
              top: 14%;
              z-index: 5;
              animation: new2 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes new2 {
              0%,
              33% {
                left: 40%;
                top: 14%;
              }
              34%,
              66% {
                left: 43%;
                top: 15%;
              }
              67%,
              100% {
                left: 46%;
                top: 19%;
              }
            }

            .new3 {
              position: absolute;
              width: 58px;
              height: 118px;
              right: 9%;
              top: 12%;
              animation: new3 3s infinite alternate;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes new3 {
              from {
                top: 6%;
              }
              to {
                top: 14%;
              }
            }

            .new4 {
              position: absolute;
              bottom: -2%;
              z-index: 5;
              width: 76px;
              height: 92px;
              left: 40%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .stars {
            position: absolute;
            width: 100px;
            height: 100px;
            top: 0;
            left: 82%;
            .star1 {
              position: absolute;
              width: 17px;
              height: 24px;
              bottom: 26%;
              animation: star1 3s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes star1 {
              0%,
              15% {
                opacity: 0;
              }
              16%,
              100% {
                opacity: 1;
              }
            }

            .star2 {
              position: absolute;
              width: 17px;
              height: 24px;
              left: 20%;
              top: 38%;
              animation: star2 3s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes star2 {
              0%,
              32% {
                opacity: 0;
              }
              33%,
              100% {
                opacity: 1;
              }
            }

            .star3 {
              position: absolute;
              width: 17px;
              height: 24px;
              left: 40%;
              top: 27%;
              animation: star3 3s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes star3 {
              0%,
              48% {
                opacity: 0;
              }
              49%,
              100% {
                opacity: 1;
              }
            }

            .star4 {
              position: absolute;
              width: 17px;
              height: 24px;
              right: 23%;
              top: 15%;
              animation: star4 3s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes star4 {
              0%,
              64% {
                opacity: 0;
              }
              65%,
              100% {
                opacity: 1;
              }
            }

            .star5 {
              position: absolute;
              width: 17px;
              height: 24px;
              right: 3%;
              top: 4%;
              animation: star5 3s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes star5 {
              0%,
              80% {
                opacity: 0;
              }
              81%,
              100% {
                opacity: 1;
              }
            }
          }
        }
      }

      .layer3 {
        position: absolute;
        width: 290px;
        height: 134px;
        bottom: 0;
        left: 25%;
        .under1 {
          position: absolute;
          right: 6%;
          z-index: 2;
          width: 79px;
          bottom: 27%;
          height: 48px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .under2 {
          position: absolute;
          z-index: 1;
          width: 91px;
          height: 52px;
          right: 1%;
          bottom: 16%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .under3 {
          position: absolute;
          width: 64px;
          height: 35px;
          left: 40%;
          top: 32%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .under4 {
          position: absolute;
          width: 36px;
          height: 23px;
          left: 28%;
          top: 42%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .layway {
          position: absolute;
          width: 69px;
          height: 65px;
          left: 8%;
          .layer151 {
            position: absolute;
            bottom: 0;
            transform: rotate(120deg);
            right: 0;
            width: 35px;
            animation: layer151 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer151 {
            0%,
            20% {
              opacity: 0;
            }
            21%,
            100% {
              opacity: 1;
            }
          }

          .layer152 {
            position: absolute;
            bottom: 12%;
            width: 47px;
            transform: rotate(120deg);
            right: 0;
            animation: layer152 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer152 {
            0%,
            40% {
              opacity: 0;
            }
            41%,
            100% {
              opacity: 1;
            }
          }

          .layer153 {
            position: absolute;
            bottom: 23%;
            transform: rotate(120deg);
            width: 56px;
            right: 0;
            animation: layer153 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer153 {
            0%,
            60% {
              opacity: 0;
            }
            61%,
            100% {
              opacity: 1;
            }
          }

          .layer154 {
            position: absolute;
            right: 0;
            width: 18px;
            transform: rotate(120deg);
            animation: layer154 3s infinite linear;
            img {
              width: 100%;
              height: 100%;
            }
          }
          @keyframes layer154 {
            0%,
            80% {
              opacity: 0;
            }
            81%,
            100% {
              opacity: 1;
            }
          }
        }
      }
    }

    .content {
      width: 50%;
      position: relative;
      left: 70px;
      top: 60px;
      h1 {
        font-size: 35px;
        margin-left: 2px;
        margin-top: 18px;
        word-spacing: -7.8px;
        color: rgba(29, 64, 125);
        font-family: sans-serif;
      }
      .more {
        display: flex;
        margin-top: 19px;
        margin-left: 14px;
        margin-bottom: 30px;
        img {
          width: 13px;
          height: 13px;
        }
        .line {
          width: 80px;
          height: 2px;
          background-color: rgba(131, 151, 185);
          margin-left: 10px;
          margin-top: 6px;
        }
      }
      .other {
        display: none;
      }
      .text {
        font-size: 12px;
        font-family: sans-serif;
        color: #1d619f;
        margin-left: 15px;
        width: 65%;
        line-height: 20px;
        margin-bottom: 20px;
      }
      button {
        margin-left: 17px;
        width: 143px;
        height: 50px;
        font-size: 12px;
        color: #fff;
        border-radius: 20px;
        font-family: sans-serif;
        background-color: rgba(31, 211, 146);
        border: none;
        box-shadow: 15px 10px 35px rgba(31, 211, 146, 0.45);
      }
      .bonus {
        font-size: 67px;
        position: absolute;
        bottom: 0px;
        left: -131px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(31, 211, 146),
          0px 1px 0px rgba(31, 211, 146);
        font-family: sans-serif;
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .content {
      .bonus {
        bottom: 30px;
        font-size: 60px;
        left: -70px;
      }
    }
    .main-img {
      .layer1 {
        right: -5%;
      }
      .layer-personal {
        right: 17%;
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    margin-top: 280px;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 45px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
          }
        }
        .text {
          width: 60%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
        }
        .bonus {
          bottom: -60px;
          left: unset;
          right: 0;
          font-size: 40px;
          @keyframes nus {
            from {
              bottom: -60px;
            }
            to {
              bottom: -80px;
            }
          }
        }
      }
      .main-img {
        width: 100%;
        margin-top: 100px;
        .main {
          width: 333px;
          height: 100px;
          bottom: 3%;
          transform: translateX(-43%);
          right: unset;
          left: 50%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer-personal {
          right: 41%;
        }
        .layer1 {
          right: 25%;
        }
        .layer3 {
          .layway {
            left: 0%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    margin-top: 200px;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 45px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 4px;
          }
        }
        .text {
          width: 60%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        width: 100%;
        margin-top: 100px;
        .main {
          width: 300px;
          height: 127px;
          bottom: 3%;
          right: left;
          left: 50%;
          transform: translateX(-50%);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer-personal {
          right: 44%;
          .personal {
            right: 0;
          }
          .personal1 {
            left: 0;
          }
        }
        .layer1 {
          right: 30%;
        }
        .layer2 {
          .background-layer {
            left: -10%;
          }
        }
        .layer3 {
          position: absolute;
          width: 290px;
          height: 134px;
          bottom: 1%;
          left: 18%;
          .layway {
            left: 0%;
            top: 5%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    margin-top: 25%;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 45px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 3px;
          }
        }
        .text {
          width: 60%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        width: 100%;
        margin-top: 100px;
        .main {
          width: 410px;
          height: 127px;
          bottom: 3%;
          right: left;
          left: 50%;
          transform: translateX(-50%);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer-personal {
          right: 34%;
        }
        .layer1 {
          right: 13%;
        }
        .layer2 {
          .background-layer {
            left: -16%;
          }
        }
        .layer3 {
          position: absolute;
          width: 290px;
          height: 134px;
          bottom: 1%;
          left: 16%;
          .layway {
            left: 0%;
            top: 25%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 480px) {
    margin-top: 25%;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 40px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 3px;
          }
        }
        .text {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        width: 100%;
        margin-top: 100px;
        .main {
          width: 90%;
          height: 127px;
          bottom: 3%;
          right: left;
          left: 50%;
          transform: translateX(-50%);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer-personal {
          right: 32%;
        }
        .layer1 {
          right: 3%;
        }
        .layer2 {
          .background-layer {
            left: -40%;
          }
        }
        .layer3 {
          position: absolute;
          width: 248px;
          height: 134px;
          bottom: 4%;
          left: 11%;
          .layway {
            left: 0%;
            top: 25%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 425px) {
    margin-top: 30%;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 35px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 3px;
          }
        }
        .text {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        width: 100%;
        margin-top: 100px;
        .main {
          width: 90%;
          height: 127px;
          bottom: 3%;
          right: left;
          left: 50%;
          transform: translateX(-50%);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .layer-personal {
          right: 32%;
        }
        .layer1 {
          right: 3%;
        }
        .layer2 {
          .background-layer {
            left: -40%;
          }
        }
        .layer3 {
          position: absolute;
          width: 248px;
          height: 134px;
          bottom: 4%;
          left: 11%;
          .layway {
            left: 0%;
            top: 25%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    margin-top: 30%;
    height: 100%;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 35px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 3px;
          }
        }
        .text {
          width: 85%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    margin-top: 40%;
    height: 100%;
    margin-bottom: 100px;
    .bs-row {
      display: flex;
      flex-direction: column-reverse;
      .content {
        width: 100%;
        left: 0;
        top: -30px;
        h1 {
          text-align: center;
          font-size: 30px;
        }
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
            width: 12px;
            height: 12px;
            margin: 0 10px;
          }
          .line {
            width: 100px;
            height: 3px;
            background-color: #8397b9;
            margin-top: 3px;
          }
        }
        .text {
          width: 85%;
          margin: 0 auto;
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          margin-top: 10px;
          font-size: 14px;
        }
        .bonus {
          display: none;
        }
      }
      .main-img {
        display: none;
        width: 100%;
        margin-top: 100px;
      }
    }
  }
`;
