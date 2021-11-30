import React from "react";
import cx from "classnames";

import "./styles.css";

const Button = ({ icon, type, onClick, className }) => {
  return (
    <div className="btn-container">
      <button className={cx("button", className)} type={type} onClick={onClick}>
        <img className="btn-img" src={icon} alt="" />
      </button>
    </div>
  );
};

export default Button;
