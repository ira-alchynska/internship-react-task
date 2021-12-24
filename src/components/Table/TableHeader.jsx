import React from "react";
import cx from "classnames";
import DropDown from "../Dropdown-list/DropDown";
import Button from "../Button/Button";
import Images from "../../images/index";

const NAME_DROPDOWN_ITEMS = ["ASC", "DESC", "SHOW ALL"];
const DROPDOWN_ITEMS = [...NAME_DROPDOWN_ITEMS, "HIDE"];

const TableHeader = ({
  headerData,
  onSortChange,
  onClickDropDown,
  sortedOrder = "asc",
  sortedAccessor,
}) => {
  return (
    <div className="header-row">
      {headerData.map(({ label, accessor }) => {
        const newOrder = sortedOrder === "asc" ? "desc" : "asc";

        return (
          <div className="header-column" key={label}>
            {label}
            <Button
              className={cx({
                "arrow-active":
                  sortedAccessor === accessor && sortedOrder === "asc",
              })}
              type="button"
              icon={Images.upArrow}
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
