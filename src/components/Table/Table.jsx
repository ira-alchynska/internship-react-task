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
  const [filterValue, setFilterValue] = useState("");
  const [sortOrder, setSortOrder] = useState({});
  console.log("sortOrder :>> ", sortOrder);

  const filteredCountry = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

  const changeOrder = ({ order, accessor }) => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setHeaderData((oldState) => {
      return oldState.map((item) =>
        item.accessor === accessor ? { ...item, order: newOrder } : item
      );
    });
    setSortOrder({ order: newOrder, accessor });
  };

  const sortedCountries = useMemo(
    () => handleSort(sortOrder.order, sortOrder.accessor, countriesData),
    [sortOrder, countriesData]
  );

  useEffect(() => {
    setCountriesData(sortedCountries);
  }, [sortedCountries]);

  return (
    <div className="table">
      <TableHeader
        setData={setCountriesData}
        changeOrder={changeOrder}
        headerData={headerData}
        setHeaderData={setHeaderData}
        data={countriesData}
      />
      <div className="table-filter-row">
        <Filter filterValue={filterValue} onChange={onChange} />
      </div>
      <TableBody
        countriesData={countriesData}
        filteredCountry={filteredCountry}
        filterValue={filterValue}
      />
    </div>
  );
};
export default Table;
