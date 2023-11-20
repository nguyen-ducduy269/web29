import styled from "styled-components";

export const Main = styled.div`
  margin: 50px 0px 50px 0px;
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        color: #f8ba8c;
        text-decoration: unset;
        font-weight: 500;
        font-size: 14px;
        svg {
          font-size: 10px;
          font-weight: 500;
        }
      }
    }

    .main {
      .empty {
        width: 100%;
        height: 358px;
        border: 0.5px solid #00634b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        p {
          font-weight: 500;
        }

        button {
          width: 200px;
          height: 44px;
          background-color: #f8ba8c;
          border: unset;
          border-radius: 5px;
          a {
            text-decoration: unset;
            color: #00634b;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            svg {
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .main-content {
      width: 95%;
      margin: 0 auto;
      .title {
        h1 {
          font-size: 24px;
        }

        a {
          font-size: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .main-content {
      width: 95%;
      margin: 0 auto;
      .title {
        h1 {
          font-size: 28px;
        }

        a {
          font-size: 14px;
        }
      }
    }
  }
`;
