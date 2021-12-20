import React from "react";
import img from "../../images/flags/afghanistan.png";
const CountryCardItem = (image, name) => {
  return (
    <>
      <li>
        <img src={image} alt={name} columnName="country-card" />
      </li>
    </>
  );
};

export default CountryCardItem;
