import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import toast from "react-hot-toast";
import { putStates } from "../../api/states";
import { fetchStates, resetStates } from "../../redux/states/actions";
import StatesFormValidation from "./StatesFormValidation";

import "./styles.css";

const FormStates = ({ currentItem }) => {
  const dispatch = useDispatch();

  const initialValues = {
    id: currentItem.id,
    name: currentItem.name,
    country_code: currentItem.country_code,
    state_code: currentItem.state_code,
    latitude: currentItem.latitude,
    longitude: currentItem.longitude,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const errors = StatesFormValidation(formValues);

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

    putStates(formValues, initialValues.id);
    setIsLoading(false);

    toast.success("The data was successfully updated");
    dispatch(resetStates());
    dispatch(fetchStates());
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

        <label className="label-form" htmlFor="country_code">
          COUNTRY_CODE
        </label>
        <input
          onInput={(e) => changeField("country_code", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="country_code"
          placeholder="Edit country_code"
          value={formValues.country_code}
          className={cx("input-form", {
            "error-input": errors.country_code,
          })}
          focused={focused.toString()}
        />

        {errors.country_code && <p className="error">{errors.country_code}</p>}

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

        <label className="label-form" htmlFor="latitude">
          LATITUDE
        </label>
        <input
          onInput={(e) => changeField("latitude", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="latitude"
          placeholder="Edit latitude"
          className={cx("input-form", {
            "error-input": errors.latitude,
          })}
          value={formValues.latitude}
          focused={focused.toString()}
        />
        {errors.latitude && <p className="error">{errors.latitude}</p>}

        <label className="label-form" htmlFor="longitude">
          LONGITUDE
        </label>
        <input
          onInput={(e) => changeField("longitude", e.target.value)}
          onBlur={handleFocus}
          type="text"
          name="longitude"
          placeholder="Edit longitude"
          className={cx("input-form", {
            "error-input": errors.longitude,
          })}
          value={formValues.longitude}
          focused={focused.toString()}
        />
        {errors.longitude && <p className="error">{errors.longitude}</p>}
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

export default FormStates;
