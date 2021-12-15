const selectCountriesData = (state) => state.country.countries;
const selectIsLoading = (state) => state.country.loading;
const selectError = (state) => state.country.error;
const selectHeaderData = (state) => state.country.headerData;
const selectFilterValue = (state) => state.country.filterValue;
const selectFilteredCountries = (state) => {
  const countriesData = selectCountriesData(state);
  const filterValue = selectFilterValue(state);

  return countriesData.filter((country) => {
    return country.name.toLowerCase().includes(filterValue.toLowerCase());
  });
};
const selectHiddenColumns = (state) => state.country.hiddenColumns;
const selectSortedColumns = (state) => state.country.sortColumnOrder;
const selectQuery = (state) => state.country.query;
const selectIsModalOpen = (state) => state.country.isModalOpen;
const selectModalData = (state) => state.country.modalData;

const CountriesSelectors = {
  selectCountriesData,
  selectIsLoading,
  selectError,
  selectHeaderData,
  selectFilterValue,
  selectFilteredCountries,
  selectHiddenColumns,
  selectSortedColumns,
  selectQuery,
  selectIsModalOpen,
  selectModalData,
};

export default CountriesSelectors;
