import React from "react";

export default function Text() {
  return (
    <div className="content">
      <div className="main-icon">
        <i class="fa-solid fa-video"></i>
      </div>
      <div className="main-content">
        <div className="top">
          <div className="title">
            <b>Clinical Psychologist</b>
          </div>
          <button>
            <b>PART TIME</b>
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
            <div>$25-15/hour</div>
          </div>
          <div className="money">
            <i class="fa-regular fa-money-bill-1"></i>
            <div>$40000 - 50000</div>
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
