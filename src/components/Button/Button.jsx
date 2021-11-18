import React from "react";

import "./styles.css";

const Button = ({ icon, type, onClick }) => {
  return (
    <div className="btn-container">
      <button className=" button" type={type} onClick={onClick}>
        <img className="btn-img" src={icon} alt="" />
      </button>
    </div>
  );
};

export default Button;
