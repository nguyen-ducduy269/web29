import styled from "styled-components";

export const BusinessCss = styled.div`
  .drop-shipping {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 50px;
    gap: 30px;
    .shipping-img {
      width: 40%;
      img {
        width: 100%;
        height: fit-content;
      }
    }

    .shipping-content {
      width: 60%;
      p {
        margin-top: 20px;
        font-size: 12px;
        color: #87939d;
      }

      div {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      button {
        padding: 15px;
        border: none;
        background-color: #00644b;
        color: white;
        font-weight: 600;
      }
    }
  }

  .quantity-shipper {
    background-color: #00644b;
    padding: 100px;
    p {
      color: white;
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
  }

  .work {
    padding: 100px 0px;
    .start-work {
      margin-top: 30px;
      display: flex;
      gap: 20px;
      .start {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        img {
          width: 100%;
          height: fit-content;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }

  .statistical {
    padding: 100px 0px;
    background-color: #00644b;
    .statisty {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      align-items: center;
      .stat {
        padding: 50px;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        h1 {
          font-size: 50px;
          color: white;
          font-weight: 600;
        }

        p {
          color: white;
        }
      }
    }
  }

  .email {
    padding: 100px;
    text-align: center;
  }
`;
