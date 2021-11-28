import React from "react";

const TableBody = ({ countriesData, filterValue, filteredCountry }) => {
  const countryArray = filterValue ? filteredCountry : countriesData;

  return (
    <div className="table-body">
      {countryArray.map(({ id, name, iso3, capital, currency, phone_code }) => (
        <div className="table-row" key={id}>
          <div className="table-column">{id}</div>
          <div className="table-column">{name}</div>
          <div className="table-column">{iso3}</div>
          <div className="table-column">{capital}</div>
          <div className="table-column">{currency}</div>
          <div className="table-column">{phone_code}</div>
        </div>
      ))}
    </div>
  );
};
export default TableBody;
