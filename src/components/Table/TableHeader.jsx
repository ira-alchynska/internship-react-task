import React from "react";
import countries from "../../data/countries.js";
import columns from "../../data/columns.js";
import DropDown from "../dropdown-list/DropDown.jsx";
import Button from "../Button/Button.jsx";
import Arrow from "../../images/up-arrow.png";

const NAME_DROPDOWN_ITEMS = ["ASC", "DESC", "SHOW ALL"];
const DROPDOWN_ITEMS = [...NAME_DROPDOWN_ITEMS, "HIDE"];

const TableHeader = ({
  headerData,
  setHeaderData,
  changeOrder,
  data,
  setData,
}) => {
  const hideColumn = (columnName) => {
    const filteredHeaderData = headerData.filter(
      ({ accessor }) => accessor !== columnName
    );
    const filteredData = JSON.parse(JSON.stringify(data)).reduce(
      (acc, item) => {
        delete item[columnName];
        acc.push(item);
        return acc;
      },
      []
    );
    setHeaderData(filteredHeaderData);
    setData(filteredData);
  };

  const showAllColumns = () => {
    setHeaderData(columns);

    setData(countries);
  };

  const onClickDropDown = (type, columnName) => {
    console.log(columnName);
    switch (type) {
      case "HIDE":
        hideColumn(columnName);
        break;
      case "SHOW ALL":
        showAllColumns();
        break;
      case "asc":
        changeOrder({ order: type, accessor: columnName });
        console.log({ order: type, accessor: columnName });
        break;
      case "desc":
        changeOrder({ order: type, accessor: columnName });
        break;
      default:
        console.log("any");
    }
  };

  return (
    <div className="header-row">
      {headerData.map(({ label, order, accessor }) => (
        <div className="header-column" key={label}>
          {label}
          <Button
            type="button"
            icon={Arrow}
            onClick={() => changeOrder({ order, accessor })}
          />
          <DropDown
            dropdownItems={
              accessor === "name" ? NAME_DROPDOWN_ITEMS : DROPDOWN_ITEMS
            }
            onClick={onClickDropDown}
            accessor={accessor}
          />
        </div>
      ))}
    </div>
  );
};
export default TableHeader;
