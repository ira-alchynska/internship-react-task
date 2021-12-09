import { validationFormError } from "../../redux/actions";

const validationFormValues = ({
  name,
  iso3,
  capital,
  currency,
  phone_code,
}) => {
  if (name < 3 || name > 20) {
    dispatch(
      validationFormError({
        message: "Country name should be from 3 to 20 letters ",
      })
    );
    return;
  }
  if (iso3 < 1 || iso3 > 5) {
    dispatch(
      validationFormError({
        message: "Country iso3 should be from 1 to 5 letters ",
      })
    );
    return;
  }
  if (capital < 3 || capital > 20) {
    dispatch(
      validationFormError({
        message: "Country capital should be from 3 to 20 letters ",
      })
    );
    return;
  }
  if (currency < 1 || currency > 5) {
    dispatch(
      validationFormError({
        message: "Country currency should be from 1 to 5 letters ",
      })
    );
    return;
  }
  if (phone_code < 1 || phone_code > 5) {
    dispatch(
      validationFormError({
        message: "Country phone_code should be from 1 to 5 letters ",
      })
    );
    return;
  }
  return true;
};

export default validationFormValues;
