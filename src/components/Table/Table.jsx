import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "../../Loader/Loader.jsx";

import Filter from "../Filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

import "./styles.css";

// 1. CountriesTablePage - dummy component that renders CountriesTable

// 2. CountriesTable - component that fetch and get all table data from redux

// 3. Table - general components that receive data as PROPS

// 4. Create two more reducers or implement local business logic for two new tables

const Table = ({
  onPageChange,
  onFilterChange,
  onHideColumn,
  onShowAll,
  onSortChange,
  isLoading,
  error,
  headerData,
  filteredCountries,
  filterValue,
  hiddenColumns,
  sortColumnOrder,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    onPageChange && onPageChange(page);
  }, [page]);

  const onChangeFilter = (e) => {
    onFilterChange && onFilterChange(e.target.value);
  };

  const headerWithoutFilteredColumns = headerData.filter((column) => {
    const columnAccessor = column.accessor;
    const isHiddenColumn = hiddenColumns.includes(columnAccessor);
    return !isHiddenColumn;
  });

  const hideColumn = (columnName) => {
    onHideColumn && onHideColumn(columnName);
  };

  const onChangeSort = ({ order, accessor }) => {
    onSortChange && onSortChange(order, accessor);
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
    onShowAll && onShowAll();
  };

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
        onChangeSort({
          order: "asc",
          accessor: columnName,
        });
        break;
      case "DESC":
        onChangeSort({
          order: "desc",
          accessor: columnName,
        });
        break;
    }
  };
  return (
    <>
      <div className="table">
        <Toaster />
        <TableHeader
          onSortChange={onChangeSort}
          headerData={headerWithoutFilteredColumns}
          sortedOrder={sortColumnOrder.order}
          sortedAccessor={sortColumnOrder.accessor}
          onClickDropDown={onClickDropDown}
          sortColumnOrder={sortColumnOrder}
          //setSortedCountries={setSortedCountries}
        />
        <div className="table-filter-row">
          <Filter inputValue={filterValue} onChange={onChangeFilter} />
        </div>
        {isLoading && <Loader />}
        {error && <div>Error occurred</div>}
        {!isLoading && !error && (
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
