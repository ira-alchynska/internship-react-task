const formValidation = (value) => {
  const errors = {};
  console.log(value);
  if (!value.id) {
    errors.id = "The id is required";
  }
  if (isNaN(Number(value.id))) {
    errors.id = "Must be a number";
  }
  if (value.name.length < 3 || value.name.length > 20) {
    console.log(value.name.length, "nameLength");
    errors.name = "Country name should be from 3 to 20 letters";
  }
  if (value.iso3.length < 3 || value.iso3.length > 10) {
    console.log(value.iso, "value");
    errors.iso3 = "Country capital should be from 3 to 10 letters";
  }
  if (value.capital.length < 3 || value.capital.length > 10) {
    console.log(value.capital.length, "value");
    errors.capital = "Country capital should be from 3 to 20 letters";
  }
  if (value.currency.length < 3 || value.currency.length > 10) {
    console.log(value.currency, "value");
    errors.currency = "Country currency should be from 3 to 20 letters";
  }
  if (value.phone_code.length < 3 || value.phone_code.length > 10) {
    console.log(value.phone_code, "value");

    errors.phone_code = "Country phone_code should be not empty";
  }
 
  console.log(errors, "errors");
  return errors;
};

export default formValidation;


