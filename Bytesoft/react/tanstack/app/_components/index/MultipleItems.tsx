import React from "react";
import Slider from "react-slick";
import Image from "next/image";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

interface Props {
  typeItem: string;
  setOpenItem: (value: boolean) => void;
  // setOpenPopUp: (value: number) => void;
}

const MultipleItems = (props: Props) => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  const { data: projectData } = useFetchingData(
    "http://localhost:4000/project"
  );
  if (!projectData) return;

  return (
    <div className="multiple-items">
      <Slider {...settings}>
        {projectData.map((item: any) => {
          return (
            <div className="item" key={item.id}>
              <Image
                className="project-img"
                src={item.imagine}
                alt=""
                width={237}
                height={266}
              />
              <div className="discription">
                <div className="title">TÒA NHÀ THÀNH PHỐ</div>
                <div className="more">{item.title}</div>
                <button
                  className="mutiple-button"
                  onClick={() => {
                    props.setOpenItem(true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultipleItems;
