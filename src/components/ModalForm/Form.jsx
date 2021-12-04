import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const INITIAL_FORM_VALUES = {
  id: "",
  name: "",
  iso3: "",
  capital: "",
  currency: "",
  phoneCode: "",
};

const EditCountryForm = () => {
  const items = useSelector();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  const resetForm = () => {
    setFormValues(INITIAL_FORM_VALUES);
  };

  const changeField = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  return (
    <form class="modal-form">
      <label class="label-form" htmlFor="id">
        ID
      </label>
      <input
        onInput={(e) => changeField("id", e.target.value)}
        type="text"
        name="id"
        placeholder="Edit id"
        value={formValues.id}
        class="input-form"
      />

      <label class="label-form" htmlFor="name">
        NAME
      </label>
      <input
        type="text"
        name="name"
        placeholder="country name"
        class="input-form"
        value={formValues.name}
      />

      <label class="label-form" htmlFor="iso">
        ISO
      </label>
      <input
        type="text"
        name="iso3"
        placeholder="Edit iso"
        value={formValues.iso3}
        class="input-form"
      />

      <label class="label-form" htmlFor="capital">
        CAPITAL
      </label>
      <input
        type="text"
        name="capital"
        placeholder="Edit capital"
        class="input-form"
        value={formValues.capital}
      />

      <label class="label-form" htmlFor="currency">
        CURRENCY
      </label>
      <input
        type="text"
        name="currency"
        placeholder="Edit currency"
        class="input-form"
        value={formValues.currency}
      />

      <label class="label-form" htmlFor="phone_code">
        PHONE_CODE
      </label>
      <input
        type="text"
        name="phone_code"
        placeholder="Edit phone_code"
        class="input-form"
        value={formValues.phoneCode}
      />

      <button type="submit" class="btnEditRow">
        Edit
      </button>
    </form>
  );
};
export default EditCountryForm;
