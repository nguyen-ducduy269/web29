import styled from "styled-components";

export const CheckOutCss = styled.div`
  .check {
    padding: 20px 0px;
    border: 0.5px solid #00000038;
    .check-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        img {
          width: 60px;
          height: fit-content;
        }
        svg {
          font-size: 32px;
          color: #00644b;
        }
      }
    }
  }

  .check-out {
    .contact {
      input,
      select {
        padding-left: 10px;
      }
    }
  }
`;
