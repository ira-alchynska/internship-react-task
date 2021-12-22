import React, { useEffect, useState } from "react";
import CountriesSelectors from "../../redux/countries/selectors.js";
import { setFilterValue } from "../../redux/countries/actions";
import { fetchCountries } from "../../redux/countries/actions.js";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
const CountryCardList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const countriesData = useSelector(CountriesSelectors.selectFilteredCountries);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);

  useEffect(() => {
    if (!countriesData.length || page !== 1) {
      dispatch(fetchCountries(page));
    }

    return () => {
      dispatch(setFilterValue(""));
    };
  }, [page]);

  const handleChange = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <>
      <div className="card-wrapper">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={filterValue}
          className="flag-input"
          placeholder="Enter country name"
          aria-label="Recipient's username"
          onChange={handleChange}
        />
        <ul className="flag-list">
          {countriesData.map((country) => {
            const { id, flag, name, capital } = country;

            return (
              <li key={id} className="flag-item">
                <div className="container">
                  <h2 className="name">{name}</h2>
                  <img
                    src={flag ?? "/flags/default.png"}
                    alt="flag"
                    className="flag"
                  />
                  <p className="capital">Capital: {capital}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className="btn-primary"
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more...
        </button>
      </div>
    </>
  );
};

export default CountryCardList;
