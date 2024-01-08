import styled from "styled-components";

export const PLantDetailCss = styled.div`
  .title {
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h4 {
      font-size: 24px;
      color: #00634b;
    }

    h1 {
      font-size: 48px;
    }
  }

  .meeting {
    padding: 100px 0px;
    background-color: #f4fcf2;
    .meet {
      width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 40px;
      .image {
        width: 50%;
        height: fit-content;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .meet-content {
        width: 50%;
        h1 {
          color: #00634b;
        }

        .discription {
          margin-top: 10px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }

  .condition {
    padding: 70px 0px;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-img {
      width: 100%;
      img {
        width: 100%;
        height: fit-content;
        border-radius: 100%;
      }
    }

    .condition-detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      margin-top: 30px;
      .light,
      .pet,
      .water,
      .humidity,
      .temperature,
      .difficult-level {
        width: 100%;
        display: flex;
        gap: 10px;
        margin-bottom: 70px;
        img {
          width: 80px;
          height: 80px;
        }

        .content {
          width: 80%;
          h3 {
            font-size: 28px;
            color: #00634b;
            margin-bottom: 5px;
          }

          p {
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }

  .common-problems {
    padding: 70px 0px 200px 0px;
    background-color: #f4fcf2;
    .problem {
      width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 50px;
      .problem-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h1 {
          font-size: 30px;
          color: #00634b;
        }

        p {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
        }
      }

      .image {
        width: 450px;
        img {
          width: 100%;
          height: fit-content;
        }
      }
    }
  }

  .shop-detail{
    
  }
`;
