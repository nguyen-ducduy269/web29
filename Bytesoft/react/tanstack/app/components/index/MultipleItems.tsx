import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useFetchingData } from "@/app/useFetchingData";

const MultipleItems = ({ indexItem, setOpenItem, setOpenPopUp }: any) => {
  function SampleArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(31, 211, 146)",
          top: "3%",
          color: "white",
          borderRadius: "100%",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  const { data: projectData } = useFetchingData(
    "http://localhost:4000/project"
  );
  if (!projectData) return;

  return (
    <Slider {...settings}>
      <div className="multiple-items">
        {projectData[indexItem].details.map((project: any) => {
          return (
            <div className="item">
              <Image
                className="project-img"
                src={project.imagine}
                alt=""
                width={237}
                height={266}
              />
              <div className="discription">
                <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                <div className="more">{project.title}</div>
                <button
                  className="mutiple-button"
                  onClick={() => {
                    setOpenItem(true);
                    setOpenPopUp(project);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="multiple-items">
        {projectData[indexItem].details.map((project: any) => {
          return (
            <div className="item">
              <Image
                className="project-img"
                src={project.imagine}
                alt=""
                width={237}
                height={266}
              />
              <div className="discription">
                <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                <div className="more">{project.title}</div>
                <button
                  className="mutiple-button"
                  onClick={() => {
                    setOpenItem(true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Slider>
  );
};

export default MultipleItems;
