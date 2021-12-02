import React, { useState, useEffect } from "react";

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
  const dispatch = useDispatch();

  const loading = useSelector(CountriesSelectors.selectIsLoading); // library 'reselect'
  const error = useSelector(CountriesSelectors.selectError);
  const headerData = useSelector(CountriesSelectors.selectHeaderData);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);
  const filteredCountries = useSelector(
    CountriesSelectors.selectFilteredCountries
  );
  const hiddenColumns = useSelector(CountriesSelectors.selectHiddenColumns);
  const sortColumnOrder = useSelector(CountriesSelectors.selectSortedColumns);

  // const [sortColumnOrder, setSortColumnOrder] = useState({
  //   order: "asc",
  //   accessor: null,
  // });

  useEffect(() => {
    dispatch(fetchCountries());
    restoreData();
  }, []);

  useEffect(() => {
    localStorage.setItem("hiddenColumns", JSON.stringify(hiddenColumns));
    localStorage.setItem("filterValue", JSON.stringify(filterValue));
    localStorage.setItem("sortColumnOrder", JSON.stringify(sortColumnOrder));
  }, [hiddenColumns, filterValue, sortColumnOrder]);

  const restoreData = () => {
    const STORE_DATA = [
      {
        value: localStorage.getItem("hiddenColumns"),
        func: (value) => dispatch(setHiddenColumns(value)),
      },
      {
        value: localStorage.getItem("filterValue"),
        func: (value) => dispatch(setFilterValue(value)),
      },
      {
        value: localStorage.getItem("sortColumnOrder"),
        func: (value) => dispatch(setSortedCountries(value)),
      },
    ];

    STORE_DATA.forEach(({ value, func }) => value && func(JSON.parse(value)));
  };

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
    setHiddenColumns([]);
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
      {loading && <div>Loading...</div>}
      {error && <div>Error occurred</div>}
      {!loading && !error && (
        <TableBody
          countriesData={sortedCountries}
          columns={headerWithoutFilteredColumns}
        />
      )}
    </div>
  );
};
export default Table;
