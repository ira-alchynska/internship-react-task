import React, { useState } from "react";
import Modal from "../Modal/Modal";
import images from "../../images/index";

const TableBody = ({ countriesData, columns }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onRowClick = (country) => {
    setIsModalOpen(true);
    setModalData(country);
  };

  return (
    <div className="table-body">
      {countriesData.map((country) => {
        const columnsWithData = columns.map((column) => {
          const accessor = column.accessor;

          return country[accessor];
        });

        const id = country.id;

        return (
          <div
            className="table-row"
            key={country.id}
            onClick={() => onRowClick(country)}
          >
            {columnsWithData.map((content, index) => (
              <div key={index} className="table-column">
                {content}
              </div>
            ))}
          </div>
        );
      })}
      {isModalOpen && (
        <Modal currentItem={modalData} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};
export default TableBody;
