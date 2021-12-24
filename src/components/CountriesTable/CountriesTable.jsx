import React from "react";
import CountriesSelectors from "../../redux/countries/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  setFilterValue,
  setHiddenColumns,
  setSortedCountries,
  incrementCountriesPage,
} from "../../redux/countries/actions";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import Form from "../ModalFormCountries/CountriesForm";

const CountriesTable = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector(CountriesSelectors.selectCountriesData);
  const isLoading = useSelector(CountriesSelectors.selectIsLoading);
  const error = useSelector(CountriesSelectors.selectError);
  const headerData = useSelector(CountriesSelectors.selectHeaderData);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);
  const filteredCountries = useSelector(
    CountriesSelectors.selectFilteredCountries
  );
  const hiddenColumns = useSelector(CountriesSelectors.selectHiddenColumns);
  const sortColumnOrder = useSelector(CountriesSelectors.selectSortedColumns);

  const initialFetch = () => {
    dispatch(fetchCountries());
  };
  const onShowMore = () => {
    dispatch(incrementCountriesPage());
    dispatch(fetchCountries());
  };
  const onFilterChange = (value) => {
    dispatch(setFilterValue(value));
  };

  const onHideColumn = (columnName) => {
    dispatch(setHiddenColumns([...hiddenColumns, columnName]));
  };

  const onSortChange = (order, accessor) => {
    dispatch(setSortedCountries({ order, accessor }));
  };

  const onShowAll = () => {
    dispatch(setHiddenColumns([]));
  };

  return (
    <>
      <Modal Form={Form} />

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
        data={countriesData}
      />
    </>
  );
};

export default CountriesTable;
