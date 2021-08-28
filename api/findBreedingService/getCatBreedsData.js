
const fetch =require('node-fetch');

const getCatBreedsData = async () => {
  return (await fetch(`https://api.thecatapi.com/v1/breeds`)).json();
};

module.exports ={getCatBreedsData}
  
  