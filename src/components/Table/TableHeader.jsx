import React from "react";
import DropDown from "../dropdown-list/DropDown.jsx";
import Button from "../Button/Button.jsx";
import Arrow from "../../images/up-arrow.png";

const NAME_DROPDOWN_ITEMS = ["ASC", "DESC", "SHOW ALL"];
const DROPDOWN_ITEMS = [...NAME_DROPDOWN_ITEMS, "HIDE"];

const TableHeader = ({
  headerData,
  onSortChange,
  onClickDropDown,
  sortColumnOrder,
  setSortColumnOrder,
  sortedOrder = "asc",
  sortedAccessor = null,
}) => {
  return (
    <div className="header-row">
      {headerData.map(({ label, accessor }) => {
        const newOrder = sortedOrder === "asc" ? "desc" : "asc";

        return (
          <div className="header-column" key={label}>
            {label}
            <Button
              type="button"
              icon={Arrow}
              onClick={() => onSortChange({ order: newOrder, accessor })}
            />
            <DropDown
              dropdownItems={
                accessor === "name" ? NAME_DROPDOWN_ITEMS : DROPDOWN_ITEMS
              }
              onClick={onClickDropDown}
              accessor={accessor}
            />
          </div>
        );
      })}
    </div>
  );
};
export default TableHeader;
