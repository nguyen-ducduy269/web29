import React, { useState } from "react";
const data = Array.from({ length: 20 });

const CarouselSlide = () => {
  const [slideIndex, setSlideIndex] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="carousel">
        <div className="carousel-container">
          {slideIndex == true ? (
            <div
              className="carousel-params"
              style={{
                transform: `translateX(${-100 * value}px)`,
                transition: "all .3s",
              }}
            >
              {data.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <p>Carousel Item {index}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="carousel-params">
              {data.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <p>Carousel Item {index}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="button">
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => {
              setSlideIndex(true);
              setValue(value - 1);
              if (value <= 0) {
                setSlideIndex(false);
              }
            }}
          ></i>

          <i
            className="fa-solid fa-arrow-right"
            onClick={() => {
              setSlideIndex(true);
              setValue(value + 1);
              if (value >= 20) {
                setSlideIndex(false);
              }
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default CarouselSlide;
