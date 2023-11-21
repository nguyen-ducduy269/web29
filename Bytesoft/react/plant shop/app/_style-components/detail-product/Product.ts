import styled from "styled-components";

export const Product = styled.div`
  margin: 50px 0px 50px 0px;
  .head {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #949494;
    margin-bottom: 30px;
    a {
      text-decoration: unset;
      color: #f8ba8c;
    }
  }

  .main-content {
    display: flex;
    justify-content: center;
    gap: 30px;
    .main-img {
      width: 472px;
      height: fit-content;
      .more-img {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        img {
          width: fit-content;
          height: 116px;
        }
      }
    }

    .detail-information {
      width: 500px;
      .stars {
        margin-bottom: 15px;
        svg {
          font-size: 26px;
          color: #00634b;
        }
      }

      .price {
        font-size: 20px;
        font-weight: 500;
        color: #00634b;
      }

      ul {
        margin-top: 30px;
        li {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 500;
          line-height: 25px;
        }
      }
    }

    .summary {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h4 {
        font-size: 14px;
      }

      .select-size {
        button {
          width: 60px;
          height: 33px;
          border: 0.5px solid #8080805e;
          border-radius: 5px;
        }

        .active {
          color: #f8ba8c;
          background-color: #f8ba8c0f;
          border-color: #f8ba8c0f;
        }
      }

      div {
        p {
          font-size: 12px;
          font-weight: 600;
        }
      }

      .form {
        display: flex;
        gap: 10px;
        align-items: center;
        input {
          width: 120px;
          height: 50px;
          padding-left: 10px;
        }
      }

      a {
        width: 100%;
        text-align: center;
        text-decoration: unset;
        color: #f8ba8c;
      }

      .internet-contact {
        display: flex;
        gap: 5px;
      }
    }
  }

  .response {
    display: none;
    .detail-information {
      width: 500px;
      .stars {
        margin-bottom: 15px;
        svg {
          font-size: 26px;
          color: #00634b;
        }
      }

      .price {
        font-size: 20px;
        font-weight: 500;
        color: #00634b;
      }

      ul {
        margin-top: 30px;
        li {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 500;
          line-height: 25px;
        }
      }
    }

    .summary {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h4 {
        font-size: 14px;
      }

      .select-size {
        button {
          width: 60px;
          height: 33px;
          border: 0.5px solid #8080805e;
          border-radius: 5px;
        }

        .active {
          color: #f8ba8c;
          background-color: #f8ba8c0f;
          border-color: #f8ba8c0f;
        }
      }

      div {
        p {
          font-size: 12px;
          font-weight: 600;
        }
      }

      .form {
        display: flex;
        gap: 10px;
        align-items: center;
        input {
          width: 120px;
          height: 50px;
          padding-left: 10px;
        }
      }

      a {
        width: 100%;
        text-align: center;
        text-decoration: unset;
        color: #f8ba8c;
      }

      .internet-contact {
        display: flex;
        gap: 5px;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(4, 1fr);
          img {
            width: 67px;
            height: 67px;
          }
        }
      }

      .detail-information {
        width: 100%;
      }

      .summary {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 375px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(5, 1fr);
          img {
            width: 67px;
            height: 67px;
          }
        }
      }

      .detail-information {
        width: 100%;
      }

      .summary {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 425px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(8, 1fr);
        }
      }

      .detail-information {
        width: 100%;
      }

      .summary {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .main-content {
      .detail-information,
      .summary {
        display: none;
      }

      .response {
        display: block;
        .detail-information,
        .summary {
          display: block;
        }
      }

      .response {
        display: flex;
        height: fit-content;
        flex-direction: row;
        gap: 20px;
        .detail-information {
          h1 {
            font-size: 18px;
          }

          .stars {
            svg {
              font-size: 24px;
            }
          }
        }

        .summary {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .main-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      .main-img {
        width: 472px;
        height: fit-content;
        .more-img {
          margin-top: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          img {
            width: 100%;
            height: 116px;
          }
        }
      }

      .detail-information,
      .summary {
        display: block;
      }

      .detail-information {
        width: 500px;
        .stars {
          margin-bottom: 15px;
          svg {
            font-size: 26px;
            color: #00634b;
          }
        }

        .price {
          font-size: 20px;
          font-weight: 500;
          color: #00634b;
        }

        ul {
          margin-top: 30px;
          li {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 500;
            line-height: 25px;
          }
        }
      }

      .summary {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h4 {
          font-size: 14px;
        }

        .select-size {
          button {
            width: 60px;
            height: 33px;
            border: 0.5px solid #8080805e;
            border-radius: 5px;
          }

          .active {
            color: #f8ba8c;
            background-color: #f8ba8c0f;
            border-color: #f8ba8c0f;
          }
        }

        div {
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }

        .form {
          display: flex;
          gap: 10px;
          align-items: center;
          input {
            width: 120px;
            height: 50px;
            padding-left: 10px;
          }
        }

        a {
          width: 100%;
          text-align: center;
          text-decoration: unset;
          color: #f8ba8c;
        }

        .internet-contact {
          display: flex;
          gap: 5px;
        }
      }

      .response {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .main-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: center;
      .main-img {
        width: 472px;
        height: fit-content;
        .more-img {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          img {
            width: 100%;
            height: 116px;
          }
        }
      }

      .detail-information,
      .summary {
        display: block;
      }

      .detail-information {
        width: 500px;
        .stars {
          margin-bottom: 15px;
          svg {
            font-size: 26px;
            color: #00634b;
          }
        }

        .price {
          font-size: 20px;
          font-weight: 500;
          color: #00634b;
        }

        ul {
          margin-top: 30px;
          li {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 500;
            line-height: 25px;
          }
        }
      }

      .summary {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h4 {
          font-size: 14px;
        }

        .select-size {
          display: flex;
          gap: 5px;
          button {
            width: 60px;
            height: 33px;
            border: 0.5px solid #8080805e;
            border-radius: 5px;
          }

          .active {
            color: #f8ba8c;
            background-color: #f8ba8c0f;
            border-color: #f8ba8c0f;
          }
        }

        div {
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }

        .form {
          display: flex;
          gap: 10px;
          align-items: center;
          input {
            width: 120px;
            height: 50px;
            padding-left: 10px;
          }
        }

        a {
          width: 100%;
          text-align: center;
          text-decoration: unset;
          color: #f8ba8c;
        }

        .internet-contact {
          display: flex;
          gap: 5px;
        }
      }

      .response {
        display: none;
      }
    }
  }
`;
