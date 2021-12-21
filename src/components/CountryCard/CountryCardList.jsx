import React, { useEffect } from "react";
import CountriesSelectors from "../../redux/countries/selectors.js";
//import CountryCardItem from "./CountryCardItem";
import { fetchCountries } from "../../redux/countries/actions.js";
import { useSelector, useDispatch } from "react-redux";
const CountryCardList = () => {
  const dispatch = useDispatch();

  const countriesData = useSelector(CountriesSelectors.selectCountriesData);

  // console.log("data", countriesData);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <ul className="flag-list">
        {countriesData.map((country) => {
          const { id, flag, name } = country;

          return (
            <li key={id} className="flag-item">
              <img src={flag} alt={name} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountryCardList;
