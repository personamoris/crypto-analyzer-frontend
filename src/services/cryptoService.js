import axios from "axios";

const API_URL = "http://localhost:8080/api/cryptos";

export const getCryptoStats = async (symbol) => {
  const response = await axios.get(`${API_URL}/${symbol}/stats`);
  return response.data;
};

export const getHighestNormalizedRange = async () => {
  const response = await axios.get(`${API_URL}/highest-range`);
  return response.data;
};

export const getHighestNormalizedRangeForDay = async (date) => {
  const response = await axios.get(
    `${API_URL}/${date}/highest-normalized-range`
  );
  return response.data;
};
