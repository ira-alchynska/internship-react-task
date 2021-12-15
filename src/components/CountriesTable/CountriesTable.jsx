import React from "react";
import Table from "../Table/Table";
import CountriesSelectors from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  setFilterValue,
  setHiddenColumns,
  setSortedCountries,
} from "../../redux/actions";

const CountriesTable = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(CountriesSelectors.selectIsLoading);
  const error = useSelector(CountriesSelectors.selectError);
  const headerData = useSelector(CountriesSelectors.selectHeaderData);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);
  const filteredCountries = useSelector(
    CountriesSelectors.selectFilteredCountries
  );
  const hiddenColumns = useSelector(CountriesSelectors.selectHiddenColumns);
  const sortColumnOrder = useSelector(CountriesSelectors.selectSortedColumns);

  const onPageChange = (page) => {
    dispatch(fetchCountries(page));
  };

  const onFilterChange = (value) => {
    dispatch(setFilterValue(e.target.value));
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
  );
};

export default CountriesTable;
