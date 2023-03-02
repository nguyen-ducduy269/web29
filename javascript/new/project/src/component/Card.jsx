import React from "react";
//PropTypes
/**
 * @typedef CardObj
 *
 * @property {string} title Tiêu đề của card
 * @property {string} text Nội dung
 * @property {string} image Hình ảnh
 * @property {number} view Số view
 * @property {string} update Ngày đăng
 * Cái này để hiển thị 1 card sản phẩm
 * @param {CardObj} props Thong tin sản phẩm
 *
 * @returns
 */
export default function Card({ title, text, view, update, image }) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img className="card-thumb" src={image} alt="Music" />
        <div className="title">{title}</div>
      </div>
      <h3 className="card-title">{text}</h3>
      <div className="card-view">
        {view < 100
          ? "ít người xem"
          : view > 100
          ? "khá nhiều người xem"
          : "tương đối người xem"}
      </div>
      <div className="card-update">{update}</div>
    </div>
  );
}

// Tìm hiểu về:
// PropTypes - xác thực dữ liệu truyền vào components
// JSDoc
// TypeScript
// Props vs State
// Các vấn đề thường gặp khi sử dụng state
// Xác định state/props
// Vị trí state
// Render components sử dụng map => key
// Two-way dât bindings
