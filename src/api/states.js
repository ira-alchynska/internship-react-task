import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getStates = async (page, limit = 10) => {
  const { data } = await axios.get(
    `${BASE_URL}/states/?_page=${page}&_limit=${limit}`
  );

  return data;
};

export const putStates = async (state, id) => {
  const { data } = await axios.put(`${BASE_URL}/states/${id}/`, state);

  return data;
};
