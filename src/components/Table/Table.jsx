import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader.jsx";
import CountriesSelectors from "../../redux/selectors.js";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import {
  fetchCountries,
  setFilterValue,
  setHiddenColumns,
  setSortedCountries,
} from "../../redux/actions.js";
import "./styles.css";

const Table = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const loading = useSelector(CountriesSelectors.selectIsLoading);
  const error = useSelector(CountriesSelectors.selectError);
  const headerData = useSelector(CountriesSelectors.selectHeaderData);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);
  const filteredCountries = useSelector(
    CountriesSelectors.selectFilteredCountries
  );
  const hiddenColumns = useSelector(CountriesSelectors.selectHiddenColumns);
  const sortColumnOrder = useSelector(CountriesSelectors.selectSortedColumns);

  useEffect(() => {
    dispatch(fetchCountries(page));
  }, [page]);

  const onFilterChange = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  const hideColumn = (columnName) => {
    dispatch(setHiddenColumns([...hiddenColumns, columnName]));
  };

  const headerWithoutFilteredColumns = headerData.filter((column) => {
    const columnAccessor = column.accessor;
    const isHiddenColumn = hiddenColumns.includes(columnAccessor);
    return !isHiddenColumn;
  });

  const onSortChange = ({ order, accessor }) => {
    dispatch(setSortedCountries({ order, accessor }));
  };

  let sortedCountries = [...filteredCountries];

  const accessor = sortColumnOrder.accessor;
  const order = sortColumnOrder.order;

  if (accessor) {
    if (order === "asc") {
      const countiesAsc = filteredCountries.sort((a, b) =>
        isNaN(a[accessor] * 1 + b[accessor] * 1)
          ? a[accessor]?.toString().localeCompare(b[accessor]?.toString())
          : +a[accessor] - +b[accessor]
      );

      sortedCountries = countiesAsc;
    } else {
      const countiesDesc = filteredCountries.sort((a, b) =>
        isNaN(a[accessor] * 1 + b[accessor] * 1)
          ? b[accessor]?.toString().localeCompare(a[accessor]?.toString())
          : +b[accessor] - +a[accessor]
      );

      sortedCountries = countiesDesc;
    }
  }

  const showAllColumns = () => {
    dispatch(setHiddenColumns([]));
  };

  // useEffect(() => {
  //   console.log(page);
  //   dispatch(fetchCountries(10, page));
  // }, [page]);

  const showMoreCountries = () => {
    setPage(page + 1);
  };

  const onClickDropDown = (type, columnName) => {
    switch (type) {
      case "HIDE":
        hideColumn(columnName);
        break;
      case "SHOW ALL":
        showAllColumns();
        break;
      case "ASC":
        onSortChange({
          order: "asc",
          accessor: columnName,
        });
        break;
      case "DESC":
        onSortChange({
          order: "desc",
          accessor: columnName,
        });
        break;
    }
  };

  return (
    <>
      <div className="table">
        <TableHeader
          onSortChange={onSortChange}
          headerData={headerWithoutFilteredColumns}
          sortedOrder={sortColumnOrder.order}
          sortedAccessor={sortColumnOrder.accessor}
          onClickDropDown={onClickDropDown}
          sortColumnOrder={sortColumnOrder}
          setSortedCountries={setSortedCountries}
        />
        <div className="table-filter-row">
          <Filter inputValue={filterValue} onChange={onFilterChange} />
        </div>
        {loading && <Loader />}
        {error && <div>Error occurred</div>}
        {!loading && !error && (
          <TableBody
            countriesData={sortedCountries}
            columns={headerWithoutFilteredColumns}
          />
        )}
      </div>
      <button
        className="btn-primary"
        type="button"
        onClick={() => showMoreCountries()}
      >
        Load more...
      </button>
    </>
  );
};
export default Table;
