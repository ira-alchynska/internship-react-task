import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");

import Loader from "../../Loader/Loader.jsx";

import { putCountries } from "../../api/countries";
import { fetchCountries, resetCountries } from "../../redux/countries/actions";
import formValidation from "./FormValidation";

import "./styles.css";

const Form = ({ currentItem }) => {
  const dispatch = useDispatch();

  const options = [
    "ABW",
    "AFG",
    "AGO",
    "AIA",
    "ALA",
    "ALB",
    "AND",
    "ARE",
    "ASM",
    "ATA",
    "ATF",
    "BDI",
    "BES",
    "BLM",
    "CMR",
    "CZE",
    "FIN",
    "GHA",
    "UKR",
  ];

  const initialValues = {
    id: currentItem.id,
    name: currentItem.name,
    iso3: currentItem.iso3,
    capital: currentItem.capital,
    currency: currentItem.currency,
    phone_code: currentItem.phone_code,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const errors = formValidation(formValues);

  const hasErrors = !!Object.values(errors).length;

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const changeField = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    putCountries(formValues, initialValues.id);
    setIsLoading(false);

    toast.success("The data was successfully updated");
    dispatch(resetCountries());
    dispatch(fetchCountries());

    // console.log("state", formValues);
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className="modal-form" onSubmit={onSubmit}>
        <label className="label-form" htmlFor="id">
          ID
        </label>
        <input
          onInput={(e) => changeField("id", e.target.value)}
          readOnly
          type="text"
          name="id"
          placeholder="Edit id"
          value={formValues.id}
          className="input-form"
        />

        <label className="label-form" htmlFor="name">
          NAME
        </label>
        <input
          onInput={(e) => changeField("name", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="name"
          placeholder="Edit country name"
          className={cx("input-form", {
            "error-input": errors.name,
          })}
          value={formValues.name}
          focused={focused.toString()}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label className="label-form" htmlFor="iso3">
          ISO
        </label>
        {/* <input
          onInput={(e) => changeField("iso3", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="iso3"
          placeholder="Edit iso3"
          value={formValues.iso3}
          className="input-form"
          focused={focused.toString()}
        /> */}
        <select
          value={formValues.iso3}
          onChange={(e) => changeField("iso3", e.target.value)}
          focused={focused.toString()}
          className={cx("input-form", {
            "error-input": errors.iso3,
          })}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.iso3 && <p className="error">{errors.iso3}</p>}

        <label className="label-form" htmlFor="capital">
          CAPITAL
        </label>
        <input
          onInput={(e) => changeField("capital", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="capital"
          placeholder="Edit capital"
          className={cx("input-form", {
            "error-input": errors.capital,
          })}
          value={formValues.capital}
          focused={focused.toString()}
        />
        {errors.capital && <p className="error">{errors.capital}</p>}

        <label className="label-form" htmlFor="currency">
          CURRENCY
        </label>
        <input
          onInput={(e) => changeField("currency", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="currency"
          placeholder="Edit currency"
          className={cx("input-form", {
            "error-input": errors.currency,
          })}
          value={formValues.currency}
          focused={focused.toString()}
        />
        {errors.currency && <p className="error">{errors.currency}</p>}

        <label className="label-form" htmlFor="phone_code">
          PHONE_CODE
        </label>
        <input
          onInput={(e) => changeField("phone_code", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="phone_code"
          placeholder="Edit phone_code"
          className={cx("input-form", {
            "error-input": errors.phone_code,
          })}
          value={formValues.phone_code}
          focused={focused.toString()}
        />
        {errors.phone_code && <p className="error">{errors.phone_code}</p>}
        <button
          disabled={hasErrors || isLoading}
          type="submit"
          className="btnEditRow"
        >
          {isLoading ? "Loading..." : "Edit"}
        </button>
      </form>
    </>
  );
};

export default Form;
