import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen, setModalData } from "../../redux/modal/modalActions";
import AuthSelectors from "../../redux/auth/authSelectors";

const TableBody = ({ countriesData, columns }) => {
  const dispatch = useDispatch();
  const isLogIn = useSelector(AuthSelectors.selectIsAuthenticated);
  const onRowClick = (country) => {
    if (!isLogIn) {
      return;
    } else {
      dispatch(setModalOpen());
      dispatch(setModalData(country));
    }
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
            key={id}
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
    </div>
  );
};
export default TableBody;
