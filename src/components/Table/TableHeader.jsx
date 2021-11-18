import React from "react";
import bubbleSort from "../../utils/sortUtils.js";
import Button from "../Button/Button.jsx";
import More from "../../images/more.png";
import Arrow from "../../images/up-arrow.png";

const TableHeader = ({ setData, setHeaderData, headerData, data }) => {
  // console.log(setData);
  // console.log(setHeaderData);
  // console.log(headerData);
  // console.log(data);
  // const handleSort = (accessor, order, sortingType) => {
  //   setData(bubbleSort(data, accessor, sortingType, order));
  // };

  return (
    <div className="header-row">
      {headerData.map(({ label }) => (
        <div className="header-column" key={label}>
          {label}
          <Button
            type="button"
            icon={Arrow}
            //onClick={() => handleSort(accessor, order, sortingType)}
          />
          <Button type="button" icon={More} />
        </div>
      ))}
    </div>
  );
};
export default TableHeader;
