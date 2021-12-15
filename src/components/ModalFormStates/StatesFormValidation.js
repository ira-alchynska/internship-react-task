const isValidLength = (value, minLength, maxLength) =>
  value.length < minLength || value.length > maxLength;

const createMaxMinLengthError = (fieldName, max, min) =>
  `Country ${fieldName} should be from ${max} to ${min} letters`;

const StatesFormValidation = (value) => {
  const errors = {};

  if (isValidLength(value.name, 2, 20)) {
    errors.name = createMaxMinLengthError("name", 2, 20);
  }
  if (isValidLength(value.country_code, 2, 10)) {
    errors.country_code = createMaxMinLengthError("country_code", 2, 10);
  }
  if (isValidLength(value.state_code, 2, 10)) {
    errors.state_code = createMaxMinLengthError("state_code", 2, 20);
  }
  if (isValidLength(value.latitude, 2, 10)) {
    errors.latitude = createMaxMinLengthError("latitude", 2, 10);
  }
  if (isValidLength(value.longitude, 2, 10)) {
    errors.longitude = createMaxMinLengthError("longitude", 2, 10);
  }

  //console.log(errors, "errors");
  return errors;
};

export default StatesFormValidation;
