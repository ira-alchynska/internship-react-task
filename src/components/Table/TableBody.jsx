import React, { useState, useEffect } from "react";
import Filter from "../filter/Filter.jsx";
const TableBody = ({ data }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    const filtered = data.filter((country) => {
      return country.name.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFilteredCountry(filtered);
  }, [filterValue, data]);

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="table-body">
      <div className="table-filter-row">
        <Filter onChange={onChange} filterValue={filterValue} />
      </div>
      {filteredCountry.map(
        ({ id, name, iso3, capital, currency, phone_code }) => (
          <div className="table-row" key={id}>
            <div className="table-column">{id}</div>
            <div className="table-column">{name}</div>
            <div className="table-column">{iso3}</div>
            <div className="table-column">{capital}</div>
            <div className="table-column">{currency}</div>
            <div className="table-column">{phone_code}</div>
          </div>
        )
      )}
    </div>
  );
};
export default TableBody;
