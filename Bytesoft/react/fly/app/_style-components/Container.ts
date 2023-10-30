import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1350px) {
    width: 1170px;
  }

  @media only screen and (max-width: 1199px) {
    width: 970px;
  }

  @media only screen and (max-width: 991px) {
    width: 750px;
  }

  @media only screen and (max-width: 767px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
