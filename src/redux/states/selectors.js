const selectStatesData = (state) => state.state.states;
const selectIsLoadingStates = (state) => state.state.loading;
const selectErrorStats = (state) => state.state.error;
const selectHeaderDataStates = (state) => state.state.headerData;
const selectFilterValueStates = (state) => state.state.filterValue;
const selectFilteredStates = (state) => {
  const StatesData = selectStatesData(state);

  const filterValueStates = selectFilterValueStates(state);
  return StatesData.filter((state) => {
    return state.name.toLowerCase().includes(filterValueStates.toLowerCase());
  });
};
const selectHiddenColumnsStates = (state) => state.state.hiddenColumns;
const selectSortedColumnsStates = (state) => state.state.sortColumnOrder;
const selectStatesPage = (state) => state.state.page;

const StatesSelectors = {
  selectStatesData,
  selectIsLoadingStates,
  selectErrorStats,
  selectHeaderDataStates,
  selectFilterValueStates,
  selectFilteredStates,
  selectHiddenColumnsStates,
  selectSortedColumnsStates,
  selectStatesPage,
};

export default StatesSelectors;
