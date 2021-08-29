const fetch = require("node-fetch");
const headers = {
  'Accept': "application/json",
  'x-api-key': "51eda471-43bb-4301-8901-9a6587a8e75a",
};

const getCatBreedsData = async () => {
  return (await fetch(`https://api.thecatapi.com/v1/breeds`, headers)).json();
};

module.exports = { getCatBreedsData };

module.exports = { getCatBreedsData };
