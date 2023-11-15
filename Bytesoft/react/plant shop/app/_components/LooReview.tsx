import React, { useEffect, useState } from "react";
import { Review } from "../_style-components/Review";
import { Container } from "../_style-components/Container";
import Image from "next/image";

///// import images

////// import icons
import { FaStar } from "react-icons/fa";
import { IoOptionsOutline, IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const list = ["Featured", "Newest", "Highest Ratings", "Lowest Ratings"];
// const customs = [
//   {
//     id: 1,
//     main_image: neon,
//     title: "A.M.",
//     rate: 5,
//     description:
//       "The experience was great from ordering to shipping and now having my beautiful pothos! Thank you guys so much for the instructions to care for my new baby!",
//     small_image: small_neon,
//     infor: "Pothos 'Neon'",
//     feature: true,
//     newest: true,
//     highest_rate: true,
//     lowest_rate: false,
//   },
//   {
//     id: 2,
//     main_image: rosso,
//     title: "A.T.",
//     rate: 5,
//     description:
//       "Very nice and healthy!!! Only downfall is that it's cold and I'm scared if I order more, thay won't survive in the mail. Totally not you're fault.",
//     small_image: small_rosso,
//     infor: "Peperomia 'Rosso'",
//     feature: true,
//     newest: true,
//     highest_rate: true,
//     lowest_rate: false,
//   },
//   {
//     id: 3,
//     main_image: torando,
//     title: "S.T.",
//     rate: 5,
//     description:
//       "Super impressed with the crazy fast shipping and very healthy, happy plant. Wish I had found you sooner!",
//     small_image: small_torando,
//     infor: "Dracaena 'Tornado'",
//     feature: true,
//     newest: true,
//     highest_rate: true,
//     lowest_rate: false,
//   },
// ];

const LooReview = () => {
  const [display, setDisplay] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rateStar = (params: number) => {
    if (params === 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    }
    if (params === 4) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
        </>
      );
    }
    if (params === 3) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 2) {
      return (
        <>
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 1) {
      return (
        <>
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
  };

  return (
    <Review>
      <Container>
        <div className="rate">
          <div className="views">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>1,722 Reviews</p>
          </div>

          <button className="menu" onClick={() => setDisplay(true)}>
            <IoOptionsOutline />
          </button>

          {display ? (
            <div className="drop-down">
              <h3>Sort by</h3>
              <ul onClick={() => setDisplay(false)}>
                {list.map((item: any, index: number) => {
                  return (
                    <li key={index} onClick={() => setOpenIndex(index)}>
                      {item} {openIndex == index ? <MdOutlineDone /> : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="custom-reviews">
          {data.map((custom: any) => {
            return (
              <div className="customs" key={custom.id}>
                <img src={custom.main_image} alt="" />

                <div className="details">
                  <div className="title">
                    {custom.title} <IoCheckmarkDoneCircle />
                  </div>

                  <div className="stars">{rateStar(custom.rate)}</div>

                  <div className="description">{custom.description}</div>

                  <div className="more-infor">
                    <img src={custom.small_image} alt="" />
                    <div>{custom.infor}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Review>
  );
};

export default LooReview;
