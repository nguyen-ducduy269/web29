import React from "react";
import PropTypes from "prop-types";
import { useTodo } from "../hooks/useTodo";

/**
 * @typedef FilterOptionProps
 *
 * @property {string} label Nhãn của input
 * @property {string} value Giá trị của ô input
 * @property {boolean} checked Cho biết ô input có được chọn hay không
 */

/**
 * Hiển thị một checkbox để lọc danh sách
 *
 * @param {FilterOptionProps} props
 */
const FilterOption = ({ label, value, checked }) => {
  const handleFilterValueChange = useTodo().handleFilterValueChange;

  const handleChange = () => {
    handleFilterValueChange(value);
  };

  return (
    <label className="task-filter-option">
      <input
        type="radio"
        name="task-filter-option"
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

FilterOption.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default FilterOption;
