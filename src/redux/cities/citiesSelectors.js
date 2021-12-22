const selectCitiesData = (state) => state.city.cities;
const selectIsLoadingCities = (state) => state.city.loading;
const selectErrorStats = (state) => state.city.error;
const selectHeaderDataCities = (state) => state.city.headerData;
const selectFilterValueCities = (state) => state.city.filterValue;
const selectHiddenColumnsCities = (state) => state.city.hiddenColumns;
const selectSortedColumnsCities = (state) => state.city.sortColumnOrder;
const selectCitiesPage = (state) => state.city.page;
const selectFilteredCities = (state) => {
  const CitiesData = selectCitiesData(state);
  const filterValueCities = selectFilterValueCities(state);
  return CitiesData.filter((city) => {
    return city.name.toLowerCase().includes(filterValueCities.toLowerCase());
  });
};

const CitiesSelectors = {
  selectCitiesData,
  selectIsLoadingCities,
  selectErrorStats,
  selectHeaderDataCities,
  selectFilterValueCities,
  selectFilteredCities,
  selectHiddenColumnsCities,
  selectSortedColumnsCities,
  selectCitiesPage,
};

export default CitiesSelectors;
