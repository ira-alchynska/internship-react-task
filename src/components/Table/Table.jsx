import React, { useState } from "react";
import Filter from "../filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import countries from "../../data/countries";
import columns from "../../data/columns";

import "./styles.css";

const Table = ({ filteredCountries }) => {
  const [countriesData, setCountriesData] = useState(countries);
  const [headerData, setHeaderData] = useState(columns);

  return (
    <div className="table">
      <TableHeader
        setData={setCountriesData}
        setHeaderData={setHeaderData}
        headerData={headerData}
        data={countriesData}
      />
      <TableBody data={countriesData} countries={filteredCountries} />
    </div>
  );
};
export default Table;
