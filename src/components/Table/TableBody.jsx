import React from "react";
import { useSelector } from "react-redux";
// import Button from "../Button/Button";
// import Pencil from "../../images/pencil.png";
const TableBody = ({ countriesData, columns, showModal }) => {
  return (
    <div className="table-body">
      {countriesData.map((country) => {
        const columnsWithData = columns.map((column) => {
          const accessor = column.accessor;

          return country[accessor];
        });

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
