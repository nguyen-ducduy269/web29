import React from "react";
import { Foot } from "../_style-components/Foot";
import { Container } from "../_style-components/Container";

///// import icons
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BiLogoFacebook, BiSolidEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <Foot>
      <Container>
        <div className="site-footer-block">
          <div className="site-item">
            <h2>Everything House Plants</h2>

            <div className="information">
              We’re your online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </div>

            <div className="address">
              <p>Greenhouse Locations:</p>
              <p>
                CA: 1, Lane 68/2, Dinh Quan Street, Phuc Dien, Bac Tu Liem,
                Hanoi
              </p>
            </div>
          </div>

          <div className="site-item">
            <h2>Get the Seoop</h2>

            <p>Subcribe to our newsletter</p>

            <input type="text" placeholder="Email address" />

            <button>Sign up</button>
          </div>

          <div className="site-item">
            <h2>Follow us</h2>
            <div className="icons">
              <BiLogoFacebook />
              <AiOutlineTwitter />
              <BsPinterest />
              <AiFillInstagram />
              <BiSolidEnvelope />
            </div>
          </div>

          <div className="site-item">
            <h2>@houseplantshop</h2>

            <div>
              Connect with us on social and share your plants with{" "}
              <a href="">#sharemyhps</a>
            </div>
          </div>
        </div>

        <div className="site-footer-item"></div>
      </Container>
    </Foot>
  );
};

export default Footer;
