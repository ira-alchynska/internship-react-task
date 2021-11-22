import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import More from "../../images/more.png";
import "./styles.css";

const DropDown = ({ onClick, accessor, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        icon={More}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      {isOpen && (
        <ul className="dropdown">
          {dropdownItems.map((item) => {
            return (
              <li
                key={item}
                className="dropdown-item "
                value={item}
                onClick={() => onClick(item, accessor)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default DropDown;
