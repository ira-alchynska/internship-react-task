import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getCountries = async (page, limit = 10) => {
  const { data } = await axios.get(
    `${BASE_URL}/countries/?_page=${page}&_limit=${limit}`
  );

  return data;
};

export const putCountries = async (country, id) => {
  const { data } = await axios.put(`${BASE_URL}/countries/${id}/`, country);

  return data;
};
