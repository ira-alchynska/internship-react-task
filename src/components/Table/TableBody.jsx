import React from "react";
import { useSelector } from "react-redux";
// import Button from "../Button/Button";
// import Pencil from "../../images/pencil.png";
const TableBody = ({ countriesData, columns, showModal }) => {
  const loading = useSelector((state) => state.loading); // library 'reselect'
  const error = useSelector((state) => state.error);

  return (
    <div className="table-body">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occurred</div>
      ) : (
        countriesData.map((country) => {
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
        })
      )}
    </div>
  );
};
export default TableBody;
