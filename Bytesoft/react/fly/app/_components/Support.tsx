"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SupportStyle } from "../_style-components/Support";

const information = [
  {
    id: 1,
    number: "01",
    title: "Travel requirements for Dubai",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",
    color: "#58a7ff",
    duration: "1500",
  },
  {
    id: 2,
    number: "02",
    title: "Chauffeur services at your arrival",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",
    color: "hsl(15, 74%, 70%)",
    duration: "2500",
  },
  {
    id: 3,
    number: "03",
    title: "Multi-risk travel insurance",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",

    color: "hsl(28, 100%, 82%)",
    duration: "3500",
  },
];

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <SupportStyle className="container section">
      <div className="sectionContainer">
        <div className="tittleDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find helpwith booking and travel plans, see what to expect along the
            journey!
          </p>
        </div>

        <div className="infoDiv">
          <div className="textDiv">
            {information.map((item) => {
              return (
                <div
                  data-aos="fade-down"
                  data-aos-duration={item.duration}
                  className="singleInfo"
                  key={item.id}
                >
                  <span
                    className="number"
                    style={{
                      backgroundColor: item.color,
                    }}
                  >
                    {item.number}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.discription}</p>
                </div>
              );
            })}
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="imgDiv">
            <img
              src="https://mixkit.imgix.net/videos/preview/mixkit-outside-a-plane-window-4203-0.jpg?q=80&auto=format%2Ccompress"
              alt=""
            />
          </div>
        </div>
      </div>
    </SupportStyle>
  );
};

export default Support;
