import React from "react";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import ModalFormCities from "../ModalFormCities/ModalFormCities";
import CitiesSelectors from "../../redux/cities/citiesSelectors";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchCities,
  setCitiesFilterValue,
  setCitiesHiddenColumns,
  setSortedCities,
} from "../../redux/cities/citiesActions";

const StatesTable = () => {
  console.log(fetchCities());
  const dispatch = useDispatch();

  const isLoading = useSelector(CitiesSelectors.selectIsLoadingCities);
  const error = useSelector(CitiesSelectors.selectErrorStats);
  const headerData = useSelector(CitiesSelectors.selectHeaderDataCities);
  const filterValue = useSelector(CitiesSelectors.selectFilterValueCities);
  const filteredCountries = useSelector(CitiesSelectors.selectFilteredCities);
  const hiddenColumns = useSelector(CitiesSelectors.selectHiddenColumnsCities);
  const sortColumnOrder = useSelector(
    CitiesSelectors.selectSortedColumnsCities
  );

  const onPageChange = (page) => {
    dispatch(fetchCities(page));
  };

  const onFilterChange = (value) => {
    dispatch(setCitiesFilterValue(e.target.value));
  };

  const onHideColumn = (columnName) => {
    dispatch(setCitiesHiddenColumns([...hiddenColumns, columnName]));
  };

  const onSortChange = (order, accessor) => {
    dispatch(setSortedCities({ order, accessor }));
  };

  const onShowAll = () => {
    dispatch(setCitiesHiddenColumns([]));
  };

  return (
    <div className="table">
      <Modal Form={ModalFormCities} />
      <Table
        onPageChange={onPageChange}
        onFilterChange={onFilterChange}
        onHideColumn={onHideColumn}
        onSortChange={onSortChange}
        onShowAll={onShowAll}
        isLoading={isLoading}
        error={error}
        headerData={headerData}
        filterValue={filterValue}
        filteredCountries={filteredCountries}
        hiddenColumns={hiddenColumns}
        sortColumnOrder={sortColumnOrder}
      />
    </div>
  );
};
export default StatesTable;
