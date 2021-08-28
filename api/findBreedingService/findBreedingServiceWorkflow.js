const getCatBreedsData = require('./getCatBreedsData');
const digestCatBreedsData = require('./digestCatBreedsData');

module.exports.workflow = async () => {
  //get the data from the cat api site
  const data = await getCatBreedsData.getCatBreedsData();
  //console.log(data);

  //digest the data to return the top five cat breeding that ...
  const digestedDara = await digestCatBreedsData.digest(data);

  return digestedDara;
};
