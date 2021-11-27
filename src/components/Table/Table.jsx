import React, { useState, useEffect } from "react";
import Filter from "../filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import countries from "../../data/countries";
import columns from "../../data/columns";
import { useSelector } from "react-redux";
import "./styles.css";

const Table = () => {
  const [countriesData, setCountriesData] = useState(countries);
  const [headerData, setHeaderData] = useState(columns);
  const [inputValue, setInputValue] = useState("");
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [sortColumnOrder, setSortColumnOrder] = useState({
    order: "asc",
    accessor: null,
  });

  // useEffect(() => {
  //   console.log(sortColumnOrder);
  // }, [sortColumnOrder]);

  const filteredCountries = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const onFilterChange = (e) => {
    setInputValue(e.target.value);
  };

  const hideColumn = (columnName) => {
    setHiddenColumns([...hiddenColumns, columnName]);
  };

  const headerWithoutFilteredColumns = headerData.filter((column) => {
    const columnAccessor = column.accessor;
    const isHiddenColumn = hiddenColumns.includes(columnAccessor);
    return !isHiddenColumn;
  });

  // 64 рядок немає сенсу

  // Тиретурн робиш

  // Return в самому реакт компоненті

  // Тому і помилка
  // 1) Потрібно написати ф-ю onSortChange яка буде в стейт перезаписувати використовуючи setSortColumnOrder

  // 2) Навішати onSortChange на клік на кнопки в дропдауні і хедерах

  // 3) В кліках onSortChange має приймати order і acsessor

  // 4) створити змінну sortedCoutries яка буде сортувати filteredCountries по правилах сортування що  вже написані в handleSort

  // 5) sortedCoutries передавати в компоненти замість filteredCountries

  const onSortChange = ({ order, accessor }) => {
    console.log(order, accessor);
    setSortColumnOrder({ order, accessor });
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
    setHeaderData(columns);
    setCountriesData(countries);
  };

  const onClickDropDown = (type, columnName) => {
    console.log(type, columnName);
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
      default:
        return countriesData;
    }
  };

  return (
    <div className="table">
      <TableHeader
        onSortChange={onSortChange}
        headerData={headerWithoutFilteredColumns}
        sortedOrder={sortColumnOrder.order}
        onClickDropDown={onClickDropDown}
        sortColumnOrder={sortColumnOrder}
        setSortColumnOrder={setSortColumnOrder}
      />
      <div className="table-filter-row">
        <Filter inputValue={inputValue} onChange={onFilterChange} />
      </div>
      <TableBody
        countriesData={sortedCountries}
        columns={headerWithoutFilteredColumns}
      />
    </div>
  );
};
export default Table;
// const sortedOrder = ({ order, accessor }) => {
//   const newOrder = order === "asc" ? "desc" : "asc";
//   setHeaderData((prevState) => {
//     return prevState.map((item) =>
//       item.accessor === accessor ? { ...item, order: newOrder } : item
//     );
//   });
//};

//  1 створити стан системи де буде збережено інформацію про ордер і колонку яка зараз ордериться
//
// 2. повішати хендлери на унопки в дропдауні + кнопку в хедері
//
// 3. при кліку на ці кнопки нам потрібно міняти стан  стейту

// 4. створити нову змінну в table.js яка буде калькулюватися з фільтрованих рядків ‘filteeredCountries’
//
// 5. передати цю нову змінну в всі компоненти де нам потрібні рядки (країни)
//
// 6. оновити рядок 18 в tableheader щоб витягувати ордер з нових стейтів а не з самих headerData
