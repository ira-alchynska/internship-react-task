import React, { useState } from "react";
import Button from "../Button/Button";
import Images from "../../images";
import "./styles.css";

const DropDown = ({ onClick, accessor, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        icon={Images.more}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      {isOpen && (
        <ul className="dropdown">
          {dropdownItems.map((item) => {
            return (
              <li
                key={item}
                className="dropdown-item"
                value={item}
                onClick={() => {
                  onClick(item, accessor);
                  setIsOpen(false);
                }}
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

{
  /* <li className="dropdown-item asc" value="asc" onClick={() => setDropDown(false)}>
ASC
</li>
<li className="dropdown-item desc" value="desc" onClick={() => setDropDown(false)}>
DESC
</li>
<li className="dropdown-item hide" selected value="hide" onClick={() => setDropDown(false)}>
HIDE
</li>
<li className="dropdown-item show" value="show" onClick={() => setDropDown(false)}>
SHOW ALL
</li> */
}
