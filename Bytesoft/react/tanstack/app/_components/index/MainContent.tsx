import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

const MainContent = () => {
  function SampleArrow(props: any) {
    const { className, style } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
      />
    );
  }

  const contentSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: lastestNews } = useFetchingData(
    "http://localhost:3001/lastest-new"
  );
  if (!lastestNews) return;

  return (
    <Slider {...contentSettings}>
      {lastestNews.map((item: any) => {
        return (
          <div className="content" key={item.id}>
            <Image src={item.images} alt="" width={287} height={234} />

            <div className="discription">
              <div className="heading">
                <div className="clock">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ width: 10, height: 10 }}
                  />
                </div>

                <div className="text">{item.mainContentText}</div>

                <div className="block">|</div>

                <div className="eye">
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ width: 10, height: 10 }}
                  />
                </div>
                <div className="view">{item.mainView}</div>
              </div>

              <div className="discription-text">{item.disscriptionText}</div>

              <div className="button">
                <h4>Xem thêm</h4>
                <Link href={`/news/${item.id}`}>
                  <button style={{ cursor: "pointer" }}>+</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainContent;
