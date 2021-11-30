import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import { fetchCountries } from "../../redux/actions.js";
import countries from "../../data/countries";
import columns from "../../data/columns";
import "./styles.css";

const Table = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.country.countries);

  const [headerData, setHeaderData] = useState(
    JSON.parse(localStorage.getItem("headerData")) ?? columns
  );
  const [inputValue, setInputValue] = useState("");
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [sortColumnOrder, setSortColumnOrder] = useState({
    order: "asc",
    accessor: null,
  });

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const onFilterChange = (e) => {
    setInputValue(e.target.value);
  };

  const hideColumn = (columnName) => {
    setHiddenColumns([...hiddenColumns, columnName]);
  };

  const headerWithoutFilteredColumns = headerData.filter((column) => {
    const columnAccessor = column.accessor;
    const isHiddenColumn = hiddenColumns.includes(columnAccessor);
    return !isHiddenColumn;
  });

  useEffect(() => {
    localStorage.setItem(
      "headerData",
      JSON.stringify(headerWithoutFilteredColumns)
    );
  }, [headerWithoutFilteredColumns]);

  const onSortChange = ({ order, accessor }) => {
    setSortColumnOrder({ order, accessor });
  };

  let sortedCountries = [...filteredCountries];

  const accessor = sortColumnOrder.accessor;
  const order = sortColumnOrder.order;

  if (accessor) {
    if (order === "asc") {
      const countiesAsc = filteredCountries.sort((a, b) =>
        isNaN(a[accessor] * 1 + b[accessor] * 1)
          ? a[accessor]?.toString().localeCompare(b[accessor]?.toString())
          : +a[accessor] - +b[accessor]
      );

      sortedCountries = countiesAsc;
    } else {
      const countiesDesc = filteredCountries.sort((a, b) =>
        isNaN(a[accessor] * 1 + b[accessor] * 1)
          ? b[accessor]?.toString().localeCompare(a[accessor]?.toString())
          : +b[accessor] - +a[accessor]
      );

      sortedCountries = countiesDesc;
    }
  }

  const showAllColumns = () => {
    setHiddenColumns([]);
  };

  const onClickDropDown = (type, columnName) => {
    switch (type) {
      case "HIDE":
        hideColumn(columnName);
        break;
      case "SHOW ALL":
        showAllColumns();
        break;
      case "ASC":
        onSortChange({
          order: "asc",
          accessor: columnName,
        });
        break;
      case "DESC":
        onSortChange({
          order: "desc",
          accessor: columnName,
        });
        break;
    }
  };

  return (
    <div className="table">
      <TableHeader
        onSortChange={onSortChange}
        headerData={headerWithoutFilteredColumns}
        sortedOrder={sortColumnOrder.order}
        sortedAccessor={sortColumnOrder.accessor}
        onClickDropDown={onClickDropDown}
        sortColumnOrder={sortColumnOrder}
        setSortColumnOrder={setSortColumnOrder}
      />
      <div className="table-filter-row">
        <Filter inputValue={inputValue} onChange={onFilterChange} />
      </div>
      <TableBody
        countriesData={sortedCountries}
        columns={headerWithoutFilteredColumns}
      />
    </div>
  );
};
export default Table;
