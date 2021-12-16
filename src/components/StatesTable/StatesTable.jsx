import React from "react";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import ModalFormStates from "../ModalFormStates/ModalFormStates";
import StatesSelectors from "../../redux/states/selectors";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchStates,
  setFilterValueStates,
  setHiddenColumnsStates,
  setSortedStates,
} from "../../redux/states/actions";

const StatesTable = () => {
  console.log(fetchStates());
  const dispatch = useDispatch();

  const isLoading = useSelector(StatesSelectors.selectIsLoadingStates);
  const error = useSelector(StatesSelectors.selectErrorStats);
  const headerData = useSelector(StatesSelectors.selectHeaderDataStates);
  const filterValue = useSelector(StatesSelectors.selectFilterValueStates);
  const filteredCountries = useSelector(StatesSelectors.selectFilteredStates);
  const hiddenColumns = useSelector(StatesSelectors.selectHiddenColumnsStates);
  const sortColumnOrder = useSelector(
    StatesSelectors.selectSortedColumnsStates
  );

  const onPageChange = (page) => {
    dispatch(fetchStates(page));
  };

  const onFilterChange = (value) => {
    dispatch(setFilterValueStates(e.target.value));
  };

  const onHideColumn = (columnName) => {
    dispatch(setHiddenColumnsStates([...hiddenColumns, columnName]));
  };

  const onSortChange = (order, accessor) => {
    dispatch(setSortedStates({ order, accessor }));
  };

  const onShowAll = () => {
    dispatch(setHiddenColumnsStates([]));
  };

  return (
    <>
      <Modal Form={ModalFormStates} />
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
    </>
  );
};
export default StatesTable;
