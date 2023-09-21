import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import {
  thuongmai,
  thuongtru,
  giaoduc,
  benhvien,
  vanphong,
  taithiet,
} from "../ImportImage";
import useFetchingData from "@/app/useFetchingData";

const Products = ({ setOpenItem, content }: any) => {
  function SampleArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black" }}
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

  const { data: entities } = useFetchingData();
  if (!entities) return;

  return (
    <Slider {...settings}>
      <div className="multiple-items">
        <div className="item">
          <Image
            className="project-img"
            src={thuongmai}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={giaoduc}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={benhvien}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={thuongtru}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={vanphong}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={taithiet}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="multiple-items">
        <div className="item">
          <Image
            className="project-img"
            src={thuongmai}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={giaoduc}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={benhvien}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={thuongtru}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={vanphong}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>

        <div className="item">
          <Image
            className="project-img"
            src={taithiet}
            alt=""
            width={237}
            height={266}
          />
          <div className="discription">
            <div className="title">{entities.discriptionTitle}</div>
            <div className="more">{content}</div>
            <button
              className="mutiple-button"
              onClick={() => setOpenItem(true)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Products;
