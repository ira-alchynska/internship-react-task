import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "../../Loader/Loader";

import Filter from "../Filter/Filter";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

import "./styles.css";

const Table = ({
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
  showMore,
  initialFetch,
  data,
}) => {
  useEffect(() => {
    if (!data.length) {
      initialFetch && initialFetch();
    }

    return () => onFilterChange("");
  }, []);

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
    showMore && showMore();
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
      <div className="table-wrapper">
        {" "}
        <div>
          <Toaster />
        </div>
        <div className="table table-striped">
          <TableHeader
            onSortChange={onChangeSort}
            headerData={headerWithoutFilteredColumns}
            sortedOrder={sortColumnOrder.order}
            sortedAccessor={sortColumnOrder.accessor}
            onClickDropDown={onClickDropDown}
            sortColumnOrder={sortColumnOrder}
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
          className="btn-primary btn"
          type="button"
          onClick={() => showMoreCountries()}
        >
          Load more...
        </button>
      </div>
    </>
  );
};
export default Table;
