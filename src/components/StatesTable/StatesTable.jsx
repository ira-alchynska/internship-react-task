import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStates,
  setFilterValueStates,
  setHiddenColumnsStates,
  setSortedStates,
  incrementStatesPage,
} from "../../redux/states/actions";
import StatesSelectors from "../../redux/states/selectors";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import ModalFormStates from "../ModalFormStates/ModalFormStates";

const StatesTable = () => {
  const dispatch = useDispatch();
  const statesData = useSelector(StatesSelectors.selectStatesData);
  const isLoading = useSelector(StatesSelectors.selectIsLoadingStates);
  const error = useSelector(StatesSelectors.selectErrorStats);
  const headerData = useSelector(StatesSelectors.selectHeaderDataStates);
  const filterValue = useSelector(StatesSelectors.selectFilterValueStates);
  const filteredCountries = useSelector(StatesSelectors.selectFilteredStates);
  const hiddenColumns = useSelector(StatesSelectors.selectHiddenColumnsStates);
  const sortColumnOrder = useSelector(
    StatesSelectors.selectSortedColumnsStates
  );

  const initialFetch = () => {
    dispatch(fetchStates());
  };

  const onShowMore = () => {
    dispatch(incrementStatesPage());

    dispatch(fetchStates());
  };

  const onFilterChange = (value) => {
    dispatch(setFilterValueStates(value));
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
        data={statesData}
      />
    </>
  );
};
export default StatesTable;
