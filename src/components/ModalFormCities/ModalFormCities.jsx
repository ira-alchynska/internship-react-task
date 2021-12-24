import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import toast from "react-hot-toast";
import { putCities } from "../../api/cities";
import { fetchCities, resetCities } from "../../redux/cities/citiesActions";
import CitiesFormValidation from "./CitiesFormValidation";
import "./styles.css";

const FormCities = ({ currentItem }) => {
  const dispatch = useDispatch();

  const initialValues = {
    id: currentItem.id,
    name: currentItem.name,
    state_id: currentItem.state_id,
    state_code: currentItem.state_code,
    wikiDataId: currentItem.wikiDataId,
    country_code: currentItem.country_code,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const errors = CitiesFormValidation(formValues);

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

    putCities(formValues, initialValues.id);
    setIsLoading(false);

    toast.success("The data was successfully updated");
    dispatch(resetCities());
    dispatch(fetchCities());
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
          placeholder="Edit state name"
          className={cx("input-form", {
            "error-input": errors.name,
          })}
          value={formValues.name}
          focused={focused.toString()}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label className="label-form" htmlFor="state_id">
          STATE_ID
        </label>
        <input
          onInput={(e) => changeField("state_id", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="state_id"
          placeholder="Edit state_id"
          value={formValues.state_id}
          className="input-form"
          focused={focused.toString()}
        />

        {errors.state_id && <p className="error">{errors.state_id}</p>}

        <label className="label-form" htmlFor="state_code">
          STATE_CODE
        </label>
        <input
          onInput={(e) => changeField("state_code", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="state_code"
          placeholder="Edit state_code"
          className={cx("input-form", {
            "error-input": errors.state_code,
          })}
          value={formValues.state_code}
          focused={focused.toString()}
        />
        {errors.state_code && <p className="error">{errors.state_code}</p>}

        <label className="label-form" htmlFor="wikiDataId">
          WIKIDATAID
        </label>
        <input
          onInput={(e) => changeField("wikiDataId", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="wikiDataId"
          placeholder="Edit wikiDataId"
          className={cx("input-form", {
            "error-input": errors.wikiDataId,
          })}
          value={formValues.wikiDataId}
          focused={focused.toString()}
        />
        {errors.wikiDataId && <p className="error">{errors.wikiDataId}</p>}

        <label className="label-form" htmlFor="country_code">
          COUNTRY_CODE
        </label>
        <input
          onInput={(e) => changeField("country_code", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="country_code"
          placeholder="Edit country_code"
          className={cx("input-form", {
            "error-input": errors.country_code,
          })}
          value={formValues.country_code}
          focused={focused.toString()}
        />
        {errors.country_code && <p className="error">{errors.country_code}</p>}
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

export default FormCities;
