import React, { useState } from "react";
import "./header.css";
import styled from "styled-components";
import logo from "../../assets/img/header-logo.png";
import call from "../../assets/img/download.png";

export const Headers = () => {
  const [value, setValue] = useState("VI");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log("1", value);
  };

  return (
    <>
      <Header>
        <div className="header-img">
          <a href="">
            <Img src={logo}></Img>
          </a>
        </div>

        <HeaderContent className="header-content">
          <Select className="select">
            <SelectP>{value}</SelectP>
            <Down>🔻</Down>

            <Content className="content">
              <LanguageItem
                className="language-item"
                onClick={handleChange}
                value="VI"
              >
                VI
              </LanguageItem>
              <LanguageItem
                className="language-item"
                onClick={handleChange}
                value="EN"
              >
                EN
              </LanguageItem>
            </Content>
          </Select>

          <Contact className="contact">
            <Call src={call} className="call"></Call>

            <ContactP>
              <Hotline className="hotline">
                <b>HOTLINE</b>
              </Hotline>
              <b>023456789</b>
            </ContactP>
          </Contact>
        </HeaderContent>
      </Header>
    </>
  );
};

const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
`;
const Img = styled.img`
  border: 0px;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  max-height: 44px;
  max-width: 139px;
  width: 100%;
  height: 100%;
`;

const Call = styled.img`
  width: 40px;
  height: 40px;
`;

const Select = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Down = styled.div`
  position: absolute;
  bottom: 0;
`;

const SelectP = styled.p`
  color: black;
  font-size: 13px;
`;

const HeaderContent = styled.div`
  display: flex;
  gap: 30px;
`;

const Content = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: none;
  background-color: white;
`;

const LanguageItem = styled.option`
  width: 100%;
  color: black;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
`;

const Contact = styled.div`
  background-color: red;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ContactP = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-family: os-500;
  color: white;
`;

const Hotline = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  margin-bottom: -5px;
`;
