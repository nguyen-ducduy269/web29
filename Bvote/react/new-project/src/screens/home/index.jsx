import React from "react";
import { Headers } from "./header";
import { Banners } from "./banner";
import styled from "styled-components";

export const Index = () => {
  return (
    <>
      <Container>
        <Headers />
        <Banners />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
