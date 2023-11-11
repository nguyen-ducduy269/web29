import styled from "styled-components";

export const Feature = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  .product {
    display: flex;
    gap: 40px;
    .product-gallery {
      .more-img {
        margin-top: 15px;
        display: flex;
        gap: 10px;
      }
    }

    .product-main {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      justify-content: center;
      h1 {
        font-size: 25px;
        text-align: center;
      }

      .price {
        font-size: 20px;
      }

      .form-field-select {
        display: flex;
        gap: 5px;
        label {
          font-size: 18px;
        }
        select {
          font-size: 18px;
        }
      }

      a {
        text-decoration: unset;
        color: #f8ba8c;
        font-size: 14px;
        font-weight: 600;
      }

      .internet-contact {
        display: flex;
        gap: 20px;
      }
    }
  }
`;
