import React, { useEffect } from "react";
import CountriesSelectors from "../../redux/countries/selectors.js";
import { setFilterValue } from "../../redux/countries/actions.js";
import { fetchCountries } from "../../redux/countries/actions.js";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

const CountryCardList = () => {
  const dispatch = useDispatch();

  const countriesData = useSelector(CountriesSelectors.selectFilteredCountries);
  const filterValue = useSelector(CountriesSelectors.selectFilterValue);

  const onShowMore = () => {
    dispatch(fetchCountries());
  };

  useEffect(() => {
    if (!countriesData.length) {
      onShowMore();
    }

    return () => {
      dispatch(setFilterValue(""));
    };
  }, []);

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
        <ul className="flag-list row row-cols-3">
          {countriesData.map((country) => {
            const { id, flag, name, capital } = country;

            return (
              <li key={id} className="flag-item col">
                <div className="container">
                  <h2 className="name">{name}</h2>
                  <img
                    src={flag ?? "/flags/ukraine.png"}
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
          className="btn btn-primary"
          type="button"
          onClick={() => onShowMore()}
        >
          Load more...
        </button>
      </div>
    </>
  );
};

export default CountryCardList;
