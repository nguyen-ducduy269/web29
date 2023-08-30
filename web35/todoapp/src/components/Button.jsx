import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {"primary" | "danger"} variant Biến thể của nút
 * @property {function} onClick
 */

/**
 * Hiển thị một nút
 *
 * @param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ variant, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`btn btn-${variant}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "danger"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
