import styled from "styled-components";

export const PlantCareCss = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      color: #00634b;
    }

    p {
      margin-top: 10px;
      color: #00634b;
      font-weight: 500;
    }

    a {
      margin-top: 30px;
      button {
        padding: 12px 20px;
        background-color: #00634b;
        color: white;
        font-size: 14px;
        border-radius: 20px;
        border: unset;
        font-weight: 600;
        margin-bottom: 70px;
      }
    }
  }
`;
