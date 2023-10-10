import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { contentImg } from "../ImportImage";
import { useFetchingData } from "@/app/useFetchingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const MainContent = () => {
  function ContentArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }

  const contentSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    nextArrow: <ContentArrow />,
    prevArrow: <ContentArrow />,
  };

  const { data: entities } = useFetchingData();
  if (!entities) return;

  return (
    <Slider {...contentSettings}>
      <div className="main-content">
        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <Image src={contentImg} alt="" width={287} height={234} />
          <div className="discription">
            <div className="heading">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: 10, height: 10 }}
                />
              </div>
              <div className="text">{entities.mainContentText}</div>
              <div className="block">|</div>
              <div className="eye">
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="view">{entities.mainView}</div>
            </div>
            <div className="text">{entities.disscriptionText}</div>
            <div className="button">
              <h4>Xem thêm</h4>
              <Link href="/news/100">
                <button>+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MainContent;
