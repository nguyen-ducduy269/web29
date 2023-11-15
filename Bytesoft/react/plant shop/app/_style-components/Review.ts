import styled from "styled-components";

export const Review = styled.div`
  margin-top: 100px;
  .rate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .views {
      display: flex;
      gap: 10px;
      align-items: center;
      .stars {
        display: flex;
        gap: 5px;
        svg {
          width: 24px;
          height: 24px;
          color: #00634b;
        }
      }

      p {
        margin-right: 8px;
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #00634b;
      }
    }

    .menu {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 28px;
      }
    }

    .drop-down {
      position: absolute;
      width: 300px;
      height: auto;
      padding: 20px;
      right: 3%;
      background-color: white;
      border: 1px solid black;
      border-radius: 10px;
      h3 {
        font-size: 22px;
        margin-bottom: 10px;
      }

      ul {
        li {
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }
      }
    }
  }

  .custom-reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    .customs {
      background-color: white;
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.21);
      border-radius: 8px;
      height: fit-content;
      img {
        width: 270px;
        height: 333px;
      }

      .details {
        padding: 10px 0px 10px 0px;
        .title {
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
          padding-left: 10px;
        }

        .stars {
          margin-bottom: 10px;
          padding-left: 10px;
          svg {
            font-size: 14px;
            color: #00634b;
          }
        }

        .description {
          font-size: 14px;
          font-weight: 500;
          color: #00634b;
          margin-bottom: 20px;
          padding: 0px 10px 0px 10px;
        }

        .more-infor {
          border-top: 0.5px solid #00634b66;
          padding: 15px 10px 0px 10px;
          display: flex;
          gap: 10px;
          img {
            width: 40px;
            height: 50px;
          }

          div {
            font-size: 12px;
            color: #00634b;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
