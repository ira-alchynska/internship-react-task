import React from "react";

const TableBody = ({ countriesData, columns }) => {
  return (
    <div className="table-body">
      {countriesData.map((country) => {
        const columnsWithData = columns.map((column) => {
          const accessor = column.accessor; //id, name, iso3, capital ,currency, phone_code
          //console.log(country[accessor]);
          return country[accessor]; // value of countries according to column accessor 1, Afghanistan, AFG, Kabul, AFN, 93
        });
        //console.log(columnsWithData); // countries arrays [50, 'Congo', 'COG', 'Brazzaville', 'XAF', '242']
        const id = country.id;

        return (
          <div className="table-row" key={id}>
            {columnsWithData.map((content, index) => (
              <div key={index} className="table-column">
                {content}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default TableBody;
