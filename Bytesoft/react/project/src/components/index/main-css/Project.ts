import styled from "styled-components";

export const Project = styled.section`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: -159px;
  .bs-tab {
    .tab-control {
      .control-list {
        list-style: none;
        .control-list__item {
          border-top-left-radius: unset;
        }
        .active {
          background: linear-gradient(
            to right,
            rgba(106, 226, 182),
            rgba(255, 255, 255)
          );
          border: unset;
          box-shadow: unset;
          color: rgba(29, 64, 125);
        }
        .control-list__item:hover {
          background: linear-gradient(
            to right,
            rgba(106, 226, 182),
            rgba(255, 255, 255)
          );
          border: unset;
          box-shadow: unset;
          color: rgba(29, 64, 125);
        }
      }
    }
    .tab-container {
      width: 813px;
      height: 100%;
      position: relative;
      margin-top: 30%;
      display: flex;
      .tab-control {
        width: 25%;
        border-right: none;
        .control__show {
          display: none;
        }
        h4 {
          font-size: 16px;
          font-family: OpenSans;
          color: rgba(106, 226, 182);
        }
        h1 {
          font-size: 35px;
          width: 100%;
          margin-bottom: 15px;
          line-height: 46px;
          color: rgba(29, 64, 125);
        }

        .more {
          display: flex;
          img {
            width: 14px;
            height: 14px;
            margin-left: 4px;
          }
          .line {
            width: 79px;
            height: 3px;
            margin-left: 10px;
            margin-top: 6px;
            background-color: rgba(131, 151, 185);
          }
        }
        .control-list {
          margin-top: 56px;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .control-list__item {
            width: 90%;
            font-family: OpenSans;
            height: 46px;
            margin-bottom: 8px;
            font-size: 18px;
            padding-left: 24px;
            white-space: nowrap;
            line-height: 48px;
            font-weight: 500;
            text-align: left;
            border-top-right-radius: unset;
            border-bottom-left-radius: unset;
            color: #1d407d;
          }
        }
      }
    }
    .tab-content {
      width: 100%;
      height: 100%;
      .multiple-items {
        margin-top: 72px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        .item {
          position: relative;
          width: 85%;
          height: 233px;
          margin-bottom: 60px;
          overflow: hidden;
          .project-img {
            position: absolute;
            height: 266px;
            width: 237px;
            left: -17px;
            top: -12px;
            z-index: 0;
          }
          .discription {
            position: absolute;
            width: 95%;
            height: 40px;
            background-color: #fff;
            z-index: 1;
            bottom: 5px;
            left: -190px;
            .title {
              position: absolute;
              left: 9px;
              font-size: 12px;
              top: 5px;
              color: #72dcb6;
              width: unset;
              height: unset;
            }
            .more {
              position: absolute;
              bottom: 4px;
              left: 11px;
            }
            button {
              position: absolute;
              right: 9px;
              top: 9px;
              width: 24px;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              height: 24px;
              font-size: 15px;
              background-color: #72dcb6;
              color: white;
            }
          }
        }
        .item:hover {
          transform: translateY(-10px);
          .discription {
            left: 5px;
            button {
              border: none;
            }
          }
        }
      }
    }
    .button {
      position: absolute;
      right: -84px;
      display: flex;
      top: 1%;
      gap: 8px;
      .icon {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background-color: rgba(31, 211, 146);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a {
          color: #fff;
        }
      }
    }
    .popup {
      display: none;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 10;
      .main-pop {
        position: relative;
        width: 646px;
        height: 600px;
        left: 51%;
        transform: translateX(-50%);
        background-color: #fff;
        margin-top: 50px;
        z-index: 10;
        img {
          width: 575px;
          height: 409px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 18px;
        }
        .title {
          width: 80%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: white;
          height: 50px;
          text-align: center;
          top: 65%;
          z-index: 1;
          border-radius: 10px;
          line-height: 64px;
          font-size: 21px;
          color: rgba(12, 96, 162);
        }
        .main-content {
          position: relative;
          width: 90%;
          margin: 0 auto;
          margin-top: 30px;
          .content {
            display: flex;
            justify-content: space-around;
            font-family: "OpenSans";
            font-size: 12px;
            .name {
              font-weight: bold;
              width: 30%;
            }
            .dis {
              width: 70%;
            }
          }
        }
      }
      .layout {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
      }
      .close-pop {
        position: absolute;
        top: 15px;
        right: 25%;
        z-index: 10;
        i {
          font-size: 40px;
          color: white;
        }
      }
    }
  }
  .bonus {
    position: absolute;
    bottom: -65px;
    font-size: 72px;
    left: -11%;
    letter-spacing: 4.2px;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(46 214 153), 0 0 3px rgb(46 214 153);
    @keyframes bons {
      from {
        bottom: -65px;
      }
      to {
        bottom: -116px;
      }
    }
  }
  .left-img {
    position: absolute;
    left: -50%;
    top: -135%;
    transform: rotate(0deg);
    width: 100%;
    z-index: -1;
    animation: lef 3s infinite alternate;
    img {
      width: 700px;
      height: 1920px;
    }
    @keyframes lef {
      from {
        transform: rotate(5deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }
  .right-img {
    position: absolute;
    right: -53%;
    bottom: -27%;
    z-index: -1;
    animation: righ 3s infinite alternate;
    img {
      width: 513px;
      height: 440px;
    }
    @keyframes righ {
      from {
        transform: rotate(7deg);
      }
      to {
        transform: rotate(-2deg);
      }
    }
  }

  @media only screen and (max-width: 1440px) and (min-width: 1350px) {
    .bs-tab {
      .popup {
        .close-pop {
          position: absolute;
          top: 8px;
          right: 23%;
          z-index: 10;
        }
      }
    }
  }

  @media only screen and (max-width: 1350px) and (min-width: 1199px) {
    .bs-tab {
      .popup {
        .close-pop {
          position: absolute;
          top: 6px;
          right: 22%;
          z-index: 10;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .bs-tab {
      .tab-container {
        width: 90%;
        position: relative;
        margin-top: 30%;
        margin-left: -15%;
      }
      .popup {
        .close-pop {
          top: 8px;
          right: 17%;
          z-index: 10;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    margin-top: -4%;
    .bs-tab {
      .tab-container {
        width: 90%;
        position: relative;
        margin-top: 30%;
        margin-left: -15%;
        .tab-control {
          width: 30%;
          h1 {
            width: 100%;
          }
        }
      }
      .tab-content {
        .multiple-items {
          width: 455px;
          margin: 0 auto;
          margin-top: 80px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          .item {
            position: relative;
            width: 95%;
            height: 233px;
            margin-bottom: 2px;
            overflow: hidden;
            .discription {
              width: 89%;
              left: -205px;
            }
          }
        }
      }
      .popup {
        .close-pop {
          top: 8px;
          right: 17%;
          z-index: 10;
        }
      }
    }
    .bonus {
      position: absolute;
      bottom: -170px;
      font-size: 72px;
      left: -11%;
      letter-spacing: 4.2px;
      color: #fff;
      text-shadow: 1px 1px 1px rgb(46 214 153), 0 0 3px rgb(46 214 153);
      animation: bons 3s infinite alternate;
      @keyframes bons {
        from {
          bottom: -170px;
        }
        to {
          bottom: -190px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            justify-items: center;
            .item {
              width: 83%;
              .discription {
                width: 190px;
                left: -234px;
              }
              &:hover {
                .discription {
                  left: 5px;
                }
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 530px;
          left: 48%;
          .title {
            top: 55%;
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 6px;
          right: 14%;
          z-index: 10;
          i {
            font-size: 30px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            justify-items: center;
            .item {
              width: 83%;
              .discription {
                width: 190px;
                left: -234px;
              }
              &:hover {
                .discription {
                  left: 5px;
                }
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 530px;
          left: 48%;
          .title {
            top: 55%;
            font-size: 16px;
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 6px;
          right: 14%;
          z-index: 10;
          i {
            font-size: 30px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 480px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            justify-items: center;
            .item {
              width: 83%;
              .discription {
                width: 190px;
                left: -234px;
              }
              &:hover {
                .discription {
                  left: 5px;
                }
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 530px;
          left: 48%;
          .title {
            top: 55%;
            font-size: 16px;
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 10px;
          right: 14%;
          z-index: 10;
          i {
            font-size: 27px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 425px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            justify-items: center;
            .item {
              width: 83%;
              .discription {
                width: 190px;
                left: -234px;
              }
              &:hover {
                .discription {
                  left: 5px;
                }
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 550px;
          left: 48%;
          .title {
            top: 55%;
            font-size: 16px;
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 6px;
          right: 14%;
          z-index: 10;
          i {
            font-size: 26px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr;
            justify-items: center;
            .item {
              width: 83%;
              margin-bottom: unset;
              .discription {
                width: 190px;
                left: -234px;
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
            .item:hover {
              .discription {
                width: 80%;
                left: 32px;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 570px;
          left: 48%;
          .title {
            top: 50%;
            font-size: 14px;
          }
          .main-content {
            .content {
              margin-bottom: 5px;
              .name {
                width: 45%;
              }
            }
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 6px;
          right: 14%;
          z-index: 10;
          i {
            font-size: 24px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    width: 100%;
    margin-top: 15%;
    .bs-tab {
      .tab-container {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-control {
          width: 100%;
          right: 5%;
          top: -44%;
          h1 {
            width: 100%;
            text-align: center;
          }
          h4 {
            width: 100%;
            text-align: center;
          }
          .more {
            justify-content: center;
          }
          .control-list {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            .control-list__item {
              width: 30%;
            }
          }
        }
        .tab-content {
          margin-top: -70px;
          .multiple-items {
            width: 100%;
            grid-template-columns: 1fr;
            justify-items: center;
            .item {
              width: 83%;
              .discription {
                width: 190px;
                left: -234px;
              }
              .project-img {
                width: 100%;
                left: 0;
                top: 0;
              }
            }
            .item:hover {
              .discription {
                width: 80%;
                left: 28px;
              }
            }
          }
        }
      }
      .button {
        display: none;
      }
      .popup {
        .main-pop {
          width: 77%;
          height: 520px;
          left: 51%;
          img {
            height: 200px !important;
          }
          .main-content {
            .content {
              margin-bottom: 5px;
              .name {
                width: 50%;
              }
            }
          }
          .title {
            top: 35%;
            font-size: 12px;
          }
          img {
            width: 100%;
            height: 315px;
          }
        }
        .close-pop {
          position: absolute;
          top: 15px;
          right: 11%;
          z-index: 10;
          i {
            font-size: 24px;
          }
        }
      }
    }
    .bonus {
      bottom: -60px;
      left: unset;
      left: 50%;
      transform: translateX(-50%);
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
    .left-img {
      display: none;
    }
    .right-img {
      display: none;
    }
  }
`;
