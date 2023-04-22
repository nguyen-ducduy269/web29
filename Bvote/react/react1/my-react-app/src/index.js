import React from "react";
import ReactDOM from "react-dom/client";

const Hobby = () => {
  return (
    // chỉ clone đc HTMl
    <div class="menu-list">
      <a href="/" class="menu-item">
        Trang chủ
      </a>
      <a href="/shop" class="menu-item">
        Cửa hàng
      </a>
      <a href="/about" class="menu-item">
        Về chúng tôi
      </a>
      <a href="/contact" class="menu-item">
        Liên hệ
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hobby />);
