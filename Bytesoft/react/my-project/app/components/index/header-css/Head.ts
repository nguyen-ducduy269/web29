import styled from "styled-components";

export const Head = styled.div`
  min-height: 760px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  @media only screen and (max-width: 767px) {
    min-height: 700px;
  }

  @media only screen and (max-width: 600px) {
    min-height: 645px;
  }

  @media only screen and (max-width: 450px) {
    min-height: 625px;
  }

  @media only screen and (max-width: 425px) {
    min-height: 587px;
  }

  @media only screen and (max-width: 375px) {
    min-height: 100%;
  }

  @media only screen and (max-width: 320px) {
    min-height: 100%;
  }
`;
