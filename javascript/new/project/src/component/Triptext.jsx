import React from "react";

export default function Text() {
  return (
    <div className="content">
      <div className="main-icon">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Ll3ZjU3SGh4BUIIBKM_47AHaHa&pid=Api&P=0"
          alt=""
        />
      </div>
      <div className="main-content">
        <div className="top">
          <div className="title">
            <b>Senior Health and Nutrition Advisor</b>
          </div>
          <button className="full">
            <b>FULL TIME</b>
          </button>
        </div>

        <div className="mid">
          <div className="bag">
            <i class="fa-solid fa-briefcase"></i>
            <div>Telimed</div>
          </div>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <div>New York</div>
          </div>
          <div className="money">
            <i class="fa-regular fa-money-bill-1"></i>
            <div>$35000 - 30000</div>
          </div>
        </div>

        <div className="bottom">
          The successful individual will be working within a small treatment
          service with patients that have either Learning Disabilities and/or
          mental health problems. The post holder will be required to.
        </div>
      </div>
    </div>
  );
}
