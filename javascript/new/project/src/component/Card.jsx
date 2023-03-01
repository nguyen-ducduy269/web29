import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="thumbnail">
        <img
          className="card-thumb"
          src="https://tse4.mm.bing.net/th?id=OIP.mH31yrEzqgC2vDctscxNuQHaHa&pid=Api&P=0"
          alt="Music"
        />
        <div className="title">Music</div>
      </div>
      <h3 className="card-title">Manic Drive</h3>
      <div className="card-button">
        <i className="fa-solid fa-play"></i>
      </div>
    </div>
  );
}
