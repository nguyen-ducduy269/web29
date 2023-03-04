import React from "react";
import "../components/Box.css";
import PropTypes from "prop-types";

/**
 * @typedef BoxProps
 *
 * @property {string} bg Màu nền của box
 * @property {(index:number) => void} onClick Sự kiện click trên box
 *
 */

/**
 * HIển thị một box hình vuông
 *
 * @param {BoxProps} props
 * @returns {ReactNode}
 */

export default function Box({ bg, onClick }) {
  const boxStyle = {
    background: bg,
  };
  return (
    <div className="box" style={boxStyle} onClick={onClick}>
      {bg}
    </div>
  );
}

// Xác thực kiểu dữ liệu cho component Box
Box.propTypes = {
  bg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
