import styled from "styled-components";

export const Activity = styled.section`
  margin-top: 168px;
  height: 100%;
  width: 100%;
  height: 100%;
  .module-activity {
    .act-title {
      width: 100%;
      height: 100px;
      margin-top: 45px;
      margin-left: 120px;
      font-family: sans-serif;
      h2 {
        font-size: 36px;
        margin-bottom: 14px;
        word-spacing: -4px;
        color: #1d407d;
      }
      .more {
        display: flex;
        img {
          width: 12px;
          height: 12px;
          margin-left: 13px;
          margin-top: 4px;
          margin-right: 11px;
        }
        .line {
          width: 78px;
          height: 2px;
          background-color: #8397b9;
          margin-top: 9px;
        }
      }
      .other {
        display: none;
      }
    }

    .act-content {
      position: relative;
      display: flex;
      .main-content {
        .design {
          width: 380px;
          height: 59px;
          margin-left: 125px;
          position: relative;
          img {
            position: absolute;
            top: -12px;
            width: 37px;
            left: 14px;
            z-index: -1;
          }
          .title {
            margin-left: 42px;
            font-size: 14px;
            margin-top: 32px;
            word-spacing: -2px;
            color: #1d407d;
            font-family: sans-serif;
          }
          .text {
            margin-left: 34px;
            margin-top: 5px;
            height: 20px;
            padding-top: 3px;
            padding-left: 8px;
            font-size: 11px;
            border-top-left-radius: 3px;
            position: relative;
            background: linear-gradient(
              to right,
              rgba(42, 241, 158) 0,
              rgba(255, 255, 255) 60%
            );
            &::before {
              content: "";
              position: absolute;
              right: 0;
              left: 0px;
              top: 0px;
              height: 43px;
              width: 100%;
              border-radius: 5px;
              background: linear-gradient(
                to right,
                rgba(10, 178, 231) 0,
                rgba(255, 255, 255) 60%
              );
              z-index: -1;
            }
            &::after {
              content: "";
              position: absolute;
              right: 0px;
              left: 2px;
              bottom: -21px;
              height: 40px;
              width: 100%;
              background-color: #fff;
              border-top: none;
              border-radius: 5px;
              z-index: 0;
            }
            p {
              position: absolute;
              z-index: 1;
              a {
                text-decoration: none;
                color: #1d407d;
              }
            }
            &:hover {
              height: 43px;
              border-radius: 5px;
              position: relative;
              animation: mymove 1s infinite;
              background: linear-gradient(to right, #2af19e, #fff);
              @keyframes mymove {
                from {
                  left: 0px;
                }
                to {
                  left: -15px;
                }
              }
              &::before {
                height: 0;
              }
              &::after {
                height: 0;
              }
            }
          }
        }
      }
      .content-img {
        .activity-img {
          position: relative;
          width: 490px;
          height: 300px;
          margin-left: 58px;
          margin-top: 45px;
          .main-round {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .layer {
            position: absolute;
          }
          .layer1 {
            position: absolute;
            width: 37px;
            height: 58px;
            left: 35%;
            top: 64px;
            .layer1-1 {
              width: 100%;
              height: 100%;
              img {
                width: 53px;
                position: absolute;
                height: 100%;
                margin-left: 4px;
                animation: layer1-1 5s infinite alternate;
              }
              @keyframes layer1-1 {
                from {
                  top: 0px;
                }
                to {
                  top: 55px;
                }
              }
            }
            .layer1-2 {
              position: absolute;
              width: 8px;
              left: 28px;
              height: 47px;
              top: 18px;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                animation: layer1-2 5s infinite alternate;
              }
              @keyframes layer1-2 {
                from {
                  top: 0px;
                }
                to {
                  top: 30px;
                }
              }
            }
          }
          .layer2 {
            position: absolute;
            width: 76px;
            height: 69px;
            right: 29%;
            top: 87px;
            overflow: hidden;
            .layer2-1 {
              img {
                width: 64px;
                position: absolute;
                height: 42px;
                margin-left: 21px;
                top: 18px;
                animation: layer2-1 5s infinite alternate;
              }
              @keyframes layer2-1 {
                from {
                  top: 18px;
                }
                to {
                  top: 72px;
                }
              }
            }
            .layer2-2 {
              position: absolute;
              width: 32px;
              left: -23px;
              height: 10px;
              top: 48px;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 25px;
                animation: layer2-2 5s infinite alternate;
              }
              @keyframes layer2-2 {
                from {
                  top: 0px;
                }
                to {
                  top: 25px;
                }
              }
            }
          }
          .layer3 {
            position: absolute;
            width: 195px;
            height: 157px;
            right: 30%;
            top: 56px;
            .layer3-1 {
              width: 100%;
              height: 100%;
              img {
                width: 22px;
                position: absolute;
                height: 50px;
                top: -40px;
                right: 30px;
                animation: layer3-1 5s infinite alternate;
              }
              @keyframes layer3-1 {
                from {
                  top: -3px;
                }
                to {
                  top: -40px;
                }
              }
            }
            .layer3-2 {
              position: absolute;
              width: 100%;
              height: 100%;
              img {
                width: 23px;
                height: 59px;
                top: -33px;
                right: 33px;
                position: absolute;
              }
            }
            .main-center {
              position: absolute;
              width: 194px;
              height: 121px;
              left: -14px;
              top: 20px;
              z-index: 3;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .tower1 {
              position: absolute;
              width: 38px;
              height: 72px;
              top: -4px;
              left: 32%;
              z-index: 2;
              animation: tower1 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes tower1 {
              0%,
              22%,
              97%,
              100% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              25%,
              95% {
                transform: scale(1);
              }
            }
            .tower2 {
              position: absolute;
              width: 41px;
              height: 91px;
              top: -44px;
              left: 51%;
              animation: tower2 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes tower2 {
              0%,
              100%,
              32%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              35%,
              95% {
                transform: scale(1);
              }
            }
            .tower3 {
              position: absolute;
              width: 66px;
              height: 92px;
              top: 104px;
              right: 1px;
              overflow: hidden;
              img {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                animation: tower3 10s infinite alternate;
              }
              @keyframes tower3 {
                0%,
                100%,
                42%,
                97% {
                  transform: scale(0);
                  transform-origin: bottom center;
                }
                45%,
                95% {
                  transform: scale(1);
                }
              }
            }
            .personal {
              position: absolute;
              width: 50px;
              height: 50px;
              top: 64px;
              right: 46px;
              z-index: 3;
              animation: personal 10s infinite alternate;
            }
            @keyframes personal {
              0%,
              20% {
                opacity: 0;
              }
              21%,
              100% {
                opacity: 1;
              }
            }
            .house {
              position: absolute;
              width: 46px;
              height: 40px;
              right: 65%;
              top: 62px;
              z-index: 3;
              animation: house 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes house {
              0%,
              100%,
              15%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              20%,
              95% {
                transform: scale(1);
              }
            }
            .tree {
              position: absolute;
              height: 17px;
              width: 7px;
              left: 57px;
              top: 91px;
              z-index: 3;
              animation: tree 10s infinite linear;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree {
              0%,
              10%,
              100%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              15%,
              95% {
                transform: scale(1);
              }
            }
            .tree1 {
              position: absolute;
              height: 12px;
              width: 5px;
              left: 20px;
              top: 76px;
              z-index: 3;
              animation: tree1 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree1 {
              0%,
              100%,
              20%,
              97% {
                transform-origin: bottom center;
                transform: scale(0);
              }
              25%,
              95% {
                transform: scale(1);
              }
            }
            .tree2 {
              position: absolute;
              height: 12px;
              width: 5px;
              left: 14px;
              top: 76px;
              z-index: 3;
              animation: tree2 10s infinite alternate;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
              }
            }
            @keyframes tree2 {
              0%,
              100%,
              25%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              30%,
              95% {
                transform: scale(1);
              }
            }
            .coint {
              position: absolute;
              width: 20px;
              height: 20px;
              left: 11px;
              top: 90px;
              animation: coint 11s infinite alternate;
              z-index: 3;
              img {
                width: 100%;
                height: 100%;
              }
            }
            @keyframes coint {
              0%,
              100%,
              30%,
              97% {
                transform: scale(0);
                transform-origin: bottom center;
              }
              35%,
              95% {
                transform: scale(1);
              }
            }
            .layer6 {
              position: absolute;
              width: 35px;
              height: 35px;
              top: -23px;
              left: 27%;
            }
            .layer5 {
              position: absolute;
              width: 90px;
              left: -22px;
              height: 29px;
              top: 51px;
              z-index: 1;
            }
            .layer5_1 {
              position: absolute;
              width: 17px;
              left: -8px;
              height: 12px;
              top: 33%;
              z-index: 2;
            }
          }
          .layer4 {
            position: absolute;
            width: 490px;
            height: 100%;
            .line1 {
              position: absolute;
              top: 60px;
              right: 106px;
              z-index: -1;
            }
            .line2 {
              position: absolute;
              left: 115px;
              top: 58px;
              z-index: -1;
            }
            .line3 {
              position: absolute;
              left: 110px;
              bottom: 66px;
              z-index: -1;
            }
            .line4 {
              position: absolute;
              right: 107px;
              bottom: 73px;
              z-index: -1;
            }
          }
          .layer5 {
            position: absolute;
            width: 490px;
            height: 100%;
            .lay1 {
              position: absolute;
              bottom: 6%;
              left: 6%;
              width: 90px;
              height: 92px;
              animation: lay1 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay1 {
              0% {
                bottom: 6%;
                left: 6%;
              }
              2.5% {
                bottom: 13.2%;
                left: -0.2%;
              }

              5% {
                bottom: 20.4%;
                left: -4.4%;
              }

              7.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              10% {
                bottom: 34.8%;
                left: -8.7%;
              }

              12.5% {
                bottom: 42%;
                left: -9.1%;
              }

              15% {
                bottom: 49.2%;
                left: -8.4%;
              }

              17.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              20% {
                bottom: 63.6%;
                left: -3.7%;
              }

              22.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              25% {
                bottom: 78.5%;
                left: 6.3%;
              }
              27.5% {
                bottom: 83.5%;
                left: 12%;
              }

              30% {
                bottom: 86.7%;
                left: 17.7%;
              }

              32.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              35% {
                bottom: 90.2%;
                left: 29.1%;
              }

              37.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              40% {
                bottom: 91.9%;
                left: 40.5%;
              }

              42.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              45% {
                bottom: 89.1%;
                left: 51.9%;
              }

              47.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              50% {
                bottom: 85.9%;
                left: 62.3%;
              }
              52.5% {
                bottom: 80%;
                left: 70.6%;
              }

              55% {
                bottom: 66.1%;
                left: 83.4%;
              }

              57.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              60% {
                bottom: 48.3%;
                left: 90.4%;
              }

              62.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              65% {
                bottom: 34.5%;
                left: 89.4%;
              }

              67.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              70% {
                bottom: 20.7%;
                left: 85.4%;
              }

              72.5% {
                bottom: 13.8%;
                left: 80%;
              }

              75% {
                bottom: -0.1%;
                left: 65%;
              }
              77.5% {
                bottom: -2.3%;
                left: 59%;
              }

              80% {
                bottom: -3.8%;
                left: 53%;
              }

              82.5% {
                bottom: -5.7%;
                left: 47%;
              }

              85% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              87.5% {
                bottom: -8%;
                left: 35%;
              }

              90% {
                bottom: -7.7%;
                left: 29%;
              }

              92.5% {
                bottom: -6.4%;
                left: 23%;
              }

              95% {
                bottom: -3.7%;
                left: 17%;
              }

              97.5% {
                bottom: 0.2%;
                left: 11%;
              }
              100% {
                bottom: 6%;
                left: 6%;
              }
            }
            .lay2 {
              position: absolute;
              bottom: 13.8%;
              left: 80%;
              width: 90px;
              height: 92px;
              animation: lay2 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay2 {
              0% {
                bottom: 13.8%;
                left: 80%;
              }

              2.5% {
                bottom: -0.1%;
                left: 65%;
              }
              5% {
                bottom: -2.3%;
                left: 59%;
              }

              7.5% {
                bottom: -3.8%;
                left: 53%;
              }

              10% {
                bottom: -5.7%;
                left: 47%;
              }

              12.5% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              15% {
                bottom: -8%;
                left: 35%;
              }

              17.5% {
                bottom: -7.7%;
                left: 29%;
              }

              20% {
                bottom: -6.4%;
                left: 23%;
              }

              22.5% {
                bottom: -3.7%;
                left: 17%;
              }

              25% {
                bottom: 0.2%;
                left: 11%;
              }
              27.5% {
                bottom: 6%;
                left: 6%;
              }
              30% {
                bottom: 6%;
                left: 6%;
              }
              32.5% {
                bottom: 13.2%;
                left: -0.2%;
              }

              35% {
                bottom: 20.4%;
                left: -4.4%;
              }

              37.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              40% {
                bottom: 34.8%;
                left: -8.7%;
              }

              42.5% {
                bottom: 42%;
                left: -9.1%;
              }

              45% {
                bottom: 49.2%;
                left: -8.4%;
              }

              47.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              50% {
                bottom: 63.6%;
                left: -3.7%;
              }

              52.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              55% {
                bottom: 78.5%;
                left: 6.3%;
              }
              57.5% {
                bottom: 83.5%;
                left: 12%;
              }

              60% {
                bottom: 86.7%;
                left: 17.7%;
              }

              62.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              65% {
                bottom: 90.2%;
                left: 29.1%;
              }

              67.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              70% {
                bottom: 91.9%;
                left: 40.5%;
              }

              72.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              75% {
                bottom: 89.1%;
                left: 51.9%;
              }

              77.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              80% {
                bottom: 85.9%;
                left: 62.3%;
              }
              82.5% {
                bottom: 80%;
                left: 72.6%;
              }

              85% {
                bottom: 62.1%;
                left: 85.4%;
              }

              87.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              90% {
                bottom: 48.3%;
                left: 90.4%;
              }

              92.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              95% {
                bottom: 34.5%;
                left: 89.4%;
              }

              97.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              100% {
                bottom: 20.7%;
                left: 85.4%;
              }
            }

            .lay3 {
              position: absolute;
              width: 90px;
              height: 100px;
              bottom: 80%;
              left: 72.6%;
              animation: lay3 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay3 {
              0% {
                bottom: 80%;
                left: 72.6%;
              }

              2.5% {
                bottom: 62.1%;
                left: 85.4%;
              }

              5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              7.5% {
                bottom: 48.3%;
                left: 90.4%;
              }

              10% {
                bottom: 41.4%;
                left: 91.4%;
              }

              12.5% {
                bottom: 34.5%;
                left: 89.4%;
              }

              15% {
                bottom: 27.6%;
                left: 88.4%;
              }

              17.5% {
                bottom: 20.7%;
                left: 85.4%;
              }

              20% {
                bottom: 13.8%;
                left: 80%;
              }

              22.5% {
                bottom: -0.1%;
                left: 65%;
              }
              25% {
                bottom: -2.3%;
                left: 59%;
              }

              27.5% {
                bottom: -3.8%;
                left: 53%;
              }

              30% {
                bottom: -5.7%;
                left: 47%;
              }

              32.5% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              35% {
                bottom: -8%;
                left: 35%;
              }

              37.5% {
                bottom: -7.7%;
                left: 29%;
              }

              40% {
                bottom: -6.4%;
                left: 23%;
              }

              42.5% {
                bottom: -3.7%;
                left: 17%;
              }

              45% {
                bottom: 0.2%;
                left: 11%;
              }
              47.5% {
                bottom: 6%;
                left: 6%;
              }

              50% {
                bottom: 13.2%;
                left: -0.2%;
              }

              55% {
                bottom: 20.4%;
                left: -4.4%;
              }

              57.5% {
                bottom: 27.6%;
                left: -7.2%;
              }

              60% {
                bottom: 34.8%;
                left: -8.7%;
              }

              62.5% {
                bottom: 42%;
                left: -9.1%;
              }

              65% {
                bottom: 49.2%;
                left: -8.4%;
              }

              67.5% {
                bottom: 56.4%;
                left: -6.6%;
              }

              70% {
                bottom: 63.6%;
                left: -3.7%;
              }

              72.5% {
                bottom: 70.8%;
                left: 0.9%;
              }

              75% {
                bottom: 78.5%;
                left: 6.3%;
              }
              77.5% {
                bottom: 83.5%;
                left: 12%;
              }

              80% {
                bottom: 86.7%;
                left: 17.7%;
              }

              82.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              85% {
                bottom: 90.2%;
                left: 29.1%;
              }

              87.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              90% {
                bottom: 91.9%;
                left: 40.5%;
              }

              92.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              95% {
                bottom: 89.1%;
                left: 51.9%;
              }

              97.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              100% {
                bottom: 85.9%;
                left: 62.3%;
              }
            }
            .lay4 {
              position: absolute;
              width: 92px;
              height: 104px;
              bottom: 78.5%;
              left: 6.3%;
              animation: lay4 10s infinite linear;
              animation-delay: 5s;
              animation-timing-function: linear;
            }
            @keyframes lay4 {
              0% {
                bottom: 78.5%;
                left: 6.3%;
              }
              2.5% {
                bottom: 83.5%;
                left: 12%;
              }

              5% {
                bottom: 86.7%;
                left: 17.7%;
              }

              7.5% {
                bottom: 88.7%;
                left: 23.4%;
              }

              10% {
                bottom: 90.2%;
                left: 29.1%;
              }

              12.5% {
                bottom: 90.6%;
                left: 34.8%;
              }

              15% {
                bottom: 91.9%;
                left: 40.5%;
              }

              17.5% {
                bottom: 91.4%;
                left: 46.2%;
              }

              20% {
                bottom: 89.1%;
                left: 51.9%;
              }

              22.5% {
                bottom: 86.4%;
                left: 57.6%;
              }

              25% {
                bottom: 85.9%;
                left: 62.3%;
              }
              27.5% {
                bottom: 80%;
                left: 72.6%;
              }

              30% {
                bottom: 62.1%;
                left: 85.4%;
              }

              32.5% {
                bottom: 55.2%;
                left: 88.3%;
              }

              35% {
                bottom: 48.3%;
                left: 90.4%;
              }

              37.5% {
                bottom: 41.4%;
                left: 91.4%;
              }

              40% {
                bottom: 34.5%;
                left: 89.4%;
              }

              42.5% {
                bottom: 27.6%;
                left: 88.4%;
              }

              45% {
                bottom: 20.7%;
                left: 85.4%;
              }

              47.5% {
                bottom: 13.8%;
                left: 80%;
              }

              50% {
                bottom: -0.1%;
                left: 65%;
              }
              52.5% {
                bottom: -2.3%;
                left: 59%;
              }

              55% {
                bottom: -3.8%;
                left: 53%;
              }

              57.5% {
                bottom: -5.7%;
                left: 47%;
              }

              60% {
                bottom: -7.3%;
                z-index: 1;
                left: 41%;
              }

              62.5% {
                bottom: -8%;
                left: 35%;
              }

              65% {
                bottom: -7.7%;
                left: 29%;
              }

              67.5% {
                bottom: -6.4%;
                left: 23%;
              }

              70% {
                bottom: -3.7%;
                left: 17%;
              }

              72.5% {
                bottom: 0.2%;
                left: 11%;
              }
              75% {
                bottom: 6%;
                left: 6%;
              }
              75.5% {
                bottom: 6%;
                left: 6%;
              }
              80% {
                bottom: 13.2%;
                left: -0.2%;
              }

              82.5% {
                bottom: 20.4%;
                left: -4.4%;
              }

              85% {
                bottom: 27.6%;
                left: -7.2%;
              }

              87.5% {
                bottom: 34.8%;
                left: -8.7%;
              }

              90% {
                bottom: 42%;
                left: -9.1%;
              }

              92.5% {
                bottom: 49.2%;
                left: -8.4%;
              }

              95% {
                bottom: 56.4%;
                left: -6.6%;
              }

              97.5% {
                bottom: 63.6%;
                left: -3.7%;
              }

              100% {
                bottom: 70.8%;
                left: 0.9%;
              }
            }
          }
        }
      }
    }

    .act-bonus {
      font-size: 67px;
      color: #fff;
      text-shadow: 1px 1px 2px green;
      position: relative;
      left: 43%;
      top: 20px;
      transform: translateX(-16%);
      font-family: sans-serif;
    }
    @keyframes bonus {
      from {
        top: 20px;
      }
      to {
        top: 50px;
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .module-activity {
      .act-title {
        margin-left: 80px;
      }
      .act-content {
        .main-content {
          .design {
            margin-left: 0px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .module-activity {
      position: relative;
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 400px;
            margin: 0 auto;
            img {
              width: 60px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .content-img {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 100px;
          .activity-img {
            margin-left: 0px;
            margin-top: 0px;
            .main-round {
              margin-top: 1px;
            }
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    margin-top: 70px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 400px;
            margin: 0 auto;
            img {
              width: 60px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        position: absolute;
        top: unset;
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    margin-top: 70px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 400px;
            margin: 0 auto;
            img {
              width: 60px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 480px) {
    margin-top: 0px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 400px;
            margin: 0 auto;
            img {
              width: 60px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 425px) {
    margin-top: 0px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          font-size: 27px;
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          width: 90%;
          margin: 0 auto;
          .design {
            height: 70px;
            width: 400px;
            margin: 0 auto;
            img {
              width: 60px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                width: 340px;
                font-size: 12px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    margin-top: 0px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
          font-size: 25px;
          text-align: center;
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 100%;
            margin: 0 auto;
            img {
              width: 35px;
            }
            .title {
              font-size: 16px;
            }
            .text {
              p {
                width: 300px;
                font-size: 10px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    margin-top: 0px;
    .module-activity {
      .act-title {
        margin-left: 0px;
        height: 90px;
        h2 {
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
            margin-top: 5px;
          }
        }
      }
      .act-content {
        display: flex;
        flex-direction: column;
        .main-content {
          .design {
            height: 70px;
            width: 85%;
            margin: 0 auto;
            img {
              width: 25px;
              top: 0;
            }
            .title {
              font-size: 14px;
            }
            .text {
              margin-left: 0;
              height: 22px;
              p {
                width: 250px;
                font-size: 10px;
              }
            }
          }
        }
        .content-img {
          .activity-img {
            display: none;
          }
        }
      }
      .act-bonus {
        display: none;
      }
    }
  }
`;
