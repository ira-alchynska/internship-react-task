import React from "react";

const TableBody = ({ countriesData }) => {
  //const countryArray = inputValue ? filteredCountry : countriesData;

  return (
    <div className="table-body">
      {countriesData.map(
        ({ id, name, iso3, capital, currency, phone_code }) => {
          const columns = [id, name, iso3, capital, currency, phone_code];
          return (
            <div className="table-row" key={id}>
              {columns.map((content, index) => (
                <div key={index} className="table-column">
                  {content}
                </div>
              ))}
            </div>
          );
        }
      )}
    </div>
  );
};
export default TableBody;
