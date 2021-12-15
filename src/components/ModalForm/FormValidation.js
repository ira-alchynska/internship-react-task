const isValidLength = (value, minLength, maxLength) =>
  value.length < minLength || value.length > maxLength;

const createMaxMinLengthError = (fieldName, max, min) =>
  `Country ${fieldName} should be from ${max} to ${min} letters`;

const formValidation = (value) => {
  const errors = {};

  if (isValidLength(value.name, 2, 20)) {
    errors.name = createMaxMinLengthError("name", 2, 20);
  }
  if (isValidLength(value.iso3, 2, 10)) {
    errors.iso3 = createMaxMinLengthError("iso3", 2, 10);
  }
  if (isValidLength(value.capital, 2, 10)) {
    errors.capital = createMaxMinLengthError("capital", 2, 10);
  }
  if (isValidLength(value.currency, 2, 10)) {
    errors.currency = createMaxMinLengthError("currency", 2, 10);
  }
  if (isValidLength(value.phone_code, 2, 10)) {
    errors.phone_code = "Country phone_code should not be blank";
  }

  //console.log(errors, "errors");
  return errors;
};

export default formValidation;
