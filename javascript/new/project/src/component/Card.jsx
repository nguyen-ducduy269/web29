import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        className=" card-thumb"
        src="https://media.techmaster.vn/api/static/53/HXYeoBju"
        alt="Một số trang web cho phép tạo ảnh bằng cách gõ text"
      />

      <div className="card-body">
        <h3 className="card-title">
          Một số trang web cho phép tạo ảnh bằng cách gõ text
        </h3>

        <p className="card-text">
          Dưới đây mình sẽ giới thiệu 1 số website mà có cho phép người dùng sử
          dụng ...
        </p>
      </div>

      <div className="card-meta">
        <div className="card-view">👁️ 38</div>
        <div className="card-public">28-02-2023</div>
      </div>
    </div>
  );
}
