import React, { useState } from "react";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import countries from "../../data/countries.js";
import columns from "../../data/columns.js";
import "./styles.css";

const Table = () => {
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
      <TableBody data={countriesData} />
    </div>
  );
};
export default Table;
