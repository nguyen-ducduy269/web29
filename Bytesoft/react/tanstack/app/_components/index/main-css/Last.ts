import styled from "styled-components";

export const Last = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 30px;
  .xemthem {
    width: 125px;
    height: 33px;
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    line-height: 22px;
    color: #fff;
    font-family: sans-serif;
    background-color: rgba(27, 205, 141);
    border: none;
  }
  .bonus {
    position: absolute;
    right: 170px;
    bottom: -51px;
    font-size: 64px;
    font-family: sans-serif;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(31 211 146), 1px 0 1px rgb(31 211 146);
  }

  @media only screen and (max-width: 1440px) and (min-width: 1350px) {
    .xemthem {
      width: 130px;
      height: 35px;
    }
    .bonus {
      right: 6%;
      font-size: 60px;
    }
  }

  @media only screen and (max-width: 1350px) and (min-width: 1199px) {
    .xemthem {
      width: 130px;
      height: 35px;
    }
    .bonus {
      right: 6%;
      font-size: 60px;
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .xemthem {
      width: 135px;
      height: 40px;
    }
    .bonus {
      right: 40px;
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .xemthem {
      width: 150px;
      height: 40px;
      bottom: -32px;
      font-size: 14px;
    }
    .bonus {
      right: 23px;
      bottom: -40px;
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    .xemthem {
      bottom: 0;
    }
    .bonus {
      right: 23px;
      bottom: -25%;
      font-size: 30px;
      animation: latest 3s infinite alternate;
    }
    @keyframes latest {
      from {
        bottom: -25%;
      }
      to {
        bottom: -30%;
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    .xemthem {
      width: 140px;
      height: 40px;
      bottom: -3%;
    }
    .bonus {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 480px) {
    .xemthem {
      width: 135px;
      height: 40px;
    }
    .bonus {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 425px) {
    .xemthem {
      width: 135px;
      height: 40px;
    }
    .bonus {
      display: none;
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    .xemthem {
      width: 135px;
      height: 40px;
      bottom: -100px;
    }
    .bonus {
      display: none;
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    .xemthem {
      width: 135px;
      height: 40px;
      bottom: -70px;
    }
    .bonus {
      display: none;
    }
  }
`;
