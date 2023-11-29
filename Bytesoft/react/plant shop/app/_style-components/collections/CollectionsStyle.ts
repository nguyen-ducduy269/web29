import styled from "styled-components";

export const CollectionsStyle = styled.div`
  margin: 30px 0px 30px 0px;
  .shoptify-collection {
    display: flex;
    gap: 20px;

    .filter {
      width: 20%;
      h4 {
        font-size: 18px;
      }

      .filter-option {
        margin-top: 30px;
        .title {
          font-size: 18px;
          font-weight: 700;
        }

        form {
          margin-top: 10px;
          display: flex;
          gap: 10px;
          label {
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }

    .collections {
      width: 80%;
      .title {
        display: flex;
        align-items: center;
        gap: 5px;
        a {
          text-decoration: unset;
          color: #f8ba8c;
        }

        svg {
          font-size: 8px;
        }
      }

      h1 {
        font-size: 38px;
        margin: 20px 0px 20px 0px;
      }

      .filter-choice {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
        div {
          padding: 7px 15px 7px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          background-color: #f8ba8c;
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        button {
          border: unset;
          background-color: white;
          color: #f8ba8c;
          font-size: 14px;
          font-weight: 600;
        }
      }

      .sort {
        width: 100%;
        background-color: #f6f6f6;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        height: 52px;
        padding: 10px 15px 10px 15px;
        align-items: center;
        .sort-by {
          display: flex;
          gap: 20px;
          .title {
            font-size: 16px;
            font-weight: 600;
          }

          select {
            border: unset;
            background-color: #f6f6f6;
          }
        }

        .view {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          svg {
            font-size: 28px;
            color: #f8ba8c;
          }
        }
      }

      .all-product {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-top: 30px;
        .product-item {
          border: 1px solid #0000002e;
          border-radius: 5px;
          padding: 15px;
          height: fit-content;
          img {
            width: 100%;
          }

          .stars {
            margin-top: 10px;
            svg {
              font-size: 20px;
              color: #00634b;
            }
          }

          .product-price {
            margin-top: 20px;
            font-size: 22px;
            color: #f8ba8c;
            font-weight: 600;
          }

          .owner {
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
          }

          .option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
            button {
              height: 37px;
              padding: 0px 10px 0px 10px;
            }

            .quick-shop {
              background-color: white;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #0000002e;
            }

            .choose-option {
              background-color: #f8ba8c;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #f8ba8c;
            }
          }
        }
      }
    }
  }
`;
