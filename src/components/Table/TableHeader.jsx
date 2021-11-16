import React from "react";
import bubbleSort from "../../utils/sortUtils";

const TableHeader = ({ setData, setHeaderData, headerData, data }) => {
  const handleSort = (accessor, order, sortingType) => {
    console.log(order);
    setData(bubbleSort(data, order, sortingType, accessor));
  };
  return (
    <div className="header-row">
      {headerData.map(({ label }) => (
        <div
          className="header-column"
          key={label}
          onClick={() => handleSort(order, sortingType, accessor)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
export default TableHeader;
