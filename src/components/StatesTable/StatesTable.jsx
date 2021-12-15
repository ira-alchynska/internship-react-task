import React, { useEffect } from "react";
import Table from "../Table/Table";
import StatesSelectors from "../../redux/states/selectors";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchStates,
  setFilterValueStates,
  setHiddenColumnsStates,
  setSortedStates,
} from "../../redux/states/actions";
import "./styles.css";

const StatesTable = () => {
  const dispatch = useDispatch();

  const isLoadingStates = useSelector(StatesSelectors.selectIsLoadingStates);
  const errorStates = useSelector(StatesSelectors.selectErrorStats);
  const headerDataStates = useSelector(StatesSelectors.selectHeaderDataStates);
  const filterValueStates = useSelector(
    StatesSelectors.selectFilterValueStates
  );
  const filteredStates = useSelector(StatesSelectors.selectFilteredStates);
  const hiddenColumnsStates = useSelector(
    StatesSelectors.selectHiddenColumnsStates
  );
  const sortColumnOrderStates = useSelector(
    StatesSelectors.selectSortedColumnsStates
  );

  useEffect((page) => {
    dispatch(fetchStates(page));
  }, []);

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
    <div className="table">
      <Table
        onPageChange={onPageChange}
        onFilterChange={onFilterChange}
        onHideColumn={onHideColumn}
        onSortChange={onSortChange}
        onShowAll={onShowAll}
        isLoadingStates={isLoadingStates}
        errorStates={errorStates}
        headerDataStates={headerDataStates}
        filterValueStates={filterValueStates}
        filteredStates={filteredStates}
        hiddenColumnsStates={hiddenColumnsStates}
        sortColumnOrderStates={sortColumnOrderStates}
      />
    </div>
  );
};
export default StatesTable;
