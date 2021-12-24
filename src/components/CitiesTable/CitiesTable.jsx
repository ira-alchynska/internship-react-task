import React from "react";
import Table from "../Table/Table.jsx";
import Modal from "../Modal/Modal.jsx";
import ModalFormCities from "../ModalFormCities/ModalFormCities.jsx";
import CitiesSelectors from "../../redux/cities/citiesSelectors.js";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCities,
  setCitiesFilterValue,
  setCitiesHiddenColumns,
  setSortedCities,
  incrementCitiesPage,
} from "../../redux/cities/citiesActions.js";

const StatesTable = () => {
  const dispatch = useDispatch();
  const citiesData = useSelector(CitiesSelectors.selectCitiesData);
  const isLoading = useSelector(CitiesSelectors.selectIsLoadingCities);
  const error = useSelector(CitiesSelectors.selectErrorStats);
  const headerData = useSelector(CitiesSelectors.selectHeaderDataCities);
  const filterValue = useSelector(CitiesSelectors.selectFilterValueCities);
  const filteredCountries = useSelector(CitiesSelectors.selectFilteredCities);
  const hiddenColumns = useSelector(CitiesSelectors.selectHiddenColumnsCities);
  const sortColumnOrder = useSelector(
    CitiesSelectors.selectSortedColumnsCities
  );

  const initialFetch = () => {
    dispatch(fetchCities());
  };

  const onShowMore = () => {
    dispatch(incrementCitiesPage());
    dispatch(fetchCities());
  };

  const onFilterChange = (value) => {
    dispatch(setCitiesFilterValue(value));
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
    <>
      <Modal Form={ModalFormCities} />
      <Table
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
        showMore={onShowMore}
        initialFetch={initialFetch}
        data={citiesData}
      />
    </>
  );
};
export default StatesTable;
