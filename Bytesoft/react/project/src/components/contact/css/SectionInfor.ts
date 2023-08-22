import styled from "styled-components";

export const SectionInfor = styled.div`
  width: 100%;
  height: 368px;
  margin-top: 30px;
  display: flex;
  position: relative;
  .map {
    position: absolute;
    width: 65%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
    .point {
      position: absolute;
      top: 83px;
      left: 47%;
      img {
        width: 80px;
        height: 90px;
      }
    }
  }
  .contact-us {
    position: absolute;
    width: 44%;
    right: 0;
    height: 100%;
    background-color: rgba(27, 205, 141);
    z-index: 2;
    .title {
      margin-top: 23px;
      font-size: 21px;
      color: #fff;
      margin-left: 21px;
      font-family: sans-serif;
    }
    .help {
      color: #fff;
      width: 100%;
      margin-top: 2px;
      margin-left: 23px;
      font-size: 12px;
      margin-bottom: 20px;
      font-family: sans-serif;
    }
    .form {
      width: 55%;
      margin-left: 18px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 8px;
      input {
        background-color: rgba(86, 216, 171);
        color: white;
        font-size: 12px;
        height: 35px;
        border-radius: 5px;
        border: none;
      }
      input::placeholder {
        font-style: normal;
        color: white;
        padding-left: 10px;
      }
    }
    .content {
      width: 55%;
      height: 100px;
      margin-top: 10px;
      margin-left: 18px;
      textarea {
        width: 100%;
        height: 100%;
        background-color: rgba(86, 216, 171);
        font-size: 12px;
        color: white;
        border-radius: 5px;
        border: none;
      }
      textarea::placeholder {
        font-style: normal;
        color: white;
        font-size: 12px;
        padding-left: 10px;
      }
    }
    button {
      margin-top: 10px;
      width: 55%;
      height: 33px;
      margin-left: 19px;
      font-size: 12px;
      background-color: white;
      border: none;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0px;
      width: 154px;
      left: -153px;
      right: 0;
      height: 100%;
      background: rgba(27, 205, 141);
      clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .map {
      .point {
        left: 45%;
      }
    }
    .contact-us {
      .form {
        width: 80%;
      }
      .content {
        width: 80%;
      }
      button {
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .map {
      .point {
        left: 44%;
      }
    }
    .contact-us {
      .form {
        width: 94%;
        margin-left: 0;
      }
      .content {
        width: 94%;
        margin-left: 0;
      }
      button {
        width: 94%;
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 600px) {
    height: 400px;
    margin-top: 0;
    .map {
      .point {
        left: 44%;
      }
    }
    .contact-us {
      .form {
        width: 85%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 85%;
        height: 90px;
      }
      button {
        width: 85%;
      }
      .help {
        width: 85%;
        margin-bottom: 10px;
      }
    }
  }

  @media only screen and (max-width: 600px) and (min-width: 500px) {
    height: 400px;
    margin-top: 0;
    .map {
      width: 56%;
      .point {
        left: 39%;
        top: 93px;
      }
    }
    .contact-us {
      .form {
        width: 85%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 85%;
        height: 90px;
      }
      button {
        width: 85%;
      }
      .help {
        width: 85%;
        margin-bottom: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 120px;
        left: -118px;
      }
    }
  }

  @media only screen and (max-width: 500px) and (min-width: 425px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 43%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 50%;
      .form {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 375px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 43%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 50%;
      .form {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 375px) and (min-width: 320px) {
    height: 700px;
    margin-top: 0;
    flex-direction: column;
    .map {
      position: unset;
      width: 100%;
      height: 50%;
      .point {
        left: 40%;
        top: 70px;
      }
    }
    .contact-us {
      position: unset;
      width: 100%;
      height: 100%;
      .form {
        width: 90%;
        grid-template-columns: 1fr;
        input {
          height: 30px;
        }
      }
      .content {
        width: 90%;
        height: 120px;
      }
      button {
        width: 90%;
        height: 35px;
      }
      .help {
        width: 90%;
        margin-bottom: 10px;
      }
      &::before {
        display: none;
      }
    }
  }
`;
