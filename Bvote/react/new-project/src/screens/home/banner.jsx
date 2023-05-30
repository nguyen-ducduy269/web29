import React from "react";
import styled from "styled-components";
import background from "../../assets/img/banner.png";
export const Banners = () => {
  return (
    <>
      <Banner>
        {/* <img src={background} alt="" /> */}
        Banner
      </Banner>
    </>
  );
};

const Banner = styled.div`
  min-height: 950px;
  background: url(${background});
`;
