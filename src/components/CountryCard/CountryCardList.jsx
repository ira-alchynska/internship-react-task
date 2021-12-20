import React from "react";
import CountriesSelectors from "../../redux/countries/selectors.js";
//import CountryCardItem from "./CountryCardItem";
import { useSelector, useDispatch } from "react-redux";
const CountryCardList = () => {
  const countriesData = useSelector(CountriesSelectors.selectCountriesData);
  return (
    <>
    <ul></ul>
    </>
   
  );
};

export default CountryCardList;
