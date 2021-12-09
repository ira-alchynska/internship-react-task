import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../Loader/Loader.jsx";

import { putCountries } from "../../api/countries";
import { fetchCountries, resetCountries } from "../../redux/actions";
import formValidation from "./FormValidation";

import "./styles.css";

const Form = ({ currentItem }) => {
  const dispatch = useDispatch();

  const initialValues = {
    id: currentItem.id,
    name: currentItem.name,
    iso3: currentItem.iso3,
    capital: currentItem.capital,
    currency: currentItem.currency,
    phone_code: currentItem.phone_code,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const changeField = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = formValidation(formValues);

    console.log("formErrors", Object.keys(formErrors).length);
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
    putCountries(formValues, initialValues.id);
    //setIsLoading(true);
    dispatch(resetCountries());
    dispatch(fetchCountries(true));
    //setIsLoading(true);

    console.log("state", formValues);
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <form className="modal-form" onSubmit={onSubmit}>
        <label className="label-form" htmlFor="id">
          ID
        </label>
        <input
          onInput={(e) => changeField("id", e.target.value)}
          type="text"
          name="id"
          placeholder="Edit id"
          value={formValues.id}
          className="input-form"
        />
        {formErrors.id && <p className="error">{formErrors.id}</p>}

        <label className="label-form" htmlFor="name">
          NAME
        </label>
        <input
          onInput={(e) => changeField("name", e.target.value)}
          type="text"
          name="name"
          placeholder="Edit country name"
          className="input-form"
          value={formValues.name}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <label className="label-form" htmlFor="iso3">
          ISO
        </label>
        <input
          onInput={(e) => changeField("iso3", e.target.value)}
          type="text"
          name="iso3"
          placeholder="Edit iso3"
          value={formValues.iso3}
          className="input-form"
        />
        {formErrors.iso3 && <p className="error">{formErrors.iso3}</p>}

        <label className="label-form" htmlFor="capital">
          CAPITAL
        </label>
        <input
          onInput={(e) => changeField("capital", e.target.value)}
          type="text"
          name="capital"
          placeholder="Edit capital"
          className="input-form"
          value={formValues.capital}
        />
        {formErrors.capital && <p className="error">{formErrors.capital}</p>}

        <label className="label-form" htmlFor="currency">
          CURRENCY
        </label>
        <input
          onInput={(e) => changeField("currency", e.target.value)}
          type="text"
          name="currency"
          placeholder="Edit currency"
          className="input-form"
          value={formValues.currency}
        />
        {formErrors.currency && <p className="error">{formErrors.currency}</p>}

        <label className="label-form" htmlFor="phone_code">
          PHONE_CODE
        </label>
        <input
          onInput={(e) => changeField("phone_code", e.target.value)}
          type="text"
          name="phone_code"
          placeholder="Edit phone_code"
          className="input-form"
          value={formValues.phone_code}
        />
        {formErrors.phone_code && (
          <p className="error">{formErrors.phone_code}</p>
        )}

        <button type="submit" className="btnEditRow">
          Edit
        </button>
      </form>
    </>
  );
};

export default Form;
