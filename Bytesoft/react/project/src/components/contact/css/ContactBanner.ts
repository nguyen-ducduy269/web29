import styled from "styled-components";

export const ContactBanner = styled.div`
  width: 100%;
  height: 113px;
  background-color: white;
  position: relative;
  .title {
    width: 100%;
    text-align: center;
    padding-top: 41px;
    font-size: 20px;
    font-weight: 600;
    padding-left: 9px;
    position: absolute;
    z-index: 1;
  }
  .description {
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    z-index: 1;
    padding-left: 5px;
    width: 100%;
    top: 76px;
  }
  .layout {
    width: 100%;
    height: 117px;
    background-color: #eff3fa;
    position: absolute;
    top: 5px;
  }
`;
