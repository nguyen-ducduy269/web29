import styled from "styled-components";

export const Foot = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgb(0, 100, 75);
  .site-footer-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    .site-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        font-size: 18px;
        color: white;
      }

      .information,
      .address,
      div,
      p {
        color: white;
        font-size: 14px;
        font-weight: 500;
      }

      input {
        height: 50px;
        padding-left: 20px;
        font-size: 14px;
        color: gray;
        border-radius: 8px;
        width: 80%;
      }

      button {
        width: 92px;
        height: 50px;
        font-size: 16px;
        font-weight: 500;
        color: #00634b;
        background-color: #f8ba8c;
        border: 1px solid #f8ba8c;
      }

      .icons {
        display: flex;
        gap: 5px;
        align-items: center;
        svg {
          width: 32px;
          height: 32px;
          padding: 5px;
          font-size: 24px;
          border-radius: 100%;
          color: white;
          background-color: #faf7f726;
        }
      }

      div {
        a {
          color: white;
        }
      }
    }
  }
`;
