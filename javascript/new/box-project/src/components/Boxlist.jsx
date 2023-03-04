import React from "react";
import "../components/Boxlist.css";
import Box from "./Box";
import propTypes from "prop-types";

/**
 * @typedef BoxProps
 *
 * @property {string} bg Màu nền của box
 * @property {() => void} onBoxClick Sự kiện click trên box
 *
 */
/**
 * @typedef BoxListProps
 *
 * @property {string{}} colors Danh sách các màu
 */

/**
 * Render ra danh sách box
 *
 * @param {BoxListProps} props
 * @returns
 */

export default function Boxlist({ colors = [], onBoxClick }) {
  // tạo ra mảng các component box
  const items = colors.map((color, index) => (
    <Box key={index} bg={color} onClick={() => onBoxClick(index)} />
  ));
  return <div className="box-list">{items}</div>;
}

// Xác thực kiểu dữ liệu cho Boxlist
Boxlist.propTypes = {
  colors: propTypes.arrayOf(propTypes.string).isRequired,
};
