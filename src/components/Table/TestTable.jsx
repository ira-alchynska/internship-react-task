import React, { useState, useEffect, useMemo } from "react";
import Filter from "../filter/Filter.jsx";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import handleSort from "../../utils/sort.js";
import countries from "../../data/countries";
import columns from "../../data/columns";
import Button from "../Button/Button.jsx";
import Arrow from "../../images/up-arrow.png";
import More from "../../images/more.png";
import "./styles.css";

import "./styles.css";

const Table = () => {
  const [countriesData, setCountriesData] = useState(countries);
  const [headerData, setHeaderData] = useState(columns);
  const [filterValue, setFilterValue] = useState("");
  const [sortOrder, setSortOrder] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const countryArray = filterValue ? filteredCountry : countriesData;
  const NAME_DROPDOWN_ITEMS = ["ASC", "DESC", "SHOW ALL"];
  const DROPDOWN_ITEMS = [...NAME_DROPDOWN_ITEMS, "HIDE"];

  const filteredCountry = countriesData.filter((country) => {
    return country.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

  const changeOrder = ({ order, accessor }) => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setHeaderData((oldState) => {
      return oldState.map((item) =>
        item.accessor === accessor ? { ...item, order: newOrder } : item
      );
    });
    setSortOrder({ order: newOrder, accessor });
  };

  const sortedCountries = useMemo(
    () => handleSort(sortOrder.order, sortOrder.accessor, countriesData),
    [sortOrder, countriesData]
  );

  useEffect(() => {
    setCountriesData(sortedCountries);
  }, [sortedCountries]);

  const hideColumn = (columnName) => {
    console.log(columnName);
    const filteredHeaderData = headerData.filter(
      ({ accessor }) => accessor !== columnName
    );

    const filteredData = JSON.parse(JSON.stringify(countriesData)).reduce(
      (acc, item) => {
        delete item[columnName];
        acc.push(item);
        return acc;
      },
      []
    );
    setHeaderData(filteredHeaderData);
    setCountriesData(filteredData);
  };

  const showAllColumns = () => {
    setHeaderData(columns);

    setCountriesData(countries);
  };

  const onClickDropDown = (type, columnName) => {
    console.log(type);
    switch (type) {
      case "HIDE":
        hideColumn(columnName);
        break;
      case "SHOW ALL":
        showAllColumns();
        break;
      case "asc":
        changeOrder({ type, columnName });
        break;
      case "desc":
        changeOrder(type);
        break;
      default:
        return countriesData;
    }
  };

  return (
    <div className="table">
      <div className="header-row">
        {headerData.map(({ label, order, accessor }) => (
          <div className="header-column" key={label}>
            {label}
            <div className="btn-container">
              <button
                className=" button"
                type="button"
                onClick={() => changeOrder({ order, accessor })}
              >
                <img className="btn-img" src={Arrow} alt="" />
              </button>
            </div>
            <div className="btn-container">
              <button className=" button" type="button">
                <img className="btn-img" src={More} alt="" />
              </button>
            </div>
            {isOpen && (
              <ul className="dropdown">
                {dropdownItems.map((item, accessor) => {
                  accessor === "name" ? NAME_DROPDOWN_ITEMS : DROPDOWN_ITEMS;
                  return (
                    <li
                      key={item}
                      className="dropdown-item asc"
                      value={item}
                      onClick={() => onClick(item, accessor)}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="table-filter-row">
        <div>
          <label htmlFor="filter">
            Search by name
            <input
              type="text"
              className="input"
              placeholder="Search country"
              name="filter"
              value={filterValue}
            />
          </label>
        </div>
      </div>
      <div className="table-body">
        {countryArray.map(
          ({ id, name, iso3, capital, currency, phone_code }) => (
            <div className="table-row" key={id}>
              <div className="table-column">{id}</div>
              <div className="table-column">{name}</div>
              <div className="table-column">{iso3}</div>
              <div className="table-column">{capital}</div>
              <div className="table-column">{currency}</div>
              <div className="table-column">{phone_code}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Table;
