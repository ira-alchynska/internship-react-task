import React, { useState, useEffect, useMemo } from "react";
import Filter from "../filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import handleSort from "../../utils/sort.js";
import countries from "../../data/countries";
import columns from "../../data/columns";

import "./styles.css";

const Table = () => {
  const [countriesData, setCountriesData] = useState(countries);
  const [headerData, setHeaderData] = useState(columns);
  const [inputValue, setInputValue] = useState("");
  const [sortOrder, setSortOrder] = useState({});
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [filters, setFilters] = useState({});

  const filteredCountries = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const onFilterChang = (e) => {
    setInputValue(e.target.value);
  };

  const changeOrder = ({ order, accessor }) => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setHeaderData((prevState) => {
      return prevState.map((item) =>
        item.accessor === accessor ? { ...item, order: newOrder } : item
      );
    });

    const sortedCountries = handleSort(newOrder, accessor, countriesData);
    setCountriesData(sortedCountries);
  };

  const hideColumn = (columnName) => {
    const filteredHeaderData = headerData.filter(
      ({ accessor }) => accessor !== columnName
    );

    const filteredData = countriesData.map((country) => {
      const cloneCountry = { ...country };
      delete cloneCountry[columnName];
      return cloneCountry;
    });
    setHeaderData(filteredHeaderData);
    setCountriesData(filteredData);
  };

  const showAllColumns = () => {
    setHeaderData(columns);

    setCountriesData(countries);
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
        changeOrder({
          order: "asc",
          accessor: columnName,
        });
        break;
      case "DESC":
        changeOrder({
          order: "desc",
          accessor: columnName,
        });
        break;
      default:
        return countriesData;
    }
  };

  return (
    <div className="table">
      <TableHeader
        changeOrder={changeOrder}
        headerData={headerData}
        onClickDropDown={onClickDropDown}
      />
      <div className="table-filter-row">
        <Filter inputValue={inputValue} onChange={onFilterChang} />
      </div>
      <TableBody countriesData={filteredCountries} />
    </div>
  );
};
export default Table;
