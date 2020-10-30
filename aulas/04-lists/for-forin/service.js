const axios = require("axios");
const BASE_URL = "https://swapi.dev/api/people";

const obterPessoas = async (nome) => {
  const url = `${BASE_URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  obterPessoas,
};