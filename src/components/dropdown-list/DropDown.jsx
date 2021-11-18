import React, { useState } from "react";

const DropDown = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <ul
      className={dropdown ? "select-dropdown clicked" : "select-dropdown"}
      onClick={() => setDropDown(!dropdown)}
    >
      <li
        className="dropdown-item asc"
        value="asc"
        onClick={() => setDropDown(false)}
      >
        ASC
      </li>
      <li
        className="dropdown-item desc"
        value="desc"
        onClick={() => setDropDown(false)}
      >
        DESC
      </li>
      <li
        className="dropdown-item hide"
        selected
        value="hide"
        onClick={() => setDropDown(false)}
      >
        HIDE
      </li>
      <li
        className="dropdown-item show"
        value="show"
        onClick={() => setDropDown(false)}
      >
        SHOW ALL
      </li>
    </ul>
  );
};

export default DropDown;
